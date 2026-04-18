import PageShell from "../components/PageShell";
import { duas } from "../data/azkar";

export default function DuasPage({ onBack }: { onBack: () => void }) {
  return (
    <PageShell title="الأدعية" onBack={onBack}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {duas.map((d, i) => (
          <div key={i} style={{
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 14, padding: 16
          }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10, color: "#fbbf24" }}>{d.title}</h3>
            <p style={{ fontSize: 17, lineHeight: 2 }}>{d.text}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
