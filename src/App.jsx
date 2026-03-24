// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Fuse from 'fuse.js';
import { sakeData } from './data/sake-data';
import contentData from './data/content.json';   // ← Correct import for JSON

// Existing components
import SakeFlavorMatrix from './components/SakeFlavorMatrix';
import SakeLabelDecoder from './components/SakeLabelDecoder';
import SakeMasterQuiz from './components/SakeMasterQuiz';
import SakeSMVChart from './components/SakeSMVChart';
import SakeBrewingProcess from './components/SakeBrewingProcess';

// NEW components from the upgrade
import RicePolishingSlider from './components/RicePolishingSlider';
import TastingNoteForm from './components/TastingNoteForm';
import AromaWheel from './components/AromaWheel';

const Nav = () => {
  const location = useLocation();
  return (
    <nav className="bg-stone-900 text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-3xl">🍶</span>
          <div>
            <div className="font-black text-2xl tracking-tighter">SAKE MASTER ACADEMY</div>
            <div className="text-amber-400 text-xs -mt-1">清酒大師學院</div>
          </div>
        </Link>
        <div className="flex gap-8 text-sm font-medium">
          <Link to="/" className={location.pathname === '/' ? 'text-amber-400' : 'hover:text-amber-400 transition'}>學院</Link>
          <Link to="/library" className={location.pathname === '/library' ? 'text-amber-400' : 'hover:text-amber-400 transition'}>圖書館</Link>
          <Link to="/toolkit" className={location.pathname === '/toolkit' ? 'text-amber-400' : 'hover:text-amber-400 transition'}>工具箱</Link>
          <Link to="/quiz" className={location.pathname === '/quiz' ? 'text-amber-400' : 'hover:text-amber-400 transition'}>認證測驗</Link>
        </div>
      </div>
    </nav>
  );
};

const BottomNav = () => {
  const loc = useLocation();
  const tabs = [
    { to: '/', label: '學院', icon: '📚' },
    { to: '/library', label: '圖書館', icon: '🔍' },
    { to: '/toolkit', label: '工具箱', icon: '🛠️' },
  ];
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t md:hidden z-50">
      <div className="flex justify-around py-3">
        {tabs.map(t => (
          <Link key={t.to} to={t.to} className={`flex flex-col items-center ${loc.pathname === t.to ? 'text-amber-600' : 'text-stone-500'}`}>
            <span className="text-2xl">{t.icon}</span>
            <span className="text-xs font-medium">{t.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

const Academy = () => {
  const levels = contentData.levels;

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      {/* Hero */}
      <div className="bg-gradient-to-br from-stone-900 to-blue-950 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="text-6xl font-black tracking-tighter mb-6"
          >
            清酒大師學院
          </motion.h1>
          <p className="text-2xl text-amber-300 mb-8">從零到專業唎酒師的完整學習平台</p>
        </div>
      </div>

      {/* YOUR ORIGINAL BEAUTIFUL SECTIONS */}
      {/* Rice Varieties */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black text-stone-900 mb-10 text-center">四大靈魂酒米</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sakeData.sake_rice.map(rice => (
            <motion.div 
              key={rice.id} 
              whileHover={{ scale: 1.03 }} 
              className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100"
            >
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold mb-2">{rice.name} <span className="text-amber-600">— {rice.title}</span></h3>
              <p className="text-stone-600 leading-relaxed">{rice.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SMV Chart */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <SakeSMVChart />
      </div>

      {/* Brewing Process */}
      <div className="max-w-4xl mx-auto px-6">
        <SakeBrewingProcess />
      </div>

      {/* Flavor Matrix */}
      <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-3xl shadow-2xl mx-6">
        <SakeFlavorMatrix />
      </div>

      {/* Classifications & Yeast */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-16">
        <div>
          <h3 className="text-3xl font-black mb-8">純米 vs 本釀造分類</h3>
          {sakeData.classifications.map(cat => (
            <div key={cat.category} className="mb-10">
              <div className="bg-amber-100 text-amber-800 px-4 py-1 inline-block rounded-full text-xs font-bold mb-4">{cat.category}</div>
              {cat.types.map(t => (
                <div key={t.name} className="mb-4 p-5 bg-stone-50 rounded-2xl">
                  {t.name} <span className="text-stone-400">({t.polishing_rate})</span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-black mb-8">酵母類型</h3>
          {sakeData.yeast_types.map(y => (
            <div key={y.id} className="mb-6 p-6 border-l-4 border-blue-900 bg-white rounded-r-3xl">
              <div className="font-bold text-xl">{y.name}</div>
              <div className="text-amber-600">{y.characteristic}</div>
              <p className="mt-3 text-stone-600">{y.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* NEW MASTER MODULES (Trello Phase 4) */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black text-stone-900 mb-10">大師級 Module 2–6（專業唎酒師標準）</h2>
        {levels.find(l => l.id === "level_3_master")?.chapters.map((ch, i) => (
          <div key={i} className="mb-12 bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">{ch.title}</h3>
            <p className="text-stone-700 leading-relaxed whitespace-pre-line">{ch.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Library = () => {
  const [query, setQuery] = useState('');
  const allItems = [...sakeData.library.rice, ...sakeData.library.yeast, ...sakeData.library.gi];
  const fuse = new Fuse(allItems, { keys: ['name', 'desc'], threshold: 0.3 });
  const results = query ? fuse.search(query).map(r => r.item) : allItems;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-screen bg-stone-50">
      <input
        type="text"
        placeholder="搜尋 山田錦、GI 山形、9號酵母..."
        className="w-full p-5 rounded-3xl border-2 border-stone-200 text-lg focus:outline-none focus:border-amber-600"
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {results.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow hover:shadow-2xl transition">
            <h3 className="font-black text-2xl mb-2">{item.name}</h3>
            <p className="text-stone-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Toolkit = () => (
  <div className="bg-stone-50 min-h-screen py-12">
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
      <RicePolishingSlider />
      <AromaWheel />
      <TastingNoteForm />
      <SakeSMVChart />
      <SakeLabelDecoder />
      <SakeFlavorMatrix />
    </div>
  </div>
);

export default function App() {
  return (
    <Router basename="/sake-master-academy">
      <Nav />
      <Routes>
        <Route path="/" element={<Academy />} />
        <Route path="/library" element={<Library />} />
        <Route path="/toolkit" element={<Toolkit />} />
        <Route path="/quiz" element={<SakeMasterQuiz />} />
      </Routes>
      <BottomNav />
    </Router>
  );
}
