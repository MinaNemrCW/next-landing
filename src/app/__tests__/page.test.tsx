import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../page";

test("Home mounts and renders the heading and FAQ link", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Hello World" })
  ).toBeInTheDocument();
  expect(
    screen.getByText(
      "Welcome to our landing page. Have any questions? Check out our FAQ!"
    )
  ).toBeInTheDocument();

  const faqLink = screen.getByRole("link", { name: "Go to FAQ" });
  expect(faqLink).toBeInTheDocument();
  expect(faqLink).toHaveAttribute("href", "/faq");

  const techLink = screen.getByRole("link", { name: "View Technologies" });
  expect(techLink).toBeInTheDocument();
  expect(techLink).toHaveAttribute("href", "/technologies");
});
