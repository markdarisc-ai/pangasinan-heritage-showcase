import type { Metadata } from "next";
import "./globals.css";
import { HeaderNavigation } from "../components/HeaderNavigation";
import { Typography } from "../components/Typography";

export const metadata: Metadata = {
  title: "Pangasinan Heritage Digital Showcase",
  description: "A mobile-first digital showcase for Pangasinan heritage destinations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <HeaderNavigation />
        <main id="main">
          {children}
        </main>
        <footer className="site-footer">
          <div className="container">
            <Typography variant="small">
              Pangasinan Heritage Digital Showcase · Activity 2
            </Typography>
          </div>
        </footer>
      </body>
    </html>
  );
}