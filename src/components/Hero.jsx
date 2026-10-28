export default function Hero({ protocolActive, onActivate, level }) {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className={`inline-block mb-6 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${protocolActive ? 'bg-green-500/20 text-green-400' : 'bg-blue-100 text-blue-600'}`}>
          STATUS: {level} XAVFSIZLIK
        </div>

        <h1 className={`text-6xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tighter transition-colors ${protocolActive ? 'text-white' : 'text-slate-900'}`}>
          {protocolActive ? 'DASS' : 'RAQAMLI'} <br /> 
          <span className={protocolActive ? 'text-green-500' : 'text-blue-600'}>
            {protocolActive ? 'PROTECTED' : 'HIMOYA'}
          </span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onActivate}
            className={`px-10 py-4 rounded-xl font-bold text-lg transition-all active:scale-95 shadow-2xl ${
              protocolActive 
              ? 'bg-green-600 hover:bg-green-500 text-white shadow-green-500/20' 
              : 'bg-slate-900 hover:bg-black text-white'
            }`}
          >
            {protocolActive ? 'PROTOKOLNI TO\'XTATISH' : 'PROTOKOLNI YOQISH'}
          </button>
        </div>
      </div>
    </section>
  );
}