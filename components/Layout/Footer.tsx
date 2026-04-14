const Footer = () => {
  return (
    <footer className="bg-[#001f24] border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-zinc-400 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} Dealers Auto Center
          </p>
          <div className="h-px w-12 bg-zinc-700 my-1" />
          <p className="text-white text-sm">
            Developed by{" "}
            <span className="font-bold text-blue-400">Mudassar Lodhi</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
