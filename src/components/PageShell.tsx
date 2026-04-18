import type { ReactNode } from "react";

export default function PageShell({ title, onBack, children }: { title: string; onBack: () => void; children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "env(safe-area-inset-top)" }}>
      <div style={{
        position: "sticky", top: 0, zIndex: 10,
        display: "flex", alignItems: "center", gap: 12,
        padding: "14px 16px", background: "rgba(13,79,60,0.95)",
        backdropFilter: "blur(10px)", borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}>
        <button onClick={onBack} style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: 10, padding: "8px 14px", fontSize: 14 }}>
          ← رجوع
        </button>
        <h2 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h2>
      </div>
      <div style={{ padding: "16px", maxWidth: 600, margin: "0 auto" }}>{children}</div>
    </div>
  );
}
