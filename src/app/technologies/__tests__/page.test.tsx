import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Technologies from "../page";

const technologies = [
  { name: "Next.js", alt: "Next.js logo" },
  { name: "React", alt: "React logo" },
  { name: "TypeScript", alt: "TypeScript logo" },
  { name: "Tailwind CSS", alt: "Tailwind CSS logo" },
];

test("Technologies mounts and renders the heading, each logo and title", () => {
  render(<Technologies />);
  expect(
    screen.getByRole("heading", { level: 1, name: "Technologies" })
  ).toBeInTheDocument();

  for (const tech of technologies) {
    expect(
      screen.getByRole("heading", { level: 3, name: tech.name })
    ).toBeInTheDocument();
    expect(screen.getByAltText(tech.alt)).toBeInTheDocument();
  }

  const backLink = screen.getByRole("link", { name: "← Back to Home" });
  expect(backLink).toBeInTheDocument();
  expect(backLink).toHaveAttribute("href", "/");
});
