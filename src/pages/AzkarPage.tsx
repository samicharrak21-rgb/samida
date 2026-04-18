import { useState } from "react";
import PageShell from "../components/PageShell";
import { azkarSabah, azkarMasaa } from "../data/azkar";

export default function AzkarPage({ type, onBack }: { type: "azkar-sabah" | "azkar-masaa"; onBack: () => void }) {
  const list = type === "azkar-sabah" ? azkarSabah : azkarMasaa;
  const title = type === "azkar-sabah" ? "أذكار الصباح" : "أذكار المساء";
  const [counts, setCounts] = useState<number[]>(list.map(() => 0));

  const inc = (i: number) => {
    setCounts((c) => {
      const n = [...c];
      if (n[i] < list[i].count) n[i]++;
      return n;
    });
  };

  return (
    <PageShell title={title} onBack={onBack}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {list.map((z, i) => {
          const done = counts[i] >= z.count;
          return (
            <button key={i} onClick={() => inc(i)}
              style={{
                background: done ? "rgba(16,185,129,0.25)" : "rgba(255,255,255,0.1)",
                border: `1px solid ${done ? "#10b981" : "rgba(255,255,255,0.2)"}`,
                borderRadius: 14, padding: 16, color: "#fff", textAlign: "right",
                width: "100%", display: "flex", flexDirection: "column", gap: 10
              }}>
              <div style={{ fontSize: 17, lineHeight: 1.9 }}>{z.text}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 13, opacity: 0.8 }}>اضغط للعد</span>
                <span style={{ background: "rgba(0,0,0,0.3)", borderRadius: 999, padding: "4px 12px", fontSize: 14, fontWeight: 700 }}>
                  {counts[i]} / {z.count}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </PageShell>
  );
}
