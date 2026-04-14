"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import ProductDetailReviews from "./ProductDetailReviews";

const ProductDetail = ({ product }: { product: Product }) => {
  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white  p-8 rounded-3xl border border-zinc-100  shadow-sm">
        <div className="relative aspect-square w-full bg-zinc-50  rounded-2xl overflow-hidden border border-zinc-100 ">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain p-8"
            priority
          />
          {product.discountPercentage > 0 && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              -{product.discountPercentage}% OFF
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                {product.brand || "Generic"}
              </p>
              <span className="flex items-center text-yellow-500 text-sm font-bold">
                ★ {product.rating}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-zinc-950  tracking-tight">
              {product.title}
            </h1>
            <p className="text-sm text-zinc-400 font-mono">
              SKU: {product.sku}
            </p>
          </div>

          <p className="text-zinc-600  text-base leading-relaxed">
            {product.description}
          </p>

          <div className="pt-6 border-t border-zinc-100 ">
            <div className="flex items-baseline gap-4">
              <p className="text-5xl font-extrabold text-green-600  tracking-tight">
                ${product.price.toFixed(2)}
              </p>
              <span
                className={`text-sm font-bold ${product.stock > 10 ? "text-zinc-400" : "text-orange-500"}`}
              >
                {product.availabilityStatus} ({product.stock} left)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="p-3 rounded-xl bg-zinc-50  border border-zinc-100 ">
              <p className="text-[10px] uppercase text-zinc-400 font-bold">
                Shipping
              </p>
              <p className="text-sm font-medium">
                {product.shippingInformation}
              </p>
            </div>
            <div className="p-3 rounded-xl bg-zinc-50  border border-zinc-100 ">
              <p className="text-[10px] uppercase text-zinc-400 font-bold">
                Warranty
              </p>
              <p className="text-sm font-medium">
                {product.warrantyInformation}
              </p>
            </div>
          </div>

          <button className="w-full bg-black  text-white  py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-800  transition-all active:scale-[0.98]">
            Add to Cart
          </button>

          <p className="text-center text-xs text-zinc-400">
            Return Policy: {product.returnPolicy}
          </p>
        </div>
      </div>
      <ProductDetailReviews reviews={product.reviews} />
    </div>
  );
};

export default ProductDetail;
