import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import LoginModal from './components/LoginModal';
import SecurityPanel from './components/SecurityPanel';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [user, setUser] = useState(null);
  const [protocolActive, setProtocolActive] = useState(false);

  const toggleProtocol = () => setProtocolActive(!protocolActive);

  const handleLogin = (name) => {
    setUser(name);
    setProtocolActive(true);
  };

  const handleLogout = () => {
    setUser(null);
    setProtocolActive(false);
    setShowSecurity(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-700 ${protocolActive ? 'bg-slate-950' : 'bg-white'}`}>
      
      {protocolActive && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          <div className="w-full h-[1px] bg-blue-500/50 shadow-[0_0_15px_blue] animate-scan"></div>
        </div>
      )}

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />

      <Navbar 
        protocolActive={protocolActive} 
        user={user} 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onLogout={handleLogout}
        onToggleSecurity={() => setShowSecurity(!showSecurity)}
        isSecurityOpen={showSecurity}
      />
      
      <main className="pt-20"> {/* Navbar uchun joy qoldirildi */}
        {showSecurity ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <SecurityPanel protocolActive={protocolActive} user={user} />
          </div>
        ) : (
          <div className="animate-in fade-in duration-500">
            <Hero protocolActive={protocolActive} onActivate={toggleProtocol} user={user} />
            <Services protocolActive={protocolActive} />
            <Contact protocolActive={protocolActive} />
          </div>
        )}
      </main>

      <footer className={`py-10 text-center border-t ${protocolActive ? 'border-slate-800 text-slate-600' : 'border-slate-100 text-slate-400'}`}>
        <p className="text-xs font-black tracking-[0.3em] uppercase">
          DASS PROTOCOL CORE v1.0 // STATUS: {protocolActive ? 'ENCRYPTED' : 'IDLE'}
        </p>
      </footer>
    </div>
  );
}

export default App;