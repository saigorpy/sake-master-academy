// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SakeFlavorMatrix from './components/SakeFlavorMatrix';
import SakeLabelDecoder from './components/SakeLabelDecoder';
import SakeMasterQuiz from './components/SakeMasterQuiz';
import { sakeData } from './data/sake-data';

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
          <Link to="/" className={location.pathname === '/' ? 'text-amber-400' : 'hover:text-amber-400 transition'}>學習中心</Link>
          <Link to="/tools" className={location.pathname === '/tools' ? 'text-amber-400' : 'hover:text-amber-400 transition'}>工具箱</Link>
          <Link to="/quiz" className={location.pathname === '/quiz' ? 'text-amber-400' : 'hover:text-amber-400 transition'}>認證測驗</Link>
        </div>
      </div>
    </nav>
  );
};

const LearningHub = () => (
  <div className="min-h-screen bg-stone-50 pb-20">
    {/* HERO */}
    <div className="bg-gradient-to-br from-stone-900 to-blue-950 text-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl font-black tracking-tighter mb-6">清酒大師學院</motion.h1>
        <p className="text-2xl text-amber-300 mb-8">從零到準唎酒師的專業學習平台</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/quiz" className="bg-amber-600 hover:bg-amber-500 transition px-10 py-4 rounded-2xl font-bold text-lg">立即參加認證測驗 →</Link>
          <Link to="/tools" className="border-2 border-white hover:bg-white hover:text-stone-900 transition px-10 py-4 rounded-2xl font-bold text-lg">開啟酒標解讀器</Link>
        </div>
      </div>
    </div>

    {/* RICE VARIETIES */}
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-black text-stone-900 mb-10 text-center">四大靈魂酒米</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sakeData.sake_rice.map(rice => (
          <motion.div key={rice.id} whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-3xl shadow-xl border border-stone-100">
            <div className="text-4xl mb-4">🌾</div>
            <h3 className="text-2xl font-bold mb-2">{rice.name} <span className="text-amber-600">— {rice.title}</span></h3>
            <p className="text-stone-600 leading-relaxed">{rice.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* FLAVOR MATRIX */}
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white rounded-3xl shadow-2xl mx-6">
      <SakeFlavorMatrix />
    </div>

    {/* CLASSIFICATIONS & YEAST */}
    <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-16">
      <div>
        <h3 className="text-3xl font-black mb-8">純米 vs 本釀造分類</h3>
        {sakeData.classifications.map(cat => (
          <div key={cat.category} className="mb-10">
            <div className="bg-amber-100 text-amber-800 px-4 py-1 inline-block rounded-full text-xs font-bold mb-4">{cat.category}</div>
            {cat.types.map(t => <div key={t.name} className="mb-4 p-5 bg-stone-50 rounded-2xl">{t.name} <span className="text-stone-400">({t.polishing_rate})</span></div>)}
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

    <div className="text-center">
      <Link to="/tools" className="inline-block bg-stone-900 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition">探索更多工具 →</Link>
    </div>
  </div>
);

const ToolsPage = () => (
  <div className="bg-stone-50 min-h-screen py-12">
    <div className="max-w-6xl mx-auto px-6">
      <h1 className="text-5xl font-black text-center mb-4">清酒工具箱</h1>
      <p className="text-center text-stone-500 mb-12">點擊酒標漢字，解開風味密碼</p>
      <SakeLabelDecoder />
      <div className="h-16" />
      <SakeFlavorMatrix />
    </div>
  </div>
);

export default function App() {
  return (
    <Router basename="/sake-master-academy">
      <Nav />
      <Routes>
        <Route path="/" element={<LearningHub />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/quiz" element={<SakeMasterQuiz />} />
      </Routes>
    </Router>
  );
}
