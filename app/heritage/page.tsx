import type { Metadata } from "next";
import { HeritageGrid } from "../../components/HeritageGrid";
import { SearchForm } from "../../components/SearchForm";
import { Typography } from "../../components/Typography";
import { heritageSites } from "../../data/heritage";

export const metadata: Metadata = {
  title: "Heritage Sites | Pangasinan Heritage Digital Showcase",
  description: "Explore selected heritage destinations across Pangasinan."
};

export default function HeritagePage() {
  return (
    <section className="section">
      <div className="container">
        <Typography variant="eyebrow">Explore</Typography>
        <h1>Heritage Sites</h1>
        <p className="detail-copy">
          Search the showcase to find a destination by name, municipality, or category.
        </p>
        <SearchForm sites={heritageSites} />
      </div>
    </section>
  );
}