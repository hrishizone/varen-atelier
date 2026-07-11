'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { brand } from '@/lib/data';

const navItems = ['Collections', 'Projects', 'About', 'Journal', 'Contact'];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header
      className={`fixed left-4 right-4 top-4 z-50 transition-all duration-500 ${
        scrolled || open ? 'glass rounded-full px-5 py-3' : 'px-2 py-4 text-ivory'
      }`}
    >
      <nav className="flex items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="serif text-xl tracking-wide" aria-label="VAREN Atelier home">
          {brand.name}
        </Link>

        <div className="hidden gap-8 md:flex">
          {navItems.map((item) => {
            const href = `/${item.toLowerCase()}`;
            const active = pathname.startsWith(href);

            return (
              <Link
                className={`text-xs uppercase tracking-[0.22em] after:block after:h-px after:bg-current after:transition-all hover:after:w-full ${
                  active ? 'after:w-full' : 'after:w-0'
                }`}
                href={href}
                key={item}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden"
        >
          Menu
        </button>
      </nav>

      {open ? (
        <div className="fixed inset-0 top-0 z-[-1] bg-charcoal p-8 pt-24 text-ivory md:hidden">
          {navItems.map((item) => (
            <Link
              onClick={() => setOpen(false)}
              className="serif block border-b border-ivory/15 py-5 text-5xl"
              href={`/${item.toLowerCase()}`}
              key={item}
            >
              {item}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
