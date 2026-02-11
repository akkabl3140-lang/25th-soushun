export function Ticket() {
  return (
    <section id="ticket" className="py-20 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-400 tracking-[0.2em] text-sm mb-2">TICKET</p>
          <h2 className="text-4xl md:text-5xl mb-4">
            座席券情報
          </h2>
          <p className="text-gray-400">
            先着190席限定の座席券制となっております。事前予約も可能です。
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-12">
          <div className="bg-white text-gray-900 p-10 rounded-sm shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl mb-4">入場料</h3>
              <div className="text-6xl text-cyan-700 mb-2">
                ¥100
              </div>
              <p className="text-cyan-700 tracking-wide mb-6">先着190席</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="pl-4 py-2">
                <p className="text-3xl text-center">12:00〜 会場にて座席券配布</p>
              </div>
            </div>
            
            <a
              href="https://docs.google.com/forms/d/1lM0u_k4cPLrZlulT8KJxhKvc1RYViiLBuIoUSmsPtrw/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white py-4 rounded-sm transition-colors duration-300 text-center text-lg tracking-wider"
            >
              事前予約フォームへ
            </a>
          </div>
        </div>
        
        <div className="bg-cyan-900 bg-opacity-30 border border-cyan-600 rounded-sm p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl md:text-2xl mb-6">ご来場の注意事項</h3>
          <div className="space-y-3 text-sm md:text-base">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <p>座席券配布時に座席をお選びいただけます。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <p>座席数には限りがあるため、入場をお断りさせていただく場合があります。</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <p>座席券は当日、会場にて配布いたします。</p>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-cyan-600">
            <h4 className="text-cyan-400 mb-4 tracking-wide">お問い合わせ</h4>
            <div className="space-y-2 text-sm">
              <p>和太鼓「早春の陣」実行委員会</p>
              <p>
                  sousyunnojin.wadaiko@gmail.com
              </p>
              <p className="mt-4">
                <a
                  href="https://instagram.com/ousyunnojin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @sousyunnojin
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
