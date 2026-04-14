import Pagination from "../Pagination/Pagination";
import ProductCard from "./ProductCard";
import ProductsSearch from "./ProductsSearch";
import { Product } from "@/types/product";
import { getProducts } from "@/api/product";
import { DEFAULT_PAGE_LIMIT } from "@/const/api";

interface ProductListingProps {
  currentPage: number;
  searchQuery: string;
  sortBy?: string;
  order?: string;
}

export default async function ProductListing({
  currentPage,
  searchQuery,
  sortBy = "",
  order = "asc",
}: ProductListingProps) {
  const { products, total } = await getProducts(
    currentPage,
    searchQuery,
    sortBy,
    order,
  );

  const totalPages = Math.ceil(total / DEFAULT_PAGE_LIMIT);

  if (products.length === 0) {
    return (
      <div>
        <ProductsSearch />
        <p className="text-red-500 text-2xl mt-8 text-center">
          <span className="text-3xl mr-3">&#9888;</span> No Products Found
        </p>
      </div>
    );
  }

  return (
    <section className="space-y-4">
      <ProductsSearch />
      <p className="text-sm text-zinc-500 mt-0">
        Showing page {currentPage} of {totalPages}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center border-t border-zinc-200 dark:border-zinc-800 pt-8">
        <Pagination
          totalItems={total}
          itemsPerPage={DEFAULT_PAGE_LIMIT}
          currentPage={currentPage}
        />
      </div>
    </section>
  );
}
