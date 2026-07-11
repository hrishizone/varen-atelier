'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import CustomCursor from '@/components/ui/CustomCursor';
import { useLenis } from '@/hooks/useLenis';

export default function SiteProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);
  useLenis();

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence>
        {loading ? (
          <motion.div
            aria-live="polite"
            className="fixed inset-0 z-[100] grid place-items-center bg-charcoal text-ivory"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="serif text-5xl">VAREN</p>
              <p className="mt-3 text-xs uppercase tracking-[0.35em] text-ivory/60">
                Atelier is opening
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </>
  );
}
