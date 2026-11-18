"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b border-[#e4e7e2] bg-[#f8f7f2]/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_28px_rgba(23,32,25,0.09)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-full items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" onClick={() => setOpen(false)} className="group flex items-center gap-3" aria-label="CookOnStay home">
          <motion.span whileHover={reduceMotion ? undefined : { rotate: -5, scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 18 }}>
            <Image src="/icons/icon.png" alt="CookOnStay icon" width={64} height={64} className="h-[58px] w-[58px] object-contain" priority />
          </motion.span>
          <div className="leading-none">
            <div className="text-[21px] font-black tracking-[-0.04em] text-[#172019]">
              Cook<span className="text-[#176b45]">On</span>Stay
            </div>
            <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#69736d]">Food & Catering</div>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item, index) => (
            <motion.div key={item.href} initial={reduceMotion ? false : { opacity: 0, y: -7 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduceMotion ? 0 : 0.12 + index * 0.07, duration: 0.35 }}>
              <Link href={item.href} className="nav-link-animated text-[14px] font-semibold text-[#4f5953] transition-colors duration-200 hover:text-[#176b45]">
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={reduceMotion ? undefined : { y: -2, scale: 1.025 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }} transition={{ type: "spring", stiffness: 360, damping: 20 }}>
            <Link href="/contact" className="inline-flex rounded-xl bg-[#f28c28] px-5 py-3 text-[14px] font-bold !text-white shadow-[0_5px_14px_rgba(242,140,40,0.15)] transition-[background-color,box-shadow] duration-300 hover:bg-[#d97416] hover:shadow-[0_9px_24px_rgba(242,140,40,0.3)]">
              Enquire Now
            </Link>
          </motion.div>
        </nav>

        <button type="button" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#dfe4df] bg-white transition-colors hover:border-[#176b45] md:hidden">
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-[#172019] transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-[#172019] transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-[#172019] transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={reduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.25, ease: "easeInOut" }} className="overflow-hidden border-t border-[#e4e7e2] bg-[#f8f7f2] md:hidden">
            <nav aria-label="Mobile navigation" className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
              <div className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div key={item.href} initial={reduceMotion ? false : { opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: reduceMotion ? 0 : index * 0.045 }}>
                    <Link href={item.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3.5 text-[15px] font-semibold text-[#4f5953] transition-colors hover:bg-white hover:text-[#176b45]">
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <Link href="/contact" onClick={() => setOpen(false)} className="mt-3 rounded-xl bg-[#f28c28] px-4 py-3.5 text-center text-[15px] font-bold !text-white transition-colors hover:bg-[#d97416]">
                  Enquire Now
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
