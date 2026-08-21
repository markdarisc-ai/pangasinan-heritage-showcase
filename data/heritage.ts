export type HeritageSite = {
  slug: string;
  name: string;
  municipality: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
};

export const heritageSites: HeritageSite[] = [
  {
    slug: "hundred-islands",
    name: "Hundred Islands",
    municipality: "Alaminos City",
    category: "Island & Marine",
    description: "A protected island landscape known for its many limestone islands and coastal scenery.",
    longDescription: "Hundred Islands National Park is one of Pangasinan's best-known natural attractions. The showcase presents it as a destination for visitors interested in island scenery, marine environments, and outdoor exploration.",
    image: "/heritage/hundred-islands.svg",
    highlights: ["Island hopping", "Marine scenery", "Outdoor exploration"]
  },
  {
    slug: "bolinao-lighthouse",
    name: "Bolinao Lighthouse",
    municipality: "Bolinao",
    category: "Built Heritage",
    description: "A historic coastal lighthouse overlooking the western shoreline of Pangasinan.",
    longDescription: "Bolinao Lighthouse is presented as a built-heritage destination where visitors can appreciate coastal views and the history associated with lighthouse structures.",
    image: "/heritage/bolinao-lighthouse.svg",
    highlights: ["Coastal views", "Historic structure", "Photography"]
  },
  {
    slug: "balungao-hot-spring",
    name: "Balungao Hot Spring",
    municipality: "Balungao",
    category: "Nature & Wellness",
    description: "A destination associated with warm spring water and a relaxing mountain landscape.",
    longDescription: "Balungao Hot Spring is featured as a nature and wellness destination. The page emphasizes responsible visitation, scenic surroundings, and the relaxing character of the site.",
    image: "/heritage/balungao-hot-spring.svg",
    highlights: ["Hot spring", "Nature", "Relaxation"]
  }
];