import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { heritageSites } from "../../../data/heritage";
import { Image } from "../../../components/Image";

export const dynamicParams = false;

export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const site = heritageSites.find((item) => item.slug === params.slug);
  if (!site) return {};

  return {
    title: `${site.name} | Pangasinan Heritage Digital Showcase`,
    description: site.description
  };
}

export default function HeritageDetailPage({ params }: { params: { slug: string } }) {
  const site = heritageSites.find((item) => item.slug === params.slug);
  if (!site) notFound();

  return (
    <section className="detail-hero">
      <div className="container">
        <Image src={site.image} alt={`${site.name} destination illustration`} className="detail-image" />
        <div className="detail-copy">
          <p className="eyebrow">{site.category} · {site.municipality}</p>
          <h1>{site.name}</h1>
          <p>{site.longDescription}</p>
          <ul className="highlight-list" aria-label="Destination highlights">
            {site.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <Link className="btn btn-secondary" href="/heritage">← Back to Heritage</Link>
        </div>
      </div>
    </section>
  );
}