export function Access() {
  return (
    <section id="access" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-700 tracking-[0.2em] text-sm mb-2">ACCESS</p>
          <h2 className="text-white text-4xl md:text-5xl mb-4">
            アクセス
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="h-[400px] border-8 border-cyan-700 rounded-sm overflow-hidden mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3189.4895874!2d138.851!3d37.4467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5ff4c9c7f6b9c9c7%3A0x9c9c7f6b9c7f6b9c!2z44Ki44Kq44O844Os6ZW35bKh!5e0!3m2!1sja!2sjp!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="会場マップ"
              ></iframe>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-white text-2xl mb-4">アオーレ長岡</h3>
              <p className="text-white mb-4">
                市民交流ホールA<br />
                〒940-0062<br />
                新潟県長岡市大手通1丁目4番地10
              </p>
            </div>

            <div>
              <h4 className="text-cyan-300 tracking-wide mb-3">電車でお越しの方</h4>
              <ul className="space-y-2 text-white">
                <li className="flex items-start gap-2">
                  <span>JR長岡駅 大手口より徒歩3分</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-300 tracking-wide mb-3">お車でお越しの方</h4>
              <p className="text-white mb-3">
                関越自動車道 長岡ICより約15分<br />
                アオーレ長岡地下駐車場をご利用いただけます。
              </p>
              <p className="text-sm text-cyan-300">
                ※駐車台数に限りがございますので、できる限り公共交通機関をご利用ください。
              </p>
            </div>

            <div className="bg-cyan-50 border-l-4 border-cyan-600 p-4 rounded-sm">
              <h4 className="text-cyan-700 mb-2">座席券配布・開場時間</h4>
              <p className="text-gray-700">
                12:00〜 座席券配布開始<br />
                13:00 開演<br />
                14:30 終演予定<br />
                <span className="text-sm text-gray-600 mt-2 block">
                  開演時刻を過ぎてのご入場は制限させていただく場合がございます。
                  時間に余裕をもってお越しください。
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
