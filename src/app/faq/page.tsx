import Link from "next/link";

export default function FAQ() {
  const faqs = [
    {
      question: "What is this website about?",
      answer:
        "This is a simple landing page built with Next.js to showcase a basic Hello World page and a FAQ section.",
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

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800 py-12 px-6">
      <main className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-100 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-blue-700 dark:text-blue-300">
            Find answers to common questions about our website.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow p-6"
            >
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
                {faq.question}
              </h3>
              <p className="text-blue-700 dark:text-blue-300">{faq.answer}</p>
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
