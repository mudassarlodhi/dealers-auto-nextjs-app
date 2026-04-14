"use client";

import { notFound, useRouter } from "next/navigation";
import { useProductContext } from "@/context/Product/ProductProvider";
import ProductDetail from "@/components/Products/ProductDetail";

const ProductDetailsPage = () => {
  const { selectedProduct } = useProductContext();
  const router = useRouter();

  if (!selectedProduct) {
    notFound();
  }

  return (
    <div className="flex-1 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <button
          onClick={() => router.back()}
          className="mb-6 text-sm font-bold flex items-center text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
        >
          <span className="mr-2">&larr;</span> Back to Listing
        </button>

        <ProductDetail product={selectedProduct} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
