const tokens = [
  ["Ink", "--color-ink"],
  ["Teal", "--color-teal"],
  ["Sand", "--color-sand"],
  ["Accent", "--color-accent"],
  ["Border", "--color-border"]
];

export function ColorTokens() {
  return (
    <div style={{ display: "grid", gap: 10 }}>
      {tokens.map(([name, token]) => (
        <div key={token} style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: 10, background: "white", border: "1px solid var(--color-border)",
          borderRadius: 10
        }}>
          <span aria-hidden="true" style={{
            width: 28, height: 28, borderRadius: 7,
            background: `var(${token})`, border: "1px solid #d9e2ec"
          }} />
          <span><strong>{name}</strong> · {token}</span>
        </div>
      ))}
    </div>
  );
}