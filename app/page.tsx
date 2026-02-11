import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Access } from "./components/Access";
import { Performers } from "./components/Performers";
import { Program } from "./components/Program";
import { Ticket } from "./components/Ticket";
import { Header } from "./components/Header";
import "./page.css"

export default function Home() {
  return (
    <>


      {/* 固定背景 */}
      <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
  <div className="bubble-layer" />
</div>
<div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/image/background.png')",
          }}
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-slate-900/80" />
      </div>

      <Header />
      <Hero />

      <main className="relative px-4 min-h-screen">
        <About />
        <Performers />
        <Program />
        <Ticket />
        <Access />
      </main>

      <Footer />
    </>
  );
}
