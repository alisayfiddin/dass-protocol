import { useState } from 'react';
import { ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/solid';

export default function Contact({ protocolActive }) {
  const [email, setEmail] = useState('');
  const [isEncrypting, setIsEncrypting] = useState(false);
  const [encryptedData, setEncryptedData] = useState('');

  const handleEncryptAndSend = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsEncrypting(true);
    
    // DASS shifrlash simulyatsiyasi
    setTimeout(() => {
      const secretKey = "DASS_CORE_";
      const encrypted = btoa(secretKey + email).split('').reverse().join('');
      setEncryptedData(encrypted);
      setIsEncrypting(false);
      setEmail('');
    }, 2000);
  };

  return (
    <section id="contact" className={`py-24 px-6 transition-colors duration-500 ${protocolActive ? 'bg-slate-950' : 'bg-white'}`}>
      <div className={`max-w-4xl mx-auto rounded-[3rem] p-8 md:p-16 text-center shadow-2xl relative overflow-hidden transition-all ${protocolActive ? 'bg-blue-600' : 'bg-slate-900'}`}>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            {isEncrypting ? 'SHIFRLANMOQDA...' : 'XAVFSIZ ALOQA'}
          </h2>

          {!encryptedData ? (
            <form onSubmit={handleEncryptAndSend} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email manzilingiz" 
                className="flex-1 bg-white/10 border-2 border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-white outline-none font-medium transition-all"
                disabled={isEncrypting}
              />
              <button 
                type="submit"
                className={`px-10 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2 ${
                  isEncrypting ? 'bg-white/20 text-white cursor-not-allowed' : 'bg-white text-slate-900 hover:scale-105'
                }`}
              >
                {isEncrypting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <LockClosedIcon className="w-5 h-5" />
                    SHIFRLASH
                  </>
                )}
              </button>
            </form>
          ) : (
            <div className="bg-black/30 p-6 rounded-2xl border border-white/20 animate-pulse">
              <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                <ShieldCheckIcon className="w-6 h-6" />
                <span className="font-bold tracking-widest uppercase">DASS ENCRYPTED</span>
              </div>
              <p className="text-white font-mono break-all text-sm uppercase">
                Hash: {encryptedData}
              </p>
              <button 
                onClick={() => setEncryptedData('')}
                className="mt-4 text-white/60 text-xs hover:text-white underline"
              >
                Yangi ma'lumot yuborish
              </button>
            </div>
          )}
          
          <p className="mt-8 text-white/50 text-sm font-bold uppercase tracking-[0.2em]">
            Protokol holati: {protocolActive ? 'MAKSIMAL HIMOYA' : 'ODDIY REJIM'}
          </p>
        </div>
      </div>
    </section>
  );
}