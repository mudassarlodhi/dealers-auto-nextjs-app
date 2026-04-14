import { DEFAULT_PAGE_LIMIT } from "@/const/api";

export async function getProducts(
  page: number,
  query: string = "",
  sortBy: string = "",
  order: string = "",
) {
  const skip = (page - 1) * DEFAULT_PAGE_LIMIT;

  const isSearch = query.trim().length > 0;
  const base = isSearch ? "/search" : "";

  if (page === 1 && !isSearch && !sortBy)
    await new Promise((resolve) => setTimeout(resolve, 1000));

  const url = new URL(`https://dummyjson.com/products${base}`);

  url.searchParams.set("limit", DEFAULT_PAGE_LIMIT.toString());
  url.searchParams.set("skip", skip.toString());

  if (isSearch) {
    url.searchParams.set("q", query);
  }

  if (sortBy && sortBy !== "-") {
    url.searchParams.set("sortBy", sortBy);
    url.searchParams.set("order", order || "asc");
  }

  const res = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
}
