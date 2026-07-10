"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-3 md:border-b md:border-gray-200 md:bg-white/95 md:pt-0 md:backdrop-blur-md">
      <div className="mx-3 md:mx-0">
        <nav
          className="relative mx-auto flex h-16 w-full  items-center justify-between rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-md shadow-gray-950/5 backdrop-blur-xl sm:px-6 md:h-20 md:rounded-none md:border-0 md:bg-white/95 md:px-8 md:py-4 md:shadow-none" style={{padding : "10px" , paddingLeft : "20px" , paddingRight : "20px"}}
        >
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
            <Image
              src="/logo/logo.png"
              alt="CookOnStay Logo"
              width={55}
              height={55}
              priority
              className="h-11 w-11 sm:h-[55px] sm:w-[55px]"
            />
            <div>
              <h1 className="text-lg font-bold text-green-700 sm:text-xl">CookOnStay</h1>
              <p className="text-[11px] text-gray-500 sm:text-xs">It Feels Like Home</p>
            </div>
          </Link>

          <ul className="hidden  gap-6 md:flex ">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-medium text-gray-700 "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-white/80 bg-white/60 text-gray-700 shadow-sm shadow-gray-950/10 backdrop-blur-md transition hover:border-orange-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12, rotateX: -14 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -8, rotateX: -10 }}
                transition={{ duration: 0.24, ease: "easeOut" }}
                className="absolute inset-x-0 top-[calc(100%+0.75rem)] z-40 origin-top overflow-hidden rounded-2xl border border-white/70 bg-white/75 shadow-2xl shadow-gray-950/15 backdrop-blur-xl md:hidden"
              >
                <ul className="flex flex-col gap-2 p-3" style={{padding : "10px"}}>
                  {NAV_LINKS.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ delay: index * 0.04, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        className="block rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-orange-100 hover:text-orange-100" style={{padding : "5px"}}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
