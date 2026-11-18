"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function PageLoader() {
  const pathname = usePathname();

  return <PageLoaderOverlay key={pathname} />;
}

function PageLoaderOverlay() {
  const [visible, setVisible] = useState(true);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-label="Loading CookOnStay"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#f8f7f2]"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={reduceMotion ? false : { y: 8, scale: 0.94 }}
              animate={{ y: 0, scale: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex h-[78px] w-[78px] items-center justify-center rounded-[24px] border border-[#e4e7e2] bg-white shadow-[0_12px_35px_rgba(23,32,25,0.08)]"
            >
              <Image
                src="/icons/icon.png"
                alt=""
                width={58}
                height={58}
                className="h-[58px] w-[58px] object-contain"
                priority
              />
              <span className="loader-ring" aria-hidden="true" />
            </motion.div>

            <p className="mt-5 text-[17px] font-black tracking-[-0.04em] text-[#172019]">
              Cook<span className="text-[#176b45]">On</span>Stay
            </p>

            <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.24em] text-[#87918a]">
              Food & Catering
            </p>

            <div className="mt-5 h-[3px] w-28 overflow-hidden rounded-full bg-[#e5ebe5]">
              <motion.span
                className="block h-full w-1/2 rounded-full bg-[#f28c28]"
                initial={{ x: "-110%" }}
                animate={{ x: "220%" }}
                transition={{
                  duration: reduceMotion ? 0.01 : 0.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}