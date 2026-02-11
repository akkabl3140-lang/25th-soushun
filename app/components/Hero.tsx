import hero from '@/public/image/hero.png';
import Image from "next/image";
import sakaue from '@/public/image/sakaue.png';
import all from '@/public/image/all.png';
import { kaisei, mincho } from '@/app/fonts';

export function Hero() {
  return (
        <div id="home" className="relative h-screen overflow-hidden">
            {/* <div className="absolute inset-0 z-0">
        <Image
          src={hero}
          alt=""
          fill
          className="object-cover scale-110 blur-xl opacity-70"
          priority
        />
      </div> */}

      {/* 前景：メイン画像 */}
      <div className="absolute inset-0 flex items-center justify-center ">
        <Image
          src={all}
          alt="和太鼓演奏"
          className="h-full w-full object-cover opacity-80"
          priority
        />
      </div>
  {/* <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden">
  <Image
    src={all}
    alt="演奏者"
    className=" object-contain opacity-60"
    // priority
  />
</div> */}
{/* <div className="absolute top-0 left-0 right-0 z-10 overflow-hidden">
  <Image
    src={azu}
    alt="演奏者"
    className=" object-contain opacity-60"
    // priority
  />
</div>
<div className="absolute top-0 left-0 right-0 z-10 overflow-hidden">
  <Image
    src={hachi}
    alt="演奏者"
    className=" object-contain opacity-60"
    // priority
  />
</div>
<div className="absolute top-0 left-0 right-0 z-10 overflow-hidden">
  <Image
    src={potta}
    alt="演奏者"
    className=" object-contain opacity-60"
    // priority
  />
</div>
<div className="absolute top-0 left-0 right-0 z-10 overflow-hidden">
  <Image
    src={ao}
    alt="演奏者"
    className=" object-contain opacity-60"
    // priority
  />
</div> */}

      {/* テキストコンテンツ */}
      <div className="relative z-20 h-full flex flex-col items-center px-4 text-white">
        <div className="pt-48 text-center space-y-8 max-w-4xl">
          <div className="space-y-4 bg-black/40 shadow-[0_0_30px_20px_rgba(0,0,0,0.4)]">
            <p className={`${mincho.className} text-cyan-300 tracking-[0.3em] text-xl md:text-base`}>
              第二十五回
            </p>
            <div className='flex justify-center flex-wrap'>
              <div className={`${kaisei.className} text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider`}>
                和太鼓
              </div>
              <div className={`${kaisei.className} text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider`}>「早春の陣」</div>
            </div>
            <div className="space-y-2">
              <p className={`${kaisei.className} text-3xl md:text-3xl tracking-widest text-cyan-300`}>
                韻 ~揺るがないもの~
              </p>
            </div>
          </div>
          
          <div className={`${mincho.className} shadow-[0_0_30px_20px_rgba(0,0,0,0.3)] mt-40 space-y-4 text-xl md:text-2xl lg:text-3xl bg-black/30`}>
            <p className="tracking-wide font-bold">2026年3月8日（日）13:00開演</p>
            <p className="tracking-wide font-bold">アオーレ長岡 市民ホールA</p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}