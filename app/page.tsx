import PersonalityTest from "@/components/quize";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid bg-slate-50 grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 pb-20 gap-16 sm:p-4 md:p-8 lg:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <PersonalityTest />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center justify-center">
        <Link
          href="https://github.com/litehacker/soft-skills-evaluation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          <Github /> View the source code on GitHub
        </Link>
        <span className="text-gray-500">Made with ❤️ by</span>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://linkedin.com/in/litehacker"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          Go to the author&apos;s page →
        </Link>
      </footer>
    </div>
  );
}
