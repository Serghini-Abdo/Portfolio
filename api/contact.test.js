import handler from "./contact.js";

const createResponse = () => {
  const response = { statusCode: 200, body: null };
  return {
    response,
    status(code) {
      response.statusCode = code;
      return this;
    },
    json(body) {
      response.body = body;
      return this;
    },
  };
};

beforeEach(() => {
  process.env.RESEND_API_KEY = "test-key";
  process.env.CONTACT_TO_EMAIL = "owner@example.com";
  process.env.CONTACT_FROM_EMAIL = "portfolio@example.com";
});

test("rejects non-JSON contact requests", async () => {
  const res = createResponse();

  await handler({ method: "POST", headers: {}, body: {} }, res);

  expect(res.response.statusCode).toBe(415);
});

test("rejects oversized contact messages", async () => {
  const res = createResponse();

  await handler(
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: {
        name: "Abdel",
        email: "visitor@example.com",
        subject: "Hello",
        message: "x".repeat(5001),
      },
    },
    res
  );

  expect(res.response.statusCode).toBe(400);
});

test("silently ignores honeypot submissions", async () => {
  const res = createResponse();

  await handler(
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: { website: "bot-filled-this" },
    },
    res
  );

  expect(res.response.statusCode).toBe(200);
  expect(res.response.body).toEqual({ success: true });
});
