import { useState, useEffect } from 'react';

export default function TastingNoteForm() {
  const [note, setNote] = useState({
    brand: '',
    temp: '15°C',
    rating: 5,
    memo: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('sakeTastingNotes');
    if (saved) setNote(JSON.parse(saved));
  }, []);

  const save = () => {
    localStorage.setItem('sakeTastingNotes', JSON.stringify(note));
    alert('✅ 品飲筆記已儲存！下次打開工具箱仍會保留');
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl">
      <h3 className="text-2xl font-black mb-6">即時品飲筆記</h3>
      <input 
        type="text" 
        placeholder="酒名 / 品牌" 
        value={note.brand} 
        onChange={e => setNote({...note, brand: e.target.value})} 
        className="w-full p-4 border rounded-2xl mb-4"
      />
      <select 
        value={note.temp} 
        onChange={e => setNote({...note, temp: e.target.value})} 
        className="w-full p-4 border rounded-2xl mb-4"
      >
        <option>5°C（雪冷）</option><option>10°C（花冷）</option><option>15°C</option>
        <option>20°C（常溫）</option><option>40°C（ぬる燗）</option><option>50°C（熱燗）</option>
      </select>
      <div className="flex gap-2 mb-4">
        {[1,2,3,4,5].map(n => (
          <button key={n} onClick={() => setNote({...note, rating: n})} className={`text-3xl ${note.rating >= n ? 'text-amber-500' : 'text-stone-300'}`}>★</button>
        ))}
      </div>
      <textarea 
        placeholder="品飲心得..." 
        value={note.memo} 
        onChange={e => setNote({...note, memo: e.target.value})} 
        className="w-full p-4 border rounded-2xl h-32 mb-6"
      />
      <button onClick={save} className="w-full bg-amber-600 text-white py-5 rounded-2xl font-bold text-lg">儲存這次品飲</button>
    </div>
  );
}