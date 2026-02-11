import Image from "next/image";
import { kaisei, mincho } from '@/app/fonts';

export function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className=" gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div>
                <p className="text-cyan-700 text-center tracking-[0.2em] text-sm mb-2">THEME</p>
                <h2 className="text-white text-center text-4xl md:text-5xl mb-6">
                  テーマ
                </h2>
                <h3 className={`${kaisei.className} text-center text-3xl md:text-4xl text-cyan-300 mb-4`}>
                  韻 ~揺るがないもの~
                </h3>
              </div>

              <p className="text-white leading-relaxed">
                今年の演奏会のテーマ「韻 ― 揺るがないもの ―」には、私たちの団体がこれまで歩んできた軌跡と、その先に広がっていく未来への想いを込めました。
              </p>

              <p className="text-white leading-relaxed">
                「韻」という文字には、&quot;響き&quot;や&quot;余韻&quot;、すなわち後に残るものという意味があります。
                これまで先輩方が築き上げてきた太鼓の音や精神は、まさに私たちに受け継がれた&quot;韻&quot;であり、
                その重みと温度を感じていただきたい。
                そしてその先に広がっていく音は、今を生きる私たち自身が創り出していく――
                そんな決意をこの一文字に託しました。
              </p>

              <p className="text-white leading-relaxed">
                また、「揺るがないもの」には、変化の中にあっても決して失ってはならない&quot;想い&quot;という意味を込めています。
                私たちは、演奏を&quot;披露する&quot;という原点に立ち返り、
                技術の向上、太鼓に向き合う心、仲間と響き合う姿勢、受け継いだ思いを大切にしたいと考えています。
              </p>

              <p className="text-white leading-relaxed">
                演奏会は、これまでの集大成であると同時に、次の一歩を踏み出す場所でもあります。揺るがない想いを胸に、私たちらしい「韻」を打ち鳴らします。
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="border-l-4 border-cyan-600 pl-4">
                  <p className="text-sm text-cyan-300 mb-1">開催日時</p>
                  <p className="text-white font-bold">2026年3月8日（日）</p>
                  <p className="text-white text-sm">13:00開演（12:00～座席券配布）</p>
                </div>
                <div className="border-l-4 border-cyan-600 pl-4">
                  <p className="text-sm text-cyan-300 mb-1">会場</p>
                  <p className="text-white font-bold">アオーレ長岡</p>
                  <p className="text-white text-sm">市民交流ホールA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}