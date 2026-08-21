type Props = {
  variant?: "body" | "small" | "eyebrow";
  children: React.ReactNode;
};

export function Typography({ variant = "body", children }: Props) {
  if (variant === "eyebrow") return <div className="eyebrow">{children}</div>;
  if (variant === "small") return <p style={{ fontSize: ".9rem", color: "var(--color-muted)" }}>{children}</p>;
  return <p>{children}</p>;
}