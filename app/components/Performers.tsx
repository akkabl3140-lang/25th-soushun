import Image from 'next/image';

const performers = [
  {
    name: '輪太鼓衆 転太鼓舞（てんてこまい）',
    description: '長岡造形大学の和太鼓サークルです。私たちは「輪になって楽しく太鼓を叩こう！」をコンセプトに、日々太鼓練習に打ち込んでいます。長岡市を中心として、県内各地のイベントやお祭りに参加し、元気よく活動中です。かけ声はいつも…「ちょいさー！」',
    image: '/image/tenteko.png',
    members: ['ミニプ', '藍', '紫黄', 'ノラン', 'はち', '爽', 'アズ', '福', '海松', '四ツ葉', 'どん', '龍', 'メローポッシュー', '薫衣', '楽', 'ぴこぴーた', '茜蝶', 'るく', '翠心', '律', 'すす', 'ロズ', '燐葉']
  },
  {
    name: '悠久太鼓愛好会 つるかめ会',
    description: '長岡技術科学大学の和太鼓サークルです。長岡市内を中心に各種イベントや老人ホーム等の施設に訪問して演奏しています。また大花火大会で有名な"長岡まつり"をはじめ、夏のお祭りシーズンにおいては連日フル活動！！長岡市の至る所で我々の姿が見られるハズです！',
    image: '/image/turukame.png',
    members: ['ニキ', 'バキ', '中川', '阿部', 'サカノフ', 'ポッター', 'まひまひ', 'あかりん', 'グラタン', 'キンギョ', 'かくさん', 'ぐっさん', 'ゆらら', 'まゆきち', 'ともちゃん', 'もっちゃん']
  }
];
export function Performers() {
  return (
    <section id="performers" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-cyan-700 tracking-[0.2em] text-sm mb-2">PERFORMERS</p>
          <h2 className="text-white text-4xl md:text-5xl mb-4">
            出演団体・出演者
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            長岡で活動する学生和太鼓サークルが共演します
          </p>
        </div>

        <div className="space-y-12">
          {performers.map((performer, index) => (
            <div
              key={index}
              className="rounded-lg bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative overflow-hidden h-64 md:h-auto">
                  <Image
                    src={performer.image}
                    alt={performer.name}
                    fill
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
                <div className="md:col-span-3 p-6 md:p-8">
                  <h3 className="text-3xl mb-3 border-b-2 border-cyan-600 pb-3">{performer.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{performer.description}</p>

                  <div>
                    <h4 className="text-cyan-700 mb-3 text-sm tracking-wider">出演者</h4>
                    <div className="flex flex-wrap gap-3">
                      {performer.members.map((member, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 bg-cyan-50 rounded-sm hover:bg-cyan-100 transition-colors duration-300 border border-cyan-200"
                        >
                          <p className="text-gray-800 tracking-wide">{member}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
