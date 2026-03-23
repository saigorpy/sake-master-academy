// src/components/SakeSMVChart.jsx
import React, { useState } from 'react';

const SakeSMVChart = () => {
  const [smv, setSmv] = useState(0);

  const getProfile = (value) => {
    if (value >= 6) return { label: "極辛口 Extra Dry", emoji: "🔥", color: "text-red-600", desc: "極度清爽、乾淨，幾乎無殘糖。最適合生魚片、壽司或清淡海鮮。", example: "山田錦大吟釀（SMV +8）" };
    if (value >= 1) return { label: "辛口 Dry", emoji: "🌾", color: "text-amber-600", desc: "清爽俐落，米香淡雅，餘韻乾淨。", example: "五百萬石純米吟釀（SMV +3）" };
    if (value === 0) return { label: "中口 Balanced", emoji: "⚖️", color: "text-green-600", desc: "甜度與辛度完美平衡，最百搭。", example: "美山錦本釀造（SMV ±0）" };
    if (value >= -5) return { label: "甘口 Sweet", emoji: "🍬", color: "text-blue-600", desc: "帶有明顯甜味，入口圓潤，新手最愛。", example: "雄町純米酒（SMV -3）" };
    return { label: "極甘口 Very Sweet", emoji: "🍯", color: "text-purple-600", desc: "濃郁甜美，香氣華麗，適合餐後或單飲。", example: "長期熟成古酒（SMV -10）" };
  };

  const profile = getProfile(smv);

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-3xl shadow-2xl border border-stone-100">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 bg-amber-100 text-amber-800 px-6 py-2 rounded-full text-sm font-bold">
          🍶 日本酒度 (SMV) 風味儀表板
        </div>
        <h3 className="text-3xl font-black text-stone-900 mt-4">滑動看看酒的性格</h3>
        <p className="text-stone-500">正值越高越辛口｜負值越高越甘口</p>
      </div>

      {/* Slider */}
      <div className="px-4">
        <input
          type="range"
          min="-15"
          max="15"
          step="0.5"
          value={smv}
          onChange={(e) => setSmv(Number(e.target.value))}
          className="w-full accent-amber-600 cursor-pointer"
        />
      </div>

      {/* Live Value */}
      <div className="text-center my-8">
        <div className="text-8xl font-black text-stone-900 tracking-tighter transition-all">
          {smv > 0 ? `+${smv}` : smv}
        </div>
        <div className={`text-2xl font-bold mt-1 ${profile.color}`}>
          {profile.label} {profile.emoji}
        </div>
      </div>

      {/* Visual Bar */}
      <div className="relative h-6 bg-gradient-to-r from-purple-500 via-emerald-400 to-red-600 rounded-2xl overflow-hidden mb-2">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white border-4 border-stone-900 rounded-full shadow-xl transition-all duration-300"
          style={{ left: `${((smv + 15) / 30) * 100}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-stone-400 font-medium">
        <span>-15 極甘</span>
        <span>+15 極辛</span>
      </div>

      {/* Description Card */}
      <div className="mt-10 bg-stone-50 p-6 rounded-2xl border border-stone-100">
        <p className="text-lg leading-relaxed text-stone-700">{profile.desc}</p>
        <div className="mt-6 pt-6 border-t border-stone-200 text-sm">
          <span className="font-bold text-amber-600">推薦酒款範例：</span> {profile.example}
        </div>
      </div>

      <div className="text-center text-xs text-stone-400 mt-8">
        實際酒標上的 SMV 會影響你點酒的選擇 — 現在你就是自己的唎酒師了！
      </div>
    </div>
  );
};

export default SakeSMVChart;
