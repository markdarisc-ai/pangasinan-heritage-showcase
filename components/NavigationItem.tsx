import Link from "next/link";

type Props = { href: string; label: string };

export function NavigationItem({ href, label }: Props) {
  return (
    <li className="nav-item">
      <Link href={href}>{label}</Link>
    </li>
  );
}