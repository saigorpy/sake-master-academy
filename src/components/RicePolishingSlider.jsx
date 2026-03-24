import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RicePolishingSlider() {
  const [polish, setPolish] = useState(50);
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-black mb-6">精米步合模擬器</h3>
      <input 
        type="range" 
        min="23" 
        max="100" 
        value={polish} 
        onChange={e => setPolish(+e.target.value)} 
        className="w-full accent-amber-600" 
      />
      <motion.div 
        className="h-48 bg-gradient-to-br from-amber-400 to-stone-300 rounded-2xl mt-6 flex items-center justify-center text-5xl font-black"
        animate={{ scale: 1 - polish / 200 }}
      >
        {polish}%
      </motion.div>
      <p className="text-center mt-4 text-stone-600">Dassai 23 = 23% polishing → 最極致大吟釀</p>
    </div>
  );
}