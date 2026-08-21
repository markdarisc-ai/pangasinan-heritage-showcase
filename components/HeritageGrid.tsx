import type { HeritageSite } from "../data/heritage";
import { HeritageCard } from "./HeritageCard";

export function HeritageGrid({ sites }: { sites: HeritageSite[] }) {
  return (
    <div className="heritage-grid">
      {sites.map((site) => <HeritageCard key={site.slug} site={site} />)}
    </div>
  );
}