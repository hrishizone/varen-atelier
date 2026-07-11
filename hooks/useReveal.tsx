'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject, useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const query = gsap.utils.selector(element);
    const animation = gsap.from(query('[data-reveal]'), {
      y: 48,
      opacity: 0,
      duration: 1.1,
      stagger: 0.08,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 78%',
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [ref]);
}
