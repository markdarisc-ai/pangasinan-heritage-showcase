import Link from "next/link";
import { HeritageGrid } from "../components/HeritageGrid";
import { Typography } from "../components/Typography";
import { heritageSites } from "../data/heritage";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <Typography variant="eyebrow">Pangasinan Provincial Tourism Showcase</Typography>
            <h1>Discover the heritage of Pangasinan.</h1>
            <p>
              Explore selected destinations through a fast, accessible, and mobile-first
              digital experience designed for visitors using limited mobile data.
            </p>
            <div className="hero-actions">
              <Link href="/heritage" className="btn btn-primary">Explore Heritage</Link>
              <Link href="/about" className="btn btn-secondary">About the Project</Link>
            </div>
          </div>
          <div className="about-panel">
            <Typography variant="eyebrow">Featured destinations</Typography>
            <h2>Three places, one digital showcase.</h2>
            <p>
              Learn about Hundred Islands, Bolinao Lighthouse, and Balungao Hot Spring
              through reusable cards and responsive layouts.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="featured-heading">
        <div className="container">
          <div className="section-head">
            <div>
              <Typography variant="eyebrow">Featured</Typography>
              <h2 id="featured-heading">Heritage highlights</h2>
            </div>
            <Typography variant="small">{heritageSites.length} destinations</Typography>
          </div>
          <HeritageGrid sites={heritageSites} />
        </div>
      </section>
    </>
  );
}