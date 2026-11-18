"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Keep the error available to the hosting platform's runtime reporting.
    console.error("CookOnStay page error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#f8f7f2] px-5 py-16 text-[#172019]">
      <div className="w-full max-w-xl rounded-[30px] border border-[#e2e8e1] bg-white p-8 text-center shadow-[0_20px_60px_rgba(23,32,25,0.06)] sm:p-12">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f28c28]">Something went wrong</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
            Let&apos;s try that again.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#69736d]">
            This page could not be loaded right now. Please retry or return to CookOnStay&apos;s homepage.
          </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button onClick={() => reset()} className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#176b45] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#125638]">Try again</button>
          <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#dce3dc] px-6 py-3 text-sm font-bold text-[#176b45] transition hover:border-[#176b45]">Back to home</Link>
        </div>
      </div>
    </main>
  );
}
