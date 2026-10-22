module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  if (!req.headers?.["content-type"]?.toLowerCase().startsWith("application/json")) {
    return res.status(415).json({ error: "Content-Type must be application/json" });
  }

  if (
    !process.env.RESEND_API_KEY ||
    !process.env.CONTACT_TO_EMAIL ||
    !process.env.CONTACT_FROM_EMAIL
  ) {
    return res.status(500).json({ error: "Contact service is not configured" });
  }

  const body = req.body || {};
  const fields = ["name", "email", "subject", "message"];

  if (typeof body.website === "string" && body.website.trim()) {
    return res.status(200).json({ success: true });
  }

  if (fields.some((field) => typeof body[field] !== "string")) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const { name, email, subject, message } = Object.fromEntries(
    fields.map((field) => [field, body[field].trim()])
  );

  if (
    !name ||
    !email ||
    !subject ||
    !message ||
    name.length > 100 ||
    email.length > 254 ||
    subject.length > 200 ||
    message.length > 5000 ||
    !/^\S+@\S+\.\S+$/.test(email)
  ) {
    return res.status(400).json({ error: "Invalid contact form data" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Unable to send message" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact delivery failed:", error);
    return res.status(500).json({ error: "Unable to send message" });
  }
};
