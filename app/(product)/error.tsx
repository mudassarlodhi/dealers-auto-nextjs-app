"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Critical Error Handled:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-6 p-6 text-center border-2 border-dashed border-red-200 bg-red-50 rounded-2xl dark:bg-red-950/20 dark:border-red-900/50">
      <div className="p-4 bg-red-100 rounded-full text-red-600 dark:bg-red-900 dark:text-red-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" x2="12" y1="8" y2="12" />
          <line x1="12" x2="12.01" y1="16" y2="16" />
        </svg>
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Unable to Load Products
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
          {error.message ||
            "We encountered an unexpected issue while fetching the inventory. Please try again shortly."}
        </p>
      </div>

      <button
        onClick={() => reset()} //retry the server fetch
        className="px-6 py-2.5 bg-zinc-900 text-white font-medium rounded-xl hover:bg-zinc-700 transition-colors dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        Try Again
      </button>
    </div>
  );
}
