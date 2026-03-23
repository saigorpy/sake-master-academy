// src/components/SakeBrewingProcess.jsx
import React, { useState } from 'react';

const steps = [
  {
    num: "01",
    title: "精米 Seimai",
    emoji: "🌾",
    time: "1-3 天",
    desc: "將米粒外層雜質磨掉，只留下米芯。精米步合越低（例如 40%），酒質越細緻華麗。",
    detail: "山田錦常被磨到 35-50%，這一步決定了最終酒的香氣純度。"
  },
  {
    num: "02",
    title: "洗米・浸漬・蒸米",
    emoji: "💧",
    time: "半天",
    desc: "清洗米粒、浸泡吸水、再蒸熟成飯。蒸米讓澱粉更容易被麴菌分解。",
    detail: "浸漬時間精準控制在 30-120 分鐘，過長或過短都會影響發酵。"
  },
  {
    num: "03",
    title: "麴作り Koji",
    emoji: "🍄",
    time: "2 天",
    desc: "在蒸米上接種麴菌，讓米粒變成「麴」。這是清酒獨有的「並行複發酵」關鍵。",
    detail: "麴菌會產生酵素，把澱粉轉化成糖，是清酒香氣與甜度的來源。"
  },
  {
    num: "04",
    title: "酒母作り Shubo",
    emoji: "🧪",
    time: "2-3 週",
    desc: "用米、麴、水、酵母做出強壯的酒母（酵母培養基）。保護酒母不被雜菌入侵。",
    detail: "協會 9 號、1801 號酵母最常用在這階段，決定香氣風格。"
  },
  {
    num: "05",
    title: "仕込み Moromi",
    emoji: "🍶",
    time: "3-5 週",
    desc: "分三次加入米、麴、水進行主發酵（三段仕込み）。溫度逐步下降至 8-15°C。",
    detail: "這是並行複發酵：同時進行糖化與酒精發酵，清酒獨有技術。"
  },
  {
    num: "06",
    title: "上槽・濾過・火入れ",
    emoji: "🏭",
    time: "1-2 週",
    desc: "壓榨、分離、過濾、殺菌的最後階段。這一步決定酒的澄澈度與最終風味。",
    detail: `
      <strong>① 上槽（Jōsō / 壓榨）</strong><br>
      把發酵完成的 Moromi 放入壓榨機（Yabuta 或袋吊），把清酒與酒糟（Kasu）分離。<br><br>
      
      <strong>② 濾過（Roka / Filtration） — 這一步最影響口感！</strong><br>
      • 濾紙過濾：最傳統，保留細微米香<br>
      • 活性炭過濾：去除雜味與顏色（常用於大吟釀）<br>
      • 離心過濾：現代高速方式，保留更多風味<br>
      • 無濾過（Muroka）：故意不濾，保留自然渾濁與強烈米香（代表酒：無濾過生原酒）<br><br>
      
      <strong>③ 火入れ（Hiire / Pasteurization）</strong><br>
      加熱至 60-65°C 殺死酵母與雜菌，讓酒穩定保存。生酒（Namazake）則完全跳過這步。<br><br>
      
      <strong>特別風格：</strong><br>
      • 原酒 Genshu：不上槽後不加水稀釋，酒精度 17-20%，風味最濃<br>
      • にごり酒 Nigori：只粗濾，保留乳白色酒糟，口感甜美濃郁<br>
      • 無濾過生原酒：不濾、不稀釋、不加熱，最原始、最強烈的清酒體驗
    `
  }
];

const SakeBrewingProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-10">
        <div className="inline-flex bg-amber-100 text-amber-800 px-6 py-2 rounded-full text-sm font-bold mb-3">
          🍶 清酒釀造流程
        </div>
        <h3 className="text-4xl font-black text-stone-900">從米到酒的 6 大奇蹟</h3>
        <p className="text-stone-500 mt-2">點擊每一步，深入了解傳統工藝</p>
      </div>

      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`group bg-white border-2 rounded-3xl p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl ${
              activeStep === idx 
                ? 'border-amber-600 shadow-2xl scale-[1.02]' 
                : 'border-stone-100 hover:border-stone-200'
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="text-5xl font-black text-amber-600/20 group-hover:text-amber-600/40 transition-colors">
                {step.num}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{step.emoji}</span>
                  <h4 className="text-2xl font-bold text-stone-900">{step.title}</h4>
                  <span className="ml-auto text-xs bg-stone-100 px-3 py-1 rounded-full text-stone-500">{step.time}</span>
                </div>
                <p className="text-stone-600 mt-3 leading-relaxed">{step.desc}</p>
                
                {activeStep === idx && (
                  <div 
                    className="mt-8 pt-8 border-t border-amber-200 text-stone-700 leading-relaxed prose prose-stone max-w-none animate-in fade-in"
                    dangerouslySetInnerHTML={{ __html: step.detail }}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-xs text-stone-400 mt-12">
        濾過這一步是清酒與其他米酒最大的差異之一 —— 決定了「清」還是「濃」<br />
        現在你已經完整掌握從米到杯的整個工藝了！
      </div>
    </div>
  );
};

export default SakeBrewingProcess;
