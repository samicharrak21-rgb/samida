import { useState } from "react";
import Home from "./pages/Home";
import AzkarPage from "./pages/AzkarPage";
import TasbihPage from "./pages/TasbihPage";
import DuasPage from "./pages/DuasPage";
import AsmaaPage from "./pages/AsmaaPage";
import QiblaPage from "./pages/QiblaPage";
import PrayerTimesPage from "./pages/PrayerTimesPage";

export type Page = "home" | "azkar-sabah" | "azkar-masaa" | "tasbih" | "duas" | "asmaa" | "qibla" | "prayer";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const go = (p: Page) => setPage(p);
  const back = () => setPage("home");

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg,#0d4f3c 0%,#1a6b54 100%)" }}>
      {page === "home" && <Home onNavigate={go} />}
      {(page === "azkar-sabah" || page === "azkar-masaa") && (
        <AzkarPage type={page} onBack={back} />
      )}
      {page === "tasbih" && <TasbihPage onBack={back} />}
      {page === "duas" && <DuasPage onBack={back} />}
      {page === "asmaa" && <AsmaaPage onBack={back} />}
      {page === "qibla" && <QiblaPage onBack={back} />}
      {page === "prayer" && <PrayerTimesPage onBack={back} />}
    </div>
  );
}
