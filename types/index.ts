export type Collection = {
  slug: string;
  name: string;
  kicker: string;
  description: string;
  image: string;
  products: string[];
};

export type Product = {
  slug: string;
  name: string;
  collection: string;
  price: string;
  image: string;
  gallery: string[];
  details: string;
  specs: { label: string; value: string }[];
};

export type Project = {
  slug: string;
  name: string;
  type: string;
  location: string;
  image: string;
  summary: string;
};
