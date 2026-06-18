import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-slate-900 dark:to-slate-800">
      <main className="flex flex-col items-center justify-center gap-8 py-32 px-6 text-center">
        <h1 className="text-5xl font-bold text-blue-900 dark:text-blue-100">
          Hello World
        </h1>
        <p className="text-lg text-blue-700 dark:text-blue-300 max-w-md">
          Welcome to our landing page. Have any questions? Check out our FAQ!
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/faq"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Go to FAQ
          </Link>
          <Link
            href="/technologies"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            View Technologies
          </Link>
        </div>
      </main>
    </div>
  );
}
