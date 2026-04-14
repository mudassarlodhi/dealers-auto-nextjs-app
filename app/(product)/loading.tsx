const Loading = () => {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="h-10 w-48 bg-zinc-200  animate-pulse rounded mb-8" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="border border-zinc-200  rounded-2xl p-4 h-80 bg-white  animate-pulse"
          >
            <div className="h-44 w-full bg-zinc-100  rounded-xl mb-4" />
            <div className="h-4 w-3/4 bg-zinc-100  rounded mb-2" />
            <div className="h-4 w-1/2 bg-zinc-100  rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
