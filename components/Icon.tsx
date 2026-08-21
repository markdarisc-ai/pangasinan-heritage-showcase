type Props = { name?: "search" | "map" | "arrow" };

export function Icon({ name = "map" }: Props) {
  const label = name === "search" ? "⌕" : name === "arrow" ? "→" : "⌖";
  return <span aria-hidden="true" style={{ fontSize: "1.3rem", lineHeight: 1 }}>{label}</span>;
}