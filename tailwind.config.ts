import type { Config } from 'tailwindcss';
const config: Config={content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./sections/**/*.{ts,tsx}'],theme:{extend:{colors:{ivory:'#F7F4EF',charcoal:'#181818',walnut:'#6B4F3A',brass:'#B08D57',smoke:'#E8E0D5'},fontFamily:{serif:['var(--font-serif)','Georgia','serif'],sans:['var(--font-sans)','Arial','sans']},boxShadow:{soft:'0 24px 80px rgba(24,24,24,.10)'}}},plugins:[]};
export default config;
