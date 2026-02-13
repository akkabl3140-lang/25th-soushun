const programs = [
  {
    number: 1,
    title: '嵐人',
    type: 'performance',
    note: ''
  },
  {
    number: 2,
    title: '千秋',
    type: 'performance',
    note: ''
  },
  {
    number: 3,
    title: '雷音',
    type: 'performance',
    note: ''
  },
  {
    number: 4,
    title: 'カシラ',
    type: 'transition',
    note: '転換'
  },
  {
    number: 5,
    title: '跳兎囃子',
    type: 'performance',
    note: ''
  },
  {
    number: 6,
    title: '越佐',
    type: 'performance',
    note: ''
  },
  {
    number: 7,
    title: '春の息吹',
    type: 'performance',
    note: ''
  },
  {
    number: 8,
    title: '乙彼',
    type: 'performance',
    note: ''
  },
  {
    number: 9,
    title: '風来舞',
    type: 'performance',
    note: ''
  },
  {
    number: 10,
    title: '投票タイム',
    type: 'voting',
    note: ''
  },
  {
    number: 11,
    title: '雨雫',
    type: 'performance',
    note: ''
  },
  {
    number: 12,
    title: '卒業生曲',
    type: 'performance',
    note: ''
  },
  {
    number: 13,
    title: 'つるてん太鼓',
    type: 'performance',
    note: ''
  },
  {
    number: 14,
    title: '爛漫花',
    type: 'performance',
    note: ''
  },
  {
    number: 15,
    title: '風駆狼',
    type: 'performance',
    note: ''
  },
];

export function Program() {
  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'performance':
        return 'bg-cyan-50 border-cyan-600';
      case 'transition':
        return 'bg-gray-50 border-gray-300';
      case 'greeting':
        return 'bg-blue-50 border-blue-500';
      case 'voting':
        return 'bg-amber-50 border-amber-500';
      case 'video':
        return 'bg-purple-50 border-purple-500';
      case 'encore':
        return 'bg-gradient-to-r from-cyan-100 to-blue-100 border-cyan-700';
      default:
        return 'bg-gray-50 border-gray-300';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'performance':
        return '演奏';
      case 'transition':
        return '転換';
      case 'greeting':
        return '挨拶';
      case 'voting':
        return '投票';
      case 'video':
        return '映像';
      case 'encore':
        return 'アンコール';
      default:
        return '';
    }
  };

  return (
    <section id="program" className="py-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="text-center mb-16">
          <p className="text-cyan-700 tracking-[0.2em] text-sm mb-2">PROGRAM</p>
          <h2 className="text-white text-4xl md:text-5xl mb-4">
            公演時間
          </h2>
          <p className="text-white/60 mb-6">
            約1時間30分の演奏会をお楽しみください
          </p>
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-sm border-2 border-cyan-600">
            <div className="text-center">
              <p className="text-sm text-white/80 mb-1">開演</p>
              <p className="text-2xl font-bold text-cyan-600">13:00</p>
            </div>
            <div className="text-white/60">〜</div>
            <div className="text-center">
              <p className="text-sm text-white/80 mb-1">終演予定</p>
              <p className="text-2xl font-bold text-cyan-600">14:30</p>
            </div>
          </div>
        </div>
        
        {/* <div className="space-y-3">

        <div className="space-y-3">
          {programs.map((program) => {
            // 転換のみで演目がない場合はスキップ
            if (program.type === 'transition' && !program.title) {
              return (
                <div key={program.number} className="h-2 flex items-center justify-center">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
              );
            }

            return (
              <div
                key={program.number}
                className={`flex gap-4 md:gap-6 p-4 md:p-5 rounded-sm border-l-4 ${getTypeStyle(
                  program.type
                )} hover:shadow-md transition-all duration-300`}
              >
                <div className="flex-shrink-0 w-12 md:w-16">
                  <div
                    className={`text-xl md:text-2xl font-bold ${program.type === 'transition'
                      ? 'text-gray-400'
                      : program.type === 'encore'
                        ? 'text-cyan-700'
                        : 'text-cyan-700'
                      }`}
                  >
                    {program.number}
                  </div>
                </div>
 */}
                {/* <div className="flex-grow">
                  <div className="flex items-start gap-3 mb-1">
                    {program.title && (
                      <h3 className="text-lg md:text-xl flex-grow">
                        {program.title}
                      </h3>
                    )}
                    <span
                      className={`text-xs px-2 py-1 rounded ${program.type === 'performance'
                        ? 'bg-cyan-600 text-white'
                        : program.type === 'greeting'
                          ? 'bg-blue-500 text-white'
                          : program.type === 'voting'
                            ? 'bg-amber-500 text-white'
                            : program.type === 'video'
                              ? 'bg-purple-500 text-white'
                              : program.type === 'encore'
                                ? 'bg-cyan-700 text-white'
                                : 'bg-gray-400 text-white'
                        }`}
                    >
                      {getTypeLabel(program.type)}
                    </span>
                  </div>
                  {program.note && (
                    <p className="text-sm text-gray-600 mt-1">{program.note}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div> */}

        <div className="mt-10 gap-4 w-fit">
          {/* <div className="p-5 bg-cyan-50 rounded-sm border-l-4 border-cyan-600">
            <h4 className="text-cyan-700 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              演目について
            </h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>全14演目を予定しております</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>転換時間を含みます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 mt-1">•</span>
                <span>投票タイムでは観客投票を実施します</span>
              </li>
            </ul>
          </div> */}

          <div className="p-5 bg-gray-50 rounded-sm border-l-4 border-gray-400">
            <h4 className="text-gray-700 mb-3 flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                />
              </svg>
              注意事項
            </h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1">•</span>
                <span>プログラムは予告なく変更になる場合がございます</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 mt-1">•</span>
                <span>演奏中の撮影・録音は可能ですが、マナーを守ってお願いいたします</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}