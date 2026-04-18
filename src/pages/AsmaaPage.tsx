import PageShell from "../components/PageShell";
import { asmaaAllah } from "../data/azkar";

export default function AsmaaPage({ onBack }: { onBack: () => void }) {
  return (
    <PageShell title="أسماء الله الحسنى" onBack={onBack}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {asmaaAllah.map((name, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 12, padding: "14px 8px", textAlign: "center",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4
          }}>
            <div style={{ fontSize: 11, opacity: 0.6 }}>{i + 1}</div>
            <div style={{ fontSize: 17, fontWeight: 700 }}>{name}</div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
