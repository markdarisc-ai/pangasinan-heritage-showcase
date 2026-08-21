import { NavigationItem } from "./NavigationItem";

export function HeaderNavigation() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/">
          <span className="brand-mark" aria-hidden="true">PH</span>
          <span>Pangasinan Heritage</span>
        </a>
        <nav aria-label="Primary navigation">
          <ul className="nav-list">
            <NavigationItem href="/" label="Home" />
            <NavigationItem href="/heritage" label="Heritage" />
            <NavigationItem href="/about" label="About" />
          </ul>
        </nav>
      </div>
    </header>
  );
}