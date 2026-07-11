'use client';import { ReactNode } from 'react';import { useLenis } from '@/hooks/useLenis';import CustomCursor from '@/components/ui/CustomCursor';
export default function SiteProvider({children}:{children:ReactNode}){useLenis();return <><CustomCursor/>{children}</>}
