import Image from "next/image";
import Link from "next/link";

export default function Technologies() {
  const technologies = [
    {
      name: "Next.js",
      logo: "/next.svg",
      alt: "Next.js logo",
      invertOnDark: true,
    },
    {
      name: "React",
      logo: "/react.svg",
      alt: "React logo",
      invertOnDark: false,
    },
    {
      name: "TypeScript",
      logo: "/typescript.svg",
      alt: "TypeScript logo",
      invertOnDark: false,
    },
    {
      name: "Tailwind CSS",
      logo: "/tailwind.svg",
      alt: "Tailwind CSS logo",
      invertOnDark: false,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-linear-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 py-12 px-6">
      <main className="w-full max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Technologies
          </h1>
          <p className="text-blue-700 dark:text-blue-300">
            The tools and frameworks used to build this website.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center gap-6 bg-white dark:bg-slate-800 rounded-lg shadow p-8"
            >
              <Image
                src={tech.logo}
                alt={tech.alt}
                width={160}
                height={160}
                className={`h-32 w-auto object-contain ${
                  tech.invertOnDark ? "dark:invert" : ""
                }`}
              />
              <h3 className="text-2xl font-semibold text-blue-900 dark:text-blue-100">
                {tech.name}
              </h3>
            </div>
          ))}
        </div>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}
