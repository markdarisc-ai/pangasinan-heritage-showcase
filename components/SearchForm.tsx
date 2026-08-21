 "use client";

import { useMemo, useState } from "react";
import type { HeritageSite } from "../data/heritage";
import { HeritageCard } from "./HeritageCard";

export function SearchForm({ sites }: { sites: HeritageSite[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return sites;
    return sites.filter((site) =>
      [site.name, site.municipality, site.category].some((value) =>
        value.toLowerCase().includes(normalized)
      )
    );
  }, [query, sites]);

  return (
    <>
      <div className="search-wrap">
        <form className="search-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="heritage-search" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
            Search heritage sites
          </label>
          <input
            id="heritage-search"
            className="search-input"
            type="search"
            placeholder="Search by site, town, or category"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </form>
        <div className="search-results" aria-live="polite">
          {filtered.length} destination{filtered.length === 1 ? "" : "s"} shown
        </div>
      </div>

      {filtered.length ? (
        <div className="heritage-grid">
          {filtered.map((site) => <HeritageCard key={site.slug} site={site} />)}
        </div>
      ) : (
        <div className="empty">No heritage site matches your search.</div>
      )}
    </>
  );
}