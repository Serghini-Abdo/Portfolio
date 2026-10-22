import { fireEvent, render, screen } from "@testing-library/react";
import App from "./app/App";

test("renders the portfolio sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /expertise/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /^portfolio$/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /contact me/i })).toBeInTheDocument();
});

test("shows inline contact errors for an empty form", () => {
  render(<App />);
  fireEvent.submit(document.getElementById("contact-form"));

  expect(screen.getByText("Name is required.")).toBeInTheDocument();
  expect(screen.getByText("Email is required.")).toBeInTheDocument();
  expect(screen.getByText("Subject is required.")).toBeInTheDocument();
  expect(screen.getByText("Message is required.")).toBeInTheDocument();
});

test("switches between English and French", async () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Language" }));
  fireEvent.click(screen.getByRole("menuitem", { name: "Français" }));

  expect(document.documentElement).toHaveClass("is-switching");
  expect(await screen.findByRole("heading", { name: /à propos de moi/i }, { timeout: 6000 })).toBeInTheDocument();
  expect(document.documentElement).not.toHaveClass("is-switching");
  expect(screen.getByRole("button", { name: "Language" })).toHaveAttribute("aria-expanded", "false");
}, 10000);

test("falls back to English for an unsupported saved locale", () => {
  localStorage.setItem("portfolio-locale", "es");

  render(<App />);

  expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
});
