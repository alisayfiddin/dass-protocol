import { ShieldCheckIcon, UserCircleIcon, ArrowLeftOnRectangleIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';

export default function Navbar({ protocolActive, user, onOpenLogin, onLogout, onToggleSecurity, isSecurityOpen }) {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${
      protocolActive ? 'bg-slate-950/80 border-slate-800 backdrop-blur-md text-white' : 'bg-white/80 border-slate-100 backdrop-blur-md text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="flex items-center gap-4">
          {isSecurityOpen ? (
            <button 
              onClick={onToggleSecurity}
              className="flex items-center gap-1 text-blue-500 font-bold text-sm hover:text-blue-400 transition"
            >
              <ChevronLeftIcon className="h-5 w-5" />
              ORQAGA
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className={`h-8 w-8 ${protocolActive ? 'text-blue-500' : 'text-blue-600'}`} />
              <span className="text-2xl font-black tracking-tighter italic">DASS</span>
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={onToggleSecurity}
            className={`font-black text-xs tracking-[0.2em] uppercase transition-all ${
              isSecurityOpen ? 'text-blue-500 underline underline-offset-8' : 
              protocolActive ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-blue-600'
            }`}
          >
            Kiberxavfsizlik
          </button>
          <span className={`text-[10px] font-bold opacity-20 ${protocolActive ? 'text-white' : 'text-black'}`}>|</span>
          <a href="#" className={`font-black text-xs tracking-[0.2em] uppercase ${protocolActive ? 'text-slate-400' : 'text-slate-500'}`}>Hujjatlar</a>
        </div>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                protocolActive ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'
              }`}>
                <UserCircleIcon className="h-5 w-5" />
                <span className="font-bold text-sm uppercase">{user}</span>
              </div>
              <button 
                onClick={onLogout}
                className="p-2 hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-all rounded-lg"
                title="Chiqish"
              >
                <ArrowLeftOnRectangleIcon className="h-6 w-6" />
              </button>
            </div>
          ) : (
            <button 
              onClick={onOpenLogin}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl font-black text-xs tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
            >
              KIRISH
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}