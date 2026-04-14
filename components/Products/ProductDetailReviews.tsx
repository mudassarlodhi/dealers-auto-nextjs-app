import { ProductReview } from "@/types/product";

const ProductDetailReviews = ({ reviews }: { reviews: ProductReview[] }) => {
  if (!reviews || reviews.length === 0) return null;

  return (
    <div className="mt-12 pt-12 border-t border-zinc-100 dark:border-zinc-900">
      <h3 className="text-2xl font-bold text-zinc-950 dark:text-white mb-8">
        Customer Reviews ({reviews.length})
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-500 font-bold text-sm">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </span>
                <span className="text-[10px] text-zinc-400 font-medium">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 font-medium mb-2 italic">
                &quot;{review.comment}&quot;
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-50 dark:border-zinc-800/50">
              <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {review.reviewerName}
              </p>
              <p className="text-xs text-zinc-400">{review.reviewerEmail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailReviews;
