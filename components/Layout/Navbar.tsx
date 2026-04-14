"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-[#01262e] border-b border-gray-800 fixed w-full z-20 top-0 inset-s-0">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="">
          <div className="FooterNewUpdate_brand__xTZRs items-center flex gap-4">
            <div className="FooterNewUpdate_logoBox__k3Mn1 bg-[linear-gradient(180deg,#f2f6ff,#dfe8ff)] rounded-[10px] [box-shadow:0_10px_24px_#00000040] grid h-[54px] place-items-center w-[54px]">
              <span className="FooterNewUpdate_logoLetter__n-PNy text-[#1f55d0] text-[34px] font-extrabold tracking-[-.5px]">
                D
              </span>
            </div>
            <div>
              <h3 className="FooterNewUpdate_brandTitle__aCUF4 text-[24px] font-medium tracking-[.2px] m-0 text-white">
                Dealers Auto Center
              </h3>
            </div>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-slate-800 transition-colors"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeWidth="2"
              d={isOpen ? "M1 1l15 12m0-12L1 13" : "M1 1h15M1 7h15M1 13h15"}
            />
          </svg>
        </button>

        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-700 rounded-lg bg-[#1e2746] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded transition-colors md:p-0 ${
                  isActive("/")
                    ? "text-blue-400 font-bold underline decoration-2 underline-offset-8"
                    : "text-gray-300 hover:bg-slate-700 md:hover:bg-transparent md:hover:text-blue-400"
                }`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/user-flow"
                className={`block py-2 px-3 rounded transition-colors md:p-0 ${
                  isActive("/user-flow")
                    ? "text-blue-400 font-bold underline decoration-2 underline-offset-8"
                    : "text-gray-300 hover:bg-slate-700 md:hover:bg-transparent md:hover:text-blue-400"
                }`}
                aria-current={isActive("user-flow") ? "page" : undefined}
              >
                Users Flow
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
