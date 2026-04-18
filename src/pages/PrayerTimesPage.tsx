import { useEffect, useState } from "react";
import PageShell from "../components/PageShell";

type Times = { Fajr: string; Sunrise: string; Dhuhr: string; Asr: string; Maghrib: string; Isha: string };

const labels: Record<keyof Times, string> = {
  Fajr: "الفجر", Sunrise: "الشروق", Dhuhr: "الظهر", Asr: "العصر", Maghrib: "المغرب", Isha: "العشاء"
};

export default function PrayerTimesPage({ onBack }: { onBack: () => void }) {
  const [times, setTimes] = useState<Times | null>(null);
  const [city, setCity] = useState<string>("");
  const [err, setErr] = useState("");

  useEffect(() => {
    const cached = localStorage.getItem("prayer_cache");
    if (cached) {
      try {
        const { date, data, city: c } = JSON.parse(cached);
        if (date === new Date().toDateString()) {
          setTimes(data); setCity(c); return;
        }
      } catch {}
    }
    if (!navigator.geolocation) { setErr("الموقع غير مدعوم"); return; }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const r = await fetch(`https://api.aladhan.com/v1/timings?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&method=4`);
          const j = await r.json();
          setTimes(j.data.timings);
          setCity(j.data.meta.timezone);
          localStorage.setItem("prayer_cache", JSON.stringify({
            date: new Date().toDateString(), data: j.data.timings, city: j.data.meta.timezone
          }));
        } catch {
          setErr("تعذّر جلب المواقيت — تحقق من الإنترنت");
        }
      },
      () => setErr("فعّل صلاحية الموقع")
    );
  }, []);

  return (
    <PageShell title="مواقيت الصلاة" onBack={onBack}>
      {err && <div style={{ color: "#fca5a5", textAlign: "center", padding: 20 }}>{err}</div>}
      {city && <div style={{ textAlign: "center", marginBottom: 12, opacity: 0.8 }}>📍 {city}</div>}
      {times && (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {(Object.keys(labels) as (keyof Times)[]).map((k) => (
            <div key={k} style={{
              display: "flex", justifyContent: "space-between", alignItems: "center",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 12, padding: "14px 18px"
            }}>
              <span style={{ fontSize: 17, fontWeight: 600 }}>{labels[k]}</span>
              <span style={{ fontSize: 19, fontWeight: 700, color: "#fbbf24" }}>{times[k]}</span>
            </div>
          ))}
        </div>
      )}
      {!times && !err && <div style={{ textAlign: "center", padding: 30 }}>جارٍ التحميل...</div>}
    </PageShell>
  );
}
