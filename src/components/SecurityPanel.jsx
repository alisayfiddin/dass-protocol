import { ShieldCheckIcon, CpuChipIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function SecurityPanel({ protocolActive, user }) {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-blue-600 rounded-2xl">
            <ShieldCheckIcon className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-slate-900 uppercase">Kiberxavfsizlik Markazi</h2>
            <p className="text-slate-500 font-medium">DASS PROTOCOL real vaqt rejimi</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* IP Manzil Kartasi */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <GlobeAltIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest">Sizning IP</h3>
            <p className="text-2xl font-black text-slate-900 mt-2">192.168.1.105</p>
            <div className="mt-4 flex items-center gap-2 text-green-500 font-bold text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              ALOQA XAVFSIZ
            </div>
          </div>

          {/* Tizim Holati */}
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
            <CpuChipIcon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest">Tizim Yuklamasi</h3>
            <p className="text-2xl font-black text-slate-900 mt-2">14% CPU Usage</p>
            <div className="mt-4 w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full w-[14%]"></div>
            </div>
          </div>

          {/* Xavf Darajasi */}
          <div className={`p-8 rounded-[2rem] border transition-all duration-500 ${protocolActive ? 'bg-blue-600 border-blue-500' : 'bg-red-50 border-red-100'}`}>
            <ShieldCheckIcon className={`h-10 w-10 mb-4 ${protocolActive ? 'text-white' : 'text-red-600'}`} />
            <h3 className={`font-bold text-xs uppercase tracking-widest ${protocolActive ? 'text-blue-200' : 'text-red-400'}`}>Xavf Darajasi</h3>
            <p className={`text-2xl font-black mt-2 ${protocolActive ? 'text-white' : 'text-red-600'}`}>
              {protocolActive ? 'MINIMAL' : 'YUQORI XAVF'}
            </p>
            <p className={`mt-2 text-sm font-medium ${protocolActive ? 'text-blue-100' : 'text-red-400'}`}>
              {protocolActive ? 'DASS Protokoli faol' : 'Himoya o\'chirilgan!'}
            </p>
          </div>
        </div>

        {/* Loglar oynasi */}
        <div className="mt-10 bg-slate-900 rounded-[2rem] p-8 font-mono text-sm">
          <h4 className="text-slate-500 mb-4 font-bold border-b border-slate-800 pb-2 uppercase tracking-tighter">System Activity Logs</h4>
          <div className="space-y-2">
            <p className="text-green-400">[OK] DASS Kernel Initialized...</p>
            <p className="text-blue-400">[INFO] User "{user || 'Guest'}" session started.</p>
            {protocolActive ? (
              <p className="text-yellow-400 animate-pulse">[SCAN] Real-time monitoring active...</p>
            ) : (
              <p className="text-red-500">[WARN] Security protocol is disabled!</p>
            )}
            <p className="text-slate-600">  _ Ready for commands</p>
          </div>
        </div>
      </div>
    </section>
  );
}