"use client";
import { useProductContext } from "@/context/Product/ProductProvider";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: { product: Product }) => {
  const { setSelectedProduct } = useProductContext();

  const handleViewDetails = () => {
    setSelectedProduct(product);
  };

  return (
    <div className="group bg-white  border border-zinc-200  rounded-2xl p-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative aspect-square w-full bg-zinc-50  rounded-xl overflow-hidden mb-4">
        <Image
          fill
          src={product.thumbnail}
          alt={product.title}
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
      <div className="p-4 flex flex-col flex-1">
        <div className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            {product.brand || "Generic"}
          </p>
          <h3 className="font-semibold text-zinc-900  truncate">
            {product.title}
          </h3>

          <div className="flex justify-between items-center pt-2">
            <span className="text-lg font-bold text-green-600 ">
              ${product.price}
            </span>

            <div className="flex items-center gap-1.5 bg-amber-50  px-2.5 py-1 rounded-lg border border-amber-200/50 ">
              <span className="text-amber-500 text-sm">★</span>
              <span className="text-sm font-bold text-amber-700 ">
                {product.rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-auto pt-4">
          <Link
            href={`/${product.id}`}
            onClick={handleViewDetails}
            className="block w-full text-center bg-black  text-white  py-2.5 rounded-xl font-medium text-sm hover:bg-zinc-800  transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
