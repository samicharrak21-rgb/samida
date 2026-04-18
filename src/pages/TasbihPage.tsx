import { useState } from "react";
import PageShell from "../components/PageShell";
import { tasbih } from "../data/azkar";

export default function TasbihPage({ onBack }: { onBack: () => void }) {
  const [idx, setIdx] = useState(0);
  const [count, setCount] = useState(0);
  const cur = tasbih[idx];
  const inc = () => {
    if (navigator.vibrate) navigator.vibrate(15);
    setCount((c) => c + 1);
  };
  const next = () => { setIdx((idx + 1) % tasbih.length); setCount(0); };
  const reset = () => setCount(0);

  return (
    <PageShell title="السبحة الإلكترونية" onBack={onBack}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, paddingTop: 20 }}>
        <div style={{ fontSize: 32, fontWeight: 700 }}>{cur.text}</div>
        <div style={{ fontSize: 16, opacity: 0.8 }}>الهدف: {cur.target}</div>
        <button onClick={inc}
          style={{
            width: 220, height: 220, borderRadius: "50%",
            background: "radial-gradient(circle, #10b981 0%, #047857 100%)",
            color: "#fff", fontSize: 60, fontWeight: 800,
            boxShadow: "0 10px 40px rgba(16,185,129,0.5)"
          }}>
          {count}
        </button>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={reset} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", padding: "10px 20px", borderRadius: 10 }}>تصفير</button>
          <button onClick={next} style={{ background: "rgba(255,255,255,0.25)", color: "#fff", padding: "10px 20px", borderRadius: 10 }}>التالي ←</button>
        </div>
      </div>
    </PageShell>
  );
}
