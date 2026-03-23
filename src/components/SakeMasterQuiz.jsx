import React, { useState } from 'react';

const questions = [
  {
    question: "哪一種酒米被譽為「酒米之王」，最適合釀造大吟釀？",
    options: ["五百萬石", "山田錦", "美山錦", "雄町"],
    correct: 1,
    explanation: "山田錦因其米芯大、蛋白質少且不易破碎，是釀造高級清酒的首選。"
  },
  {
    question: "「純米大吟釀」與「大吟釀」的主要區別是什麼？",
    options: ["精米步合不同", "釀造水質不同", "是否添加了釀造酒精", "發酵時間長短"],
    correct: 2,
    explanation: "「純米」系列嚴禁添加釀造酒精，只使用米、米麴和水。"
  },
  {
    question: "如果酒標上寫著「生酒 (Namazake)」，這代表什麼？",
    options: ["酒精度很高", "未經過加熱殺菌", "使用了野生酵母", "必須加熱飲用"],
    correct: 1,
    explanation: "生酒未經火入（加熱殺菌），保有新鮮口感，但必須全程冷藏。"
  },
  {
    question: "「精米步合 40%」代表什麼意思？",
    options: ["磨掉了 40% 的米", "剩下了 40% 的米", "含有 40% 的酒精", "發酵率為 40%"],
    correct: 1,
    explanation: "精米步合是指磨米後「剩下」的比例。40% 代表磨掉了外層 60% 的雜質。"
  },
  {
    question: "日本酒度 (SMV) 為 -5.0 的清酒，口感通常偏向？",
    options: ["極度辛口 (Extra Dry)", "淡麗清爽", "甘口 (Sweet)", "苦澀"],
    correct: 2,
    explanation: "SMV 負值越高代表殘糖量越高，口感越趨向甘口。"
  }
];

const SakeMasterQuiz = () => {
  const [currentStep, setCurrentStep] = useState('start'); // start, quiz, result
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (idx) => {
    setSelectedOption(idx);
    setShowFeedback(true);
    if (idx === questions[currentIndex].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentStep('result');
    }
  };

  const getRank = () => {
    if (score === 5) return { title: "準唎酒師", color: "text-amber-600", badge: "🏆" };
    if (score >= 3) return { title: "清酒達人", color: "text-blue-600", badge: "🍶" };
    if (score >= 1) return { title: "清酒愛好者", color: "text-green-600", badge: "🥂" };
    return { title: "清酒初學者", color: "text-slate-500", badge: "🔰" };
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-8 bg-white rounded-3xl shadow-xl border border-stone-100">
      {currentStep === 'start' && (
        <div className="text-center space-y-6">
          <div className="text-6xl">🍶</div>
          <h2 className="text-3xl font-black text-stone-800">清酒知識大挑戰</h2>
          <p className="text-stone-500">測試你的清酒造詣，獲取你的專業認證等級！</p>
          <button 
            onClick={() => setCurrentStep('quiz')}
            className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold hover:bg-stone-800 transition-all"
          >
            開始測驗
          </button>
        </div>
      )}

      {currentStep === 'quiz' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm font-bold text-stone-400">
            <span>問題 {currentIndex + 1} / {questions.length}</span>
            <span>得分: {score}</span>
          </div>
          
          <div className="h-2 bg-stone-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-amber-400 transition-all duration-500" 
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <h3 className="text-xl font-bold text-stone-800 leading-tight">
            {questions[currentIndex].question}
          </h3>

          <div className="space-y-3">
            {questions[currentIndex].options.map((opt, idx) => (
              <button
                key={idx}
                disabled={showFeedback}
                onClick={() => handleAnswer(idx)}
                className={`w-full p-4 text-left rounded-xl border-2 transition-all ${
                  showFeedback 
                    ? idx === questions[currentIndex].correct 
                      ? 'border-green-500 bg-green-50' 
                      : selectedOption === idx ? 'border-red-500 bg-red-50' : 'border-stone-100 opacity-50'
                    : 'border-stone-100 hover:border-stone-900 hover:bg-stone-50'
                }`}
              >
                <span className="font-medium">{opt}</span>
              </button>
            ))}
          </div>

          {showFeedback && (
            <div className="mt-6 p-4 bg-stone-900 text-white rounded-xl animate-in fade-in slide-in-from-bottom-4">
              <p className="text-sm opacity-80 mb-2">
                {selectedOption === questions[currentIndex].correct ? "✅ 正確！" : "❌ 答錯了..."}
              </p>
              <p className="text-sm leading-relaxed">{questions[currentIndex].explanation}</p>
              <button 
                onClick={nextQuestion}
                className="mt-4 w-full py-2 bg-white text-stone-900 rounded-lg font-bold text-sm"
              >
                {currentIndex === questions.length - 1 ? "查看結果" : "下一題"}
              </button>
            </div>
          )}
        </div>
      )}

      {currentStep === 'result' && (
        <div className="text-center space-y-8 py-6">
          <div className="relative inline-block">
            <div className="text-8xl mb-4">{getRank().badge}</div>
            <div className="absolute -bottom-2 -right-2 bg-amber-400 text-white text-xs font-black px-2 py-1 rounded-full shadow-lg">
              LEVEL UP!
            </div>
          </div>
          
          <div>
            <p className="text-stone-500 font-bold uppercase tracking-widest text-sm">你的認證等級</p>
            <h2 className={`text-5xl font-black mt-2 ${getRank().color}`}>
              {getRank().title}
            </h2>
          </div>

          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <p className="text-stone-600">你在 {questions.length} 題中答對了 <span className="font-black text-stone-900 text-xl">{score}</span> 題。</p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={() => {
                setCurrentStep('start');
                setCurrentIndex(0);
                setScore(0);
              }}
              className="flex-1 py-4 border-2 border-stone-900 text-stone-900 rounded-xl font-bold hover:bg-stone-50 transition-all"
            >
              重新挑戰
            </button>
            <button 
              className="flex-1 py-4 bg-stone-900 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              onClick={() => window.print()}
            >
              分享證書
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SakeMasterQuiz;
