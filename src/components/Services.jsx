import { 
  LockClosedIcon, 
  CpuChipIcon, 
  RocketLaunchIcon, 
  ArrowsPointingInIcon 
} from '@heroicons/react/24/outline';

const services = [
  {
    title: "Kiberxavfsizlik",
    desc: "Ma'lumotlaringizni tashqi hujumlardan va sizib chiqishdan 100% himoya qilamiz.",
    icon: LockClosedIcon,
  },
  {
    title: "Aqlli Algoritmlar",
    
    desc: "Biznes jarayonlarini avtomatlashtirish uchun AI va ML yechimlarini tatbiq etamiz.",
    icon: CpuChipIcon,
  },
  {
    title: "Yuqori Tezlik",
    desc: "Tizimlarimiz eng og'ir yuklamalarda ham maksimal tezlikda ishlashga moslashgan.",
    icon: RocketLaunchIcon,
  },
  {
    title: "Integratsiya",
    desc: "Mavjud tizimlaringizni yangi protocolga muammosiz va tezkor ko'chirish.",
    icon: ArrowsPointingInIcon,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">XIZMATLARIMIZ</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium">
            DASS PROTOCOL — bu shunchaki xavfsizlik emas, bu sizning raqamli kelajagingiz poydevoridir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 hover:border-blue-500 transition-all duration-300 group shadow-sm hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <item.icon className="h-6 w-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}