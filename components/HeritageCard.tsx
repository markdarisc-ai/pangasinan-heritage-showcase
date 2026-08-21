import Link from "next/link";
import { Image } from "./Image";
import type { HeritageSite } from "../data/heritage";

export function HeritageCard({ site }: { site: HeritageSite }) {
  return (
    <article className="card">
      <Image src={site.image} alt={`${site.name} destination illustration`} className="card-image" />
      <div className="card-body">
        <div className="card-kicker">{site.category} · {site.municipality}</div>
        <h3>{site.name}</h3>
        <p>{site.description}</p>
        <Link className="btn btn-primary" href={`/heritage/${site.slug}`}>View Details</Link>
      </div>
    </article>
  );
}