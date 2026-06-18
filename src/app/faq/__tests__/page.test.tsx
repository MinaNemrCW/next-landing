import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import FAQ from "../page";

const faqs = [
  {
    question: "How do I get started?",
    answer:
      "Clone the repository, install dependencies with npm install, then run npm run dev to start the development server. It's built with Next.js 15+ and requires Node.js.",
  },
  {
    question: "Who created this?",
    answer:
      "This website was created as a demonstration of modern Next.js development with the latest syntax and best practices.",
  },
  {
    question: "How can I contact support?",
    answer:
      "For support inquiries, please reach out through our contact form or email us at support@example.com.",
  },
  {
    question: "Is this website open source?",
    answer:
      "Yes! This website is open source and available on GitHub. Feel free to fork and contribute.",
  },
  {
    question: "What technology stack is used?",
    answer:
      "This website is built with Next.js 15+, TypeScript, and Tailwind CSS for styling.",
  },
  {
    question: "Can I use this as a template?",
    answer:
      "Absolutely! You can use this project as a template for your own Next.js applications.",
  },
];

test("FAQ mounts and renders the heading and all questions", () => {
  render(<FAQ />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "Frequently Asked Questions",
    })
  ).toBeInTheDocument();

  for (const faq of faqs) {
    expect(
      screen.getByRole("heading", { level: 3, name: faq.question })
    ).toBeInTheDocument();
    expect(screen.getByText(faq.answer)).toBeInTheDocument();
  }

  const backLink = screen.getByRole("link", { name: "← Back to Home" });
  expect(backLink).toBeInTheDocument();
  expect(backLink).toHaveAttribute("href", "/");
});
