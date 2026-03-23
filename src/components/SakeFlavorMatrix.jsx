import React, { useState } from 'react';

const flavorData = {
  kun: { title: "薰酒 (Kun-shu)", style: "芳香型", desc: "香氣濃郁且華麗，口感清爽。", examples: "大吟釀、吟釀", color: "bg-rose-100", border: "border-rose-400" },
  so: { title: "爽酒 (So-shu)", style: "清爽型", desc: "香氣輕淡，口感乾淨俐落，最易入口。", examples: "普通酒、本釀造、生酒", color: "bg-blue-100", border: "border-blue-400" },
  jun: { title: "醇酒 (Jun-shu)", style: "濃厚型", desc: "帶有濃郁米香與鮮味 (Umami)，酒體厚實。", examples: "純米酒、山廢/廢酛", color: "bg-amber-100", border: "border-amber-400" },
  juku: { title: "熟酒 (Juku-shu)", style: "熟成型", desc: "具備乾果、香料等複雜香氣，色澤偏金黃。", examples: "長期熟成酒、古酒", color: "bg-purple-100", border: "border-purple-400" }
};

const SakeFlavorMatrix = () => {
  const [selected, setSelected] = useState('kun');

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-slate-800">清酒四大風味象限</h3>
      <div className="grid grid-cols-2 gap-2 aspect-square max-w-md mx-auto mb-6 relative">
        {/* Y-Axis Label */}
        <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-400">香氣強度 (High → Low)</div>
        {/* X-Axis Label */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400">酒體厚度 (Light → Rich)</div>
        
        <button onClick={() => setSelected('kun')} className={`border-2 rounded-tl-3xl p-4 flex flex-col items-center justify-center transition-all ${selected === 'kun' ? 'bg-rose-50 border-rose-500 scale-105 z-10' : 'border-slate-100 hover:bg-slate-50'}`}>
          <span className="font-bold text-rose-600">薰</span>
          <span className="text-xs">Kun-shu</span>
        </button>
        <button onClick={() => setSelected('juku')} className={`border-2 rounded-tr-3xl p-4 flex flex-col items-center justify-center transition-all ${selected === 'juku' ? 'bg-purple-50 border-purple-500 scale-105 z-10' : 'border-slate-100 hover:bg-slate-50'}`}>
          <span className="font-bold text-purple-600">熟</span>
          <span className="text-xs">Juku-shu</span>
        </button>
        <button onClick={() => setSelected('so')} className={`border-2 rounded-bl-3xl p-4 flex flex-col items-center justify-center transition-all ${selected === 'so' ? 'bg-blue-50 border-blue-500 scale-105 z-10' : 'border-slate-100 hover:bg-slate-50'}`}>
          <span className="font-bold text-blue-600">爽</span>
          <span className="text-xs">So-shu</span>
        </button>
        <button onClick={() => setSelected('jun')} className={`border-2 rounded-br-3xl p-4 flex flex-col items-center justify-center transition-all ${selected === 'jun' ? 'bg-amber-50 border-amber-500 scale-105 z-10' : 'border-slate-100 hover:bg-slate-50'}`}>
          <span className="font-bold text-amber-600">醇</span>
          <span className="text-xs">Jun-shu</span>
        </button>
      </div>

      <div className={`p-4 rounded-lg border-l-4 ${flavorData[selected].color} ${flavorData[selected].border}`}>
        <h4 className="font-bold text-lg">{flavorData[selected].title}</h4>
        <p className="text-sm text-slate-600 mb-2">{flavorData[selected].desc}</p>
        <div className="text-xs font-semibold text-slate-500">代表酒款：{flavorData[selected].examples}</div>
      </div>
    </div>
  );
};

export default SakeFlavorMatrix;
