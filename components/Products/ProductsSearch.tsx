"use client";

import { useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { debounce } from "@/utils/debounce";

const ProductsSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryFromUrl = searchParams.get("q") || "";

  const updatePath = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(window.location.search);

      Object.entries(updates).forEach(([key, value]) => {
        if (value && value !== "-") {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      params.delete("page");
      router.push(`?${params.toString()}`, { scroll: true });
    },
    [router],
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        updatePath({
          q: query,
          sortBy: null,
          order: null,
        });
      }, 700),
    [updatePath],
  );

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    debouncedSearch(val);
  };

  return (
    <div className="bg-white  backdrop-blur-md  border border-zinc-200  shadow-sm p-6 rounded-3xl">
      <div className="flex flex-col lg:flex-row gap-4 w-full mb-2 items-center">
        <div className="relative w-full lg:flex-1">
          <label className="text-xs font-semibold text-zinc-500 ml-1 uppercase tracking-wider">
            Search
          </label>
          <input
            key={queryFromUrl}
            type="text"
            defaultValue={queryFromUrl}
            onChange={handleTextChange}
            placeholder="Search products..."
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200  bg-transparent focus:ring-2 focus:ring-black outline-none transition-all"
          />
        </div>

        <div className="flex flex-row gap-2 w-full lg:w-auto">
          <div className="flex flex-col gap-1.5 flex-1 lg:w-40">
            <label className="text-xs font-semibold text-zinc-500 ml-1 uppercase tracking-wider">
              Sort By
            </label>
            <select
              value={searchParams.get("sortBy") || "-"}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "-") {
                  updatePath({ sortBy: null, order: null });
                } else {
                  updatePath({ sortBy: val, q: null });
                }
              }}
              className="flex-1 lg:w-40 px-3 py-2.5 rounded-xl border border-zinc-200  bg-transparent text-sm font-medium outline-none cursor-pointer focus:ring-2 focus:ring-black"
            >
              <option value="-">None</option>
              <option value="title">Name</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5 w-24">
            <label className="text-xs font-semibold text-zinc-500 ml-1 uppercase tracking-wider">
              Order
            </label>
            <select
              disabled={
                !searchParams.get("sortBy") ||
                searchParams.get("sortBy") === "-"
              }
              value={searchParams.get("order") || "asc"}
              onChange={(e) => updatePath({ order: e.target.value })}
              className={`w-24 px-3 py-2.5 rounded-xl border border-zinc-200  bg-transparent text-sm font-medium outline-none transition-all
            ${
              !searchParams.get("sortBy") || searchParams.get("sortBy") === "-"
                ? "opacity-40 cursor-not-allowed"
                : "cursor-pointer focus:ring-2 focus:ring-black"
            }`}
            >
              <option value="asc">ASC</option>
              <option value="desc">DESC</option>
            </select>
          </div>
        </div>
      </div>
      <p className="text-[12px] text-zinc-700 italic">
        <strong>* Note:</strong> Search and sorting are mutually exclusive due
        to API constraints.
      </p>
    </div>
  );
};

export default ProductsSearch;
