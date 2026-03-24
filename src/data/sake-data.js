// src/data/sake-data.js
export const sakeData = {
  // ── YOUR ORIGINAL DATA (kept exactly as before) ──
  sake_rice: [
    { id: "yamada_nishiki", name: "山田錦", title: "酒米之王", origin: "兵庫縣", flavor_profile: "香氣濃郁，口感圓潤且具層次感，平衡度極佳。", description: "最著名的酒米，米芯大且不易破碎，非常適合釀造高等級的吟釀及大吟釀。" },
    { id: "gohyakumangoku", name: "五百萬石", title: "淡麗辛口之源", origin: "新潟縣", flavor_profile: "口感清爽、乾淨，帶有輕快的辛口特徵。", description: "產量極大，是打造「淡麗辛口」風格的核心米種，適合冷飲。" },
    { id: "miyama_nishiki", name: "美山錦", title: "北國之雪", origin: "長野縣", flavor_profile: "口感俐落，帶有淡淡的草本或礦物質感。", description: "耐寒性強，釀出的酒質通常較為堅韌且清爽。" },
    { id: "omachi", name: "雄町", title: "原生之魂", origin: "岡山縣", flavor_profile: "酒體厚實，具備獨特的泥土氣息與複雜的酸度。", description: "日本最古老的原生品種，因種植困難而珍貴，深受資深愛好者喜愛。" }
  ],
  yeast_types: [
    { id: "k7", name: "協會 7 號", characteristic: "經典香氣", description: "發酵力強，香氣沉穩，是目前日本使用最廣泛的酵母之一。" },
    { id: "k9", name: "協會 9 號", characteristic: "吟釀香", description: "能產生華麗的蘋果與香蕉香氣，是釀造吟釀酒的標準選擇。" },
    { id: "k1801", name: "協會 1801 號", characteristic: "極致華麗", description: "現代流行酵母，香氣極其奔放，常用於全國新酒評鑑會的參賽酒。" }
  ],
  classifications: [
    { category: "純米系 (Junmai)", types: [
      { name: "純米大吟釀", polishing_rate: "50% 以下", note: "最高等級，口感最細緻" },
      { name: "純米吟釀", polishing_rate: "60% 以下", note: "具備果香與清爽感" },
      { name: "特別純米", polishing_rate: "60% 以下或特殊工法", note: "強調米味與個性" },
      { name: "純米酒", polishing_rate: "無限制", note: "純粹的米與米麴，酒體紮實" }
    ]},
    { category: "本釀造系 (Non-Junmai)", types: [
      { name: "大吟釀", polishing_rate: "50% 以下", note: "加入少量酒精提升香氣" },
      { name: "吟釀", polishing_rate: "60% 以下", note: "口感輕盈，香氣明顯" },
      { name: "本釀造", polishing_rate: "70% 以下", note: "適合溫飲，口感俐落" }
    ]}
  ],
  brewing_terms: [
    { term: "精米步合", meaning: "磨米後剩下的百分比。數字越小，磨掉越多，雜質越少。" },
    { term: "日本酒度 (SMV)", meaning: "衡量殘糖量。正值越高越辛口（Dry），負值越高越甘口（Sweet）。" },
    { term: "生酒 (Namazake)", meaning: "未經加熱殺菌的酒，口感新鮮但需全程冷藏。" },
    { term: "無濾過生原酒", meaning: "不經過濾、不加水稀釋、不加熱，最原始強烈的風味。" }
  ],

  // ── NEW: MASTER LIBRARY (Trello Part B) ──
  library: {
    rice: [
      { name: "山田錦", desc: "酒米之王，Shinapaku 大，適合大吟釀" },
      { name: "雄町", desc: "古老原生米，土味與複雜酸度" }
    ],
    yeast: [
      { name: "協會 9 號", desc: "香蕉梨果香，吟釀標準酵母" }
    ],
    gi: [
      { name: "GI 山形", desc: "高級吟釀，柔軟清澈" },
      { name: "GI 灘 (兵庫)", desc: "宮水硬水 → 雄厚乾爽" },
      { name: "GI 伏見 (京都)", desc: "軟水 → 優雅女性風格" },
      { name: "GI 白山 (石川)", desc: "日本最早 GI，結構深厚" }
    ]
  },

  // ── NEW: GLOSSARY FOR TOOLTIPS ──
  glossary: {
    "並行複發酵": "Multiple Parallel Fermentation — 清酒獨有，糖化與發酵同時進行",
    "SMV": "日本酒度 — 正值越乾，負值越甜",
    "生酛": "傳統乳酸自然培養法，風味濃郁",
    "山廢": "簡化生酛，旨味強烈",
    "雫酒": "袋吊自然滴酒，只用於最高級比賽酒",
    "Koshu": "熟成清酒，梅納反應產生蜂蜜、醬油風味",
    "Awa-Sake": "氣泡清酒，需自然瓶內二次發酵才可標 Awa-Sake 協會印"
  },

  // ── NEW: MASTER MODULES 2–6 (Trello content) ──
  modules: {
    level3: {
      title: "大師級 Module 2–6",
      m2_pillars: "四大支柱：山田錦 Shinpaku 結構、硬水 vs 軟水對發酵影響、Tsuki-haze vs Soku-haze、酵母 No.9（香蕉）與 1801（蘋果）酯類表",
      m3_alchemy: "生酛（4週）、山廢、速釀 + 並行複發酵 + 壓榨三段（Arabashiri / Nakadori / Seme）",
      m4_classification: "8種特級名稱法律定義 + 10% 酒精添加上限 + GI 制度（山形、灘、伏見、白山）",
      m5_sommelier: "系統性品飲（SAT） + 10種溫度名稱（雪冷 5°C → 熱燗 55°C） + 酒器物理（白酒杯 vs お猪口 vs 升）",
      m6_modern: "氣泡清酒三法（注入 / Charmat / 傳統法） + Koshu 梅納反應 + 分子餐配（無單寧優勢，蛋/蘆筍/芝士完美配對）"
    }
  }
};
