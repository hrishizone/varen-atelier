/** @type {import('next').NextConfig} */
const nextConfig={images:{remotePatterns:[{protocol:'https',hostname:'images.unsplash.com'},{protocol:'https',hostname:'images.pexels.com'}]},experimental:{optimizePackageImports:['react-icons','gsap','framer-motion']}};
export default nextConfig;
