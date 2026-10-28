import { useState } from 'react';
import { LockClosedIcon, UserIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function LoginModal({ isOpen, onClose, onLogin }) {
  const [userNameInput, setUserNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [status, setStatus] = useState('idle');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (passwordInput !== 'dass2024') {
      alert("XAVFSIZLIK OGOHLANTIRISHI: Maxfiy kalit noto'g'ri!");
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onLogin(userNameInput);
        onClose();
        setStatus('idle');
      }, 1000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
        
        {/* Muvaffaqiyatli kirish ekrani */}
        {status === 'success' && (
          <div className="absolute inset-0 bg-blue-600 flex flex-col items-center justify-center z-10">
            <ShieldCheckIcon className="h-16 w-16 text-white animate-bounce" />
            <h2 className="text-white text-2xl font-black mt-4 uppercase text-center px-4">Ruxsat Berildi</h2>
          </div>
        )}

        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">DASS ACCESS</h2>
          <p className="text-slate-500 font-medium text-sm">Protokol tizimiga kirish</p>
        </div>

        <form onSubmit={handleLoginSubmit} className="space-y-4">
          <div className="relative">
            <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Foydalanuvchi nomi" 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 font-bold"
              value={userNameInput}
              onChange={(e) => setUserNameInput(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <LockClosedIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="password" 
              placeholder="Maxfiy kalit" 
              className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 font-bold"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
          </div>
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-2xl font-black tracking-widest transition-all active:scale-95 disabled:opacity-50"
          >
            {status === 'loading' ? 'AUTENTIFIKATSIYA...' : 'KIRISH'}
          </button>
        </form>

        <button onClick={onClose} className="w-full mt-6 text-slate-400 font-bold text-xs hover:text-slate-600 transition-colors uppercase tracking-widest">
          Bekor qilish
        </button>
      </div>
    </div>
  );
}