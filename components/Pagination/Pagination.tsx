"use client";

import { MAX_PAGES_TO_SHOW_WITHOUT_CONCAT } from "@/const/api";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
}

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: true });
  };

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= MAX_PAGES_TO_SHOW_WITHOUT_CONCAT) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push("...");

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="flex flex-col items-center gap-4 py-10">
      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="flex items-center justify-center px-3 py-2 rounded-lg border bg-white text-zinc-700 transition-all hover:bg-zinc-50 disabled:opacity-30 disabled:cursor-not-allowed dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300"
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>

        <div className="hidden sm:flex items-center gap-2">
          {getPageNumbers().map((page, idx) => (
            <button
              key={idx}
              disabled={page === "..."}
              onClick={() => typeof page === "number" && handlePageChange(page)}
              className={`min-w-10 h-10 px-2 rounded-lg text-sm font-medium transition-all ${
                currentPage === page
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                  : page === "..."
                    ? "cursor-default text-zinc-400"
                    : "bg-white border hover:border-zinc-400 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:border-zinc-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Mobile View: Page Indicator */}
        <div className="flex sm:hidden items-center px-4">
          <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
            {currentPage}{" "}
            <span className="text-zinc-400 font-normal mx-1">of</span>{" "}
            {totalPages}
          </span>
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="flex items-center justify-center px-3 py-2 rounded-lg border bg-white text-zinc-700 transition-all hover:bg-zinc-50 disabled:opacity-30 disabled:cursor-not-allowed dark:bg-zinc-900 dark:border-zinc-800 dark:text-zinc-300"
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
