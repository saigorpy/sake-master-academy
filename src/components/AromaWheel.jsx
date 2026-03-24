import { motion } from 'framer-motion';

export default function AromaWheel() {
  const aromas = ['蘋果/梨', '香蕉', '菇類', '堅果', '蜂蜜/醬油'];
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl text-center">
      <h3 className="text-2xl font-black mb-6">香氣輪盤</h3>
      <div className="relative w-72 h-72 mx-auto">
        <svg viewBox="0 0 300 300" className="w-full h-full">
          {aromas.map((a, i) => (
            <motion.g key={i} whileHover={{ scale: 1.15 }}>
              <circle cx="150" cy="150" r={45 + i * 18} fill="none" stroke="#f59e0b" strokeWidth="18" />
              <text x="150" y={80 + i * 25} textAnchor="middle" className="fill-stone-800 text-xs font-bold">{a}</text>
            </motion.g>
          ))}
        </svg>
      </div>
      <p className="mt-6 text-stone-600">點擊香氣練習鼻腔記憶</p>
    </div>
  );
}