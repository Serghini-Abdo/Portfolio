import { fireEvent, render, screen } from "@testing-library/react";
import App from "./app/App";

test("renders the portfolio sections", () => {
  render(<App />);
  expect(screen.getByRole("heading", { name: /about me/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /services/i })).toBeInTheDocument();
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

test("switches between English and French", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Français" }));

  expect(screen.getByRole("heading", { name: /à propos de moi/i })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "English" })).toBeInTheDocument();
});
