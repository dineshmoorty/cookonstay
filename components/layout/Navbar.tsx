"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <nav className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="CookOnStay Logo"
            width={55}
            height={55}
            priority
          />
          <div>
            <h1 className="text-xl font-bold text-green-700">CookOnStay</h1>
            <p className="text-xs text-gray-500">It Feels Like Home</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-gray-700 transition hover:text-orange-500"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-orange-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : "-translate-y-1.5"}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : "translate-y-1.5"}`}
          />
        </button>

        {isOpen && (
          <div className="absolute inset-x-0 top-full z-40 overflow-hidden rounded-b-3xl border border-gray-200 bg-white/95 shadow-2xl shadow-gray-900/10 backdrop-blur-xl md:hidden">
            <ul className="flex flex-col gap-6 px-6 py-6">
              {NAV_LINKS.map((item) => (
                <li
                  key={item.href}
                  className="border-b border-gray-200 last:border-b-0 last:pb-0"
                >
                  <Link
                    href={item.href}
                    className="block rounded-2xl text-base font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
