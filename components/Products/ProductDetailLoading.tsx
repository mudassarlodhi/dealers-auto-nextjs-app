const ProductDetailLoading = () => {
  return (
    <div className="flex flex-col animate-pulse">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm">
        {/* Left: Image Placeholder */}
        <div className="aspect-square w-full bg-zinc-100 rounded-2xl" />

        {/* Right: Info Placeholders */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between">
              <div className="h-3 w-20 bg-zinc-200 rounded" />
              <div className="h-3 w-12 bg-zinc-200 rounded" />
            </div>
            <div className="h-10 w-3/4 bg-zinc-200 rounded-lg" />
            <div className="h-4 w-32 bg-zinc-100 rounded" />
          </div>

          <div className="space-y-2">
            <div className="h-4 w-full bg-zinc-100 rounded" />
            <div className="h-4 w-full bg-zinc-100 rounded" />
            <div className="h-4 w-2/3 bg-zinc-100 rounded" />
          </div>

          <div className="pt-6 border-t border-zinc-100">
            <div className="h-12 w-32 bg-zinc-200 rounded-xl" />
          </div>

          <div className="grid grid-cols-2 gap-4 py-4">
            <div className="h-16 bg-zinc-50 rounded-xl border border-zinc-100" />
            <div className="h-16 bg-zinc-50 rounded-xl border border-zinc-100" />
          </div>

          <div className="h-14 w-full bg-zinc-200 rounded-2xl" />
          <div className="h-3 w-40 bg-zinc-100 mx-auto rounded" />
        </div>
      </div>

      {/* Review Section Placeholder */}
      <div className="mt-12 space-y-4">
        <div className="h-6 w-48 bg-zinc-200 rounded" />
        <div className="h-32 w-full bg-zinc-50 rounded-2xl" />
      </div>
    </div>
  );
};

export default ProductDetailLoading;
