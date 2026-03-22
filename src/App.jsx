import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Award, Wine, Clock } from 'lucide-react'
import content from './data/content.json'

const riceVarieties = [
  { name: "山田錦", desc: "酒米之王，粒大心白，香氣優雅，最適合大吟釀。", detail: "精米步合可低至 35%" },
  { name: "五百万石", desc: "北陸代表米，酒質清爽輕快，產量穩定。", detail: "適合純米酒" },
  { name: "雄町", desc: "古老品種，旨味 (Umami) 豐富，適合山廢釀造。", detail: "傳統工藝首選" },
  { name: "愛山", desc: "高級米，香氣濃郁，用於頂級吟釀。", detail: "極致香氣" }
]

const brewingSteps = [
  { step: 1, title: "精米", desc: "將米磨至指定精米步合", icon: "🌾" },
  { step: 2, title: "洗米・浸漬", desc: "清洗並浸泡米粒", icon: "💧" },
  { step: 3, title: "蒸米", desc: "蒸煮米粒令其柔軟", icon: "🍚" },
  { step: 4, title: "麴作り", desc: "培養麴菌於米上", icon: "🦠" },
  { step: 5, title: "酒母", desc: "製作酵母培養液", icon: "🧪" },
  { step: 6, title: "並行複發酵", desc: "糖化與酒精發酵同時進行", icon: "🍶" },
  { step: 7, title: "壓榨", desc: "分離清酒與酒粕", icon: "🪣" }
]

const RiceGrid = () => (
  <div className="mt-12">
    <h3 className="font-serif text-3xl text-gold mb-8 text-center">四大名米</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {riceVarieties.map((rice, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.03 }}
          className="bg-white rounded-3xl p-8 shadow border border-gold/20"
        >
          <div className="text-5xl mb-6">{rice.icon || '🌾'}</div>
          <h4 className="text-2xl font-serif text-charcoal">{rice.name}</h4>
          <p className="mt-3 text-charcoal/80">{rice.desc}</p>
          <p className="mt-4 text-gold text-sm font-medium">{rice.detail}</p>
        </motion.div>
      ))}
    </div>
  </div>
)

const BrewingTimeline = () => (
  <div className="mt-12">
    <h3 className="font-serif text-3xl text-gold mb-8 text-center">傳統釀造流程</h3>
    <div className="relative border-l-4 border-gold/30 pl-10 space-y-12">
      {brewingSteps.map((s, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-7 w-14 h-14 bg-gold text-white rounded-2xl flex items-center justify-center text-2xl shadow">
            {s.icon}
          </div>
          <div className="ml-6 bg-white p-8 rounded-3xl shadow">
            <div className="flex items-center gap-4">
              <span className="text-gold font-mono text-xl">0{s.step}</span>
              <h4 className="text-2xl font-serif">{s.title}</h4>
            </div>
            <p className="mt-4 text-charcoal/80">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const SMVVisualizer = () => {
  const [smv, setSmv] = useState(2)
  const percent = ((smv + 5) / 10) * 100
  const label = smv > 1 ? '極乾爽 (Very Dry)' : smv > 0 ? '乾爽 (Dry)' : smv < -1 ? '甘甜 (Sweet)' : '平衡 (Balanced)'

  return (
    <div className="mt-12 bg-white rounded-3xl p-10 shadow">
      <h3 className="font-serif text-3xl text-gold mb-6">日本酒度 (SMV) 視覺化</h3>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-purple-600">甘甜</span>
        <span className="font-mono text-4xl text-charcoal font-light">+{smv.toFixed(1)}</span>
        <span className="text-gold">乾爽</span>
      </div>
      <div className="relative h-6 bg-gradient-to-r from-purple-400 via-white to-gold rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-charcoal"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        />
      </div>
      <p className="mt-6 text-xl font-medium text-center">{label}</p>
      <input
        type="range"
        min="-5"
        max="5"
        step="0.1"
        value={smv}
        onChange={(e) => setSmv(parseFloat(e.target.value))}
        className="w-full mt-8 accent-gold"
      />
      <p className="text-sm text-center mt-8 text-charcoal/60">拖動滑桿體驗 SMV 對口感的影響</p>
    </div>
  )
}

export default function App() {
  const [currentLevelId, setCurrentLevelId] = useState(null)
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0)

  const currentLevel = content.levels.find(l => l.id === currentLevelId)
  const currentChapter = currentLevel?.chapters[currentChapterIndex]

  const selectLevel = (id) => {
    setCurrentLevelId(id)
    setCurrentChapterIndex(0)
  }

  const goBack = () => {
    setCurrentLevelId(null)
    setCurrentChapterIndex(0)
  }

  // Special components by chapter
  let special = null
  if (currentLevelId === 'level_1' && currentChapterIndex === 0) special = <RiceGrid />
  if (currentLevelId === 'level_2' && currentChapterIndex === 0) special = <BrewingTimeline />
  if (currentLevelId === 'level_3' && currentChapterIndex === 1) special = <SMVVisualizer />

  return (
    <>
      {!currentLevelId ? (
        // Dashboard
        <div className="min-h-screen bg-cream py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-7xl font-serif tracking-tight text-charcoal">Sake Master Academy</h1>
            <p className="text-2xl text-charcoal/70 mt-4">清酒大師學院</p>
            <div className="grid md:grid-cols-3 gap-8 mt-20">
              {content.levels.map((level, i) => (
                <motion.div
                  key={level.id}
                  whileHover={{ y: -12 }}
                  onClick={() => selectLevel(level.id)}
                  className="group bg-white rounded-3xl p-10 shadow-xl border border-gold/30 hover:border-gold cursor-pointer transition-all"
                >
                  <div className="mx-auto w-20 h-20 bg-gold/10 rounded-2xl flex items-center justify-center mb-8">
                    {i === 0 && <BookOpen size={48} className="text-gold" />}
                    {i === 1 && <Wine size={48} className="text-gold" />}
                    {i === 2 && <Award size={48} className="text-gold" />}
                  </div>
                  <h2 className="font-serif text-3xl text-charcoal">{level.title}</h2>
                  <p className="mt-6 text-charcoal/70 leading-relaxed">{level.description}</p>
                  <div className="mt-10 text-gold font-medium flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                    開始學習 <span>→</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        // Learning Interface
        <div className="min-h-screen bg-cream flex flex-col lg:flex-row">
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-80 bg-white border-b lg:border-r border-charcoal/10 p-8 lg:p-10">
            <button
              onClick={goBack}
              className="flex items-center gap-3 text-charcoal/70 hover:text-charcoal mb-10"
            >
              <ArrowLeft size={20} /> 返回儀表板
            </button>

            <h2 className="font-serif text-3xl">{currentLevel.title}</h2>
            <p className="text-sm text-charcoal/60 mt-2">{currentLevel.description}</p>

            <div className="mt-12">
              <div className="uppercase tracking-widest text-xs text-gold mb-4">課程章節</div>
              <div className="space-y-1">
                {currentLevel.chapters.map((ch, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentChapterIndex(idx)}
                    className={`w-full text-left p-5 rounded-2xl transition-all ${idx === currentChapterIndex
                      ? 'bg-gold text-white'
                      : 'hover:bg-charcoal/5'
                    }`}
                  >
                    {ch.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 p-8 lg:p-16 max-w-3xl">
            <motion.div
              key={currentChapterIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h1 className="font-serif text-5xl text-charcoal">{currentChapter.title}</h1>
                <div className="text-gold font-mono text-sm">
                  {currentChapterIndex + 1} / {currentLevel.chapters.length}
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-charcoal/80 leading-relaxed text-xl">
                {currentChapter.content}
              </div>

              {special}
            </motion.div>
          </div>
        </div>
      )}
    </>
  )
}
