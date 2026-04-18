import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";

const KAABA = { lat: 21.4225, lng: 39.8262 };

function calcQibla(lat: number, lng: number) {
  const φ1 = (lat * Math.PI) / 180;
  const φ2 = (KAABA.lat * Math.PI) / 180;
  const Δλ = ((KAABA.lng - lng) * Math.PI) / 180;
  const y = Math.sin(Δλ) * Math.cos(φ2);
  const x = Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  return ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
}

export default function QiblaPage({ onBack }: { onBack: () => void }) {
  const [bearing, setBearing] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("الموقع غير مدعوم على هذا الجهاز");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setBearing(calcQibla(pos.coords.latitude, pos.coords.longitude)),
      (e) => setError("فعّل صلاحية الموقع: " + e.message),
      { timeout: 10000 }
    );
  }, []);

  return (
    <PageShell title="اتجاه القبلة" onBack={onBack}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20, paddingTop: 30 }}>
        {error && <div style={{ color: "#fca5a5", textAlign: "center" }}>{error}</div>}
        {bearing !== null && (
          <>
            <div style={{
              width: 240, height: 240, borderRadius: "50%",
              background: "rgba(255,255,255,0.1)", border: "3px solid rgba(255,255,255,0.3)",
              position: "relative", display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <div style={{
                position: "absolute", top: 10, left: "50%", transform: `translateX(-50%) rotate(${bearing}deg)`,
                transformOrigin: "50% 110px", fontSize: 40
              }}>🕋</div>
              <div style={{ fontSize: 50 }}>🧭</div>
            </div>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{bearing.toFixed(1)}°</div>
            <div style={{ opacity: 0.8, fontSize: 14, textAlign: "center", maxWidth: 320 }}>
              وجّه الجوال نحو الشمال، ثم استدر بالزاوية الموضّحة لتجد القبلة
            </div>
          </>
        )}
        {!error && bearing === null && <div>جارٍ تحديد الموقع...</div>}
      </div>
    </PageShell>
  );
}
