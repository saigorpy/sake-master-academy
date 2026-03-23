import React, { useState } from 'react';

const labelTerms = [
  { id: 'type', kanji: '純米大吟釀', romaji: 'Junmai Daiginjo', desc: '最高等級清酒。僅使用米、米麴與水，精米步合 50% 以下。口感細緻，香氣華麗。', category: '等級' },
  { id: 'polishing', kanji: '精米歩合 45%', romaji: 'Seimai Buai', desc: '表示磨米後剩下的比例。45% 代表磨掉了 55% 的外層雜質，數字越小通常口感越純淨。', category: '工藝' },
  { id: 'smv', kanji: '日本酒度 +3.0', romaji: 'SMV', desc: '衡量殘糖量。正值 (+) 越高越辛口 (Dry)，負值 (-) 越高越甘口 (Sweet)。', category: '數值' },
  { id: 'acidity', kanji: '酸度 1.4', romaji: 'Sando', desc: '影響口感的俐落度。酸度高則感覺較辛口、紮實；酸度低則感覺較圓潤、甘甜。', category: '數值' },
  { id: 'namazake', kanji: '生酒', romaji: 'Namazake', desc: '未經加熱殺菌的酒。保有新鮮、活潑的口感與香氣，必須全程冷藏保存。', category: '工藝' },
  { id: 'genshu', kanji: '原酒', romaji: 'Genshu', desc: '釀造完成後不加水稀釋。酒精度通常較高（17-20%），風味極其濃郁。', category: '工藝' }
];

const SakeLabelDecoder = () => {
  const [activeTerm, setActiveTerm] = useState(labelTerms[0]);

  return (
    <div className="max-w-4xl mx-auto p-4 bg-stone-50 rounded-2xl shadow-2xl border border-stone-200">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* 左側：模擬酒標 UI */}
        <div className="w-full md:w-1/2 bg-white p-8 border-4 border-double border-stone-800 shadow-inner relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 bg-red-700 text-white text-[10px] rotate-45 translate-x-4 -translate-y-1 w-20 text-center font-bold">限定品</div>
          
          <div className="flex flex-col items-center space-y-6 py-4">
            <div className="writing-vertical-rl text-5xl font-serif font-black tracking-widest text-stone-900 mb-4">
              匠之魂
            </div>
            
            <div className="space-y-3 w-full border-t border-b border-stone-200 py-4">
              {labelTerms.map((term) => (
                <button
                  key={term.id}
                  onClick={() => setActiveTerm(term)}
                  className={`w-full text-left px-3 py-2 rounded transition-colors flex justify-between items-center group ${
                    activeTerm.id === term.id ? 'bg-stone-800 text-white' : 'hover:bg-stone-100 text-stone-700'
                  }`}
                >
                  <span className="font-bold text-lg">{term.kanji}</span>
                  <span className={`text-[10px] uppercase tracking-tighter ${activeTerm.id === term.id ? 'text-stone-400' : 'text-stone-400'}`}>
                    {activeTerm.id === term.id ? '● 正在檢視' : '點擊解讀'}
                  </span>
                </button>
              ))}
            </div>
            
            <div className="text-[10px] text-stone-400 w-full flex justify-between">
              <span>製造年月: 2024.03.22</span>
              <span>XX 酒造株式會社</span>
            </div>
          </div>
        </div>

        {/* 右側：詳細解釋卡片 */}
        <div className="w-full md:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-1">酒標解讀器</h2>
            <p className="text-stone-500 text-sm">點擊左側標籤上的漢字，解開清酒的風味密碼。</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-8 border-stone-800 shadow-sm min-h-[250px] flex flex-col justify-center">
            <div className="inline-block px-2 py-1 bg-stone-100 text-stone-500 text-xs font-bold rounded mb-2">
              {activeTerm.category}
            </div>
            <h3 className="text-2xl font-bold text-stone-900 mb-1">{activeTerm.kanji}</h3>
            <p className="text-stone-400 italic text-sm mb-4">{activeTerm.romaji}</p>
            <p className="text-stone-700 leading-relaxed text-lg">
              {activeTerm.desc}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
              <span className="block text-xs font-bold text-amber-800 uppercase">小貼士</span>
              <span className="text-sm text-amber-900">看到「生酒」記得一定要放雪櫃，否則味道會變酸！</span>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
              <span className="block text-xs font-bold text-blue-800 uppercase">進階知識</span>
              <span className="text-sm text-blue-900">「原酒」加冰塊飲用 (On the rocks) 是非常流行的喝法。</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SakeLabelDecoder;
