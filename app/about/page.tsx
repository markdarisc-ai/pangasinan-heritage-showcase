import type { Metadata } from "next";
import { Typography } from "../../components/Typography";

export const metadata: Metadata = {
  title: "About | Pangasinan Heritage Digital Showcase",
  description: "Learn about the design and architecture behind the Pangasinan Heritage Digital Showcase."
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container">
        <Typography variant="eyebrow">Project</Typography>
        <h1>About the showcase</h1>
        <div className="about-panel">
          <h2>Built around reusable design.</h2>
          <p>
            This Activity 2 implementation builds on the Activity 1.1 prototype using React and Next.js 14 App Router.
            The interface is organized with Atomic Design: atoms form molecules,
            molecules form organisms, and organisms compose pages.
          </p>
          <p>
            The site is mobile-first, uses semantic HTML, keeps client-side
            interactivity small, and is configured for static export.
          </p>
        </div>
      </div>
    </section>
  );
}