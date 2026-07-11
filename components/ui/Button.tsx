import Link from 'next/link';import { ReactNode } from 'react';
export function Button({href,children}:{href:string;children:ReactNode}){return <Link className="magnetic inline-flex items-center gap-3 rounded-full border border-charcoal/20 px-6 py-3 text-sm uppercase tracking-[.22em] hover:bg-charcoal hover:text-ivory" href={href}>{children}<span>↗</span></Link>}
