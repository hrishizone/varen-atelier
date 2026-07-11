import type { Collection, Product, Project } from '@/types';

export const brand = {
  name: 'VAREN Atelier',
  tagline: 'Quiet forms for considered rooms',
  location: 'Tribeca, New York',
  email: 'concierge@varenatelier.com',
  phone: '+1 212 555 0186',
};

export const collections: Collection[] = [
  {
    slug: 'monolith',
    name: 'Monolith',
    kicker: 'Architectural living',
    description:
      'Low silhouettes, deep walnut planes, and modular comfort shaped for homes with gallery-level restraint.',
    image:
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=85',
    products: ['Aalto Settee', 'Pillar Table', 'Lune Console'],
  },
  {
    slug: 'solenne',
    name: 'Solenne',
    kicker: 'Dining rituals',
    description:
      'Brass details and tactile timber celebrate long dinners, ceremony, and softly lit conversation.',
    image:
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=85',
    products: ['Solenne Table', 'Arc Chair', 'Vesper Cabinet'],
  },
  {
    slug: 'atelier',
    name: 'Atelier',
    kicker: 'Objects of repose',
    description:
      'Occasional pieces, lounge forms, and sculptural storage designed as heirlooms rather than inventory.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85',
    products: ['Mica Lounge', 'Hearth Credenza', 'Oculus Mirror'],
  },
];

export const products: Product[] = [
  {
    slug: 'aalto-settee',
    name: 'Aalto Settee',
    collection: 'Monolith',
    price: 'From $9,800',
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1600&q=85',
    ],
    details:
      'A grounded sofa with feather-wrapped cushions, hand-oiled walnut rail, and tailored linen-wool upholstery.',
    specs: [
      { label: 'Frame', value: 'FSC walnut and steel core' },
      { label: 'Upholstery', value: 'Linen wool bouclé' },
      { label: 'Lead time', value: '10–12 weeks' },
    ],
  },
  {
    slug: 'solenne-table',
    name: 'Solenne Table',
    collection: 'Solenne',
    price: 'From $12,400',
    image:
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85',
    ],
    details:
      'An oval dining table with bookmatched veneer, softened underside, and brushed brass registration marks.',
    specs: [
      { label: 'Finish', value: 'Smoked walnut / satin brass' },
      { label: 'Seats', value: '6, 8, or 10' },
      { label: 'Lead time', value: '12–14 weeks' },
    ],
  },
  {
    slug: 'mica-lounge',
    name: 'Mica Lounge',
    collection: 'Atelier',
    price: 'From $7,200',
    image:
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1800&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=85',
    ],
    details:
      'A reading chair balanced between sculptural volume and domestic ease, finished with vegetable-tanned leather pulls.',
    specs: [
      { label: 'Shell', value: 'Molded ash ply' },
      { label: 'Cushion', value: 'Down alternative and latex' },
      { label: 'Lead time', value: '8–10 weeks' },
    ],
  },
];

export const projects: Project[] = [
  {
    slug: 'hudson-residence',
    name: 'Hudson Residence',
    type: 'Private residence',
    location: 'New York',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85',
    summary: 'A riverside apartment furnished with low, cinematic forms and luminous walnut.',
  },
  {
    slug: 'nara-house',
    name: 'Nara House',
    type: 'Hospitality',
    location: 'Austin',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=1800&q=85',
    summary: 'A calm members lounge arranged around tactility, ceremony, and slow conversation.',
  },
  {
    slug: 'casa-orris',
    name: 'Casa Orris',
    type: 'Villa',
    location: 'Malibu',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=85',
    summary: 'Custom dining, lounge, and storage pieces for an ocean-facing architectural villa.',
  },
];

export const journal = [
  { slug: 'grain-memory', title: 'The memory inside grain', date: 'June 18, 2026' },
  { slug: 'rooms-that-breathe', title: 'Rooms that breathe between objects', date: 'May 29, 2026' },
  { slug: 'patina', title: 'Patina as a design material', date: 'April 12, 2026' },
];
