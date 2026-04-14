import ProductListing from "@/components/Products/ProductsListing";

interface ProductsDashboardPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const ProductsDashboard = async ({
  searchParams,
}: ProductsDashboardPageProps) => {
  const params = await searchParams;
  const currentPage = Number(params.page) || 1;
  const searchQuery = typeof params.q === "string" ? params.q : "";
  const sortBy = typeof params.sortBy === "string" ? params.sortBy : "";
  const order = typeof params.order === "string" ? params.order : "";

  return (
    <div className="flex-1 flex flex-col w-full bg-zinc-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <ProductListing
          currentPage={currentPage}
          searchQuery={searchQuery}
          sortBy={sortBy}
          order={order}
        />
      </div>
    </div>
  );
};

export default ProductsDashboard;
