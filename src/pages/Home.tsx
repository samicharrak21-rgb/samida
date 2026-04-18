import type { Page } from "../App";

const items: { id: Page; title: string; icon: string; color: string }[] = [
  { id: "azkar-sabah", title: "أذكار الصباح", icon: "🌅", color: "#f59e0b" },
  { id: "azkar-masaa", title: "أذكار المساء", icon: "🌙", color: "#6366f1" },
  { id: "tasbih", title: "السبحة الإلكترونية", icon: "📿", color: "#10b981" },
  { id: "duas", title: "الأدعية", icon: "🤲", color: "#ec4899" },
  { id: "asmaa", title: "أسماء الله الحسنى", icon: "✨", color: "#eab308" },
  { id: "qibla", title: "القبلة", icon: "🕋", color: "#000000" },
  { id: "prayer", title: "مواقيت الصلاة", icon: "🕌", color: "#14b8a6" },
];

export default function Home({ onNavigate }: { onNavigate: (p: Page) => void }) {
  return (
    <div style={{ padding: "max(20px, env(safe-area-inset-top)) 16px 20px", maxWidth: 600, margin: "0 auto" }}>
      <header style={{ textAlign: "center", marginBottom: 24 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>الديوان الإسلامي</h1>
        <p style={{ opacity: 0.85, fontSize: 14 }}>﴿ وَذَكِّرْ فَإِنَّ الذِّكْرَى تَنفَعُ الْمُؤْمِنِينَ ﴾</p>
      </header>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => onNavigate(it.id)}
            style={{
              background: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 16,
              padding: "20px 12px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              minHeight: 110,
              transition: "transform 0.15s",
            }}
            onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
            onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ fontSize: 36 }}>{it.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 600, textAlign: "center" }}>{it.title}</div>
          </button>
        ))}
      </div>
      <footer style={{ textAlign: "center", marginTop: 28, opacity: 0.6, fontSize: 12 }}>
        v13 · يعمل بدون إنترنت
      </footer>
    </div>
  );
}
