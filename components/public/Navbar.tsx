"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e4e7e2] bg-[#f8f7f2]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-full items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
          <Image
            src="/icons/icon.png"
            alt="CookOnStay icon"
            width={64}
            height={64}
            className="h-[58px] w-[58px] object-contain"
            priority
          />

          <div className="leading-none">
            <div className="text-[21px] font-black tracking-[-0.04em] text-[#172019]">
              Cook<span className="text-[#176b45]">On</span>Stay
            </div>

            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#69736d]">
              Food & Catering
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] font-semibold text-[#4f5953] transition-colors hover:text-[#176b45]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/enquiry"
            className="rounded-xl bg-[#f28c28] px-5 py-3 text-[14px] font-bold text-white transition hover:bg-[#d97416]"
          >
            Enquire Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfe4df] bg-white md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-[#172019] transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#172019] transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-[#172019] transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-[#e4e7e2] bg-[#f8f7f2] md:hidden">
          <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3.5 text-[15px] font-semibold text-[#4f5953] transition hover:bg-white hover:text-[#176b45]"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/enquiry"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-xl bg-[#f28c28] px-4 py-3.5 text-center text-[15px] font-bold text-white transition hover:bg-[#d97416]"
              >
                Enquire Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}