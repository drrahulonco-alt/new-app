import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calendar, 
  ClipboardCheck, 
  Sun, 
  BookOpen, 
  Settings, 
  ChevronLeft, 
  AlertTriangle,
  Info
} from 'lucide-react';
import { TRANSLATIONS, DETAILS } from './constants';
import { Language, TreatmentSetup, Translation } from './types';

// Utility to merge tailwind classes
const cn = (...classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');

function SectionTitle({ label }: { label: string }) {
  return (
    <h3 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 px-1">{label}</h3>
  );
}

function LegendItem({ color, label }: { color: string, label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="w-2.5 h-2.5 rounded-sm" style={{ backgroundColor: color }} />
      <span className="text-[10px] font-medium text-gray-500">{label}</span>
    </div>
  );
}

function AppointmentCard({ type, title, time, sub, hospital, active = true }: { type: 'rt' | 'ch' | 'alert', title: string, time?: string, sub: string, hospital?: string, active?: boolean }) {
  if (!active && type !== 'alert') return null;

  return (
    <div className={cn(
      "p-4 rounded-2xl border-l-4 border shadow-sm transition-all animate-in fade-in slide-in-from-bottom-2",
      type === 'rt' && "bg-white border-l-[#4C3FC1] border-gray-100",
      type === 'ch' && "bg-[#E3F2FD]/30 border-l-[#1565C0] border-[#E3F2FD]",
      type === 'alert' && "bg-red-50 border-l-red-500 border-red-100"
    )}>
      <div className="flex justify-between items-start mb-1">
        <h4 className={cn("text-sm font-bold", type === 'alert' ? "text-red-900" : "text-gray-900")}>
          {type === 'alert' && <AlertTriangle size={14} className="inline mr-1.5 -mt-0.5" />}
          {title} {time && `— ${time}`}
        </h4>
      </div>
      <p className={cn("text-[11px] leading-snug font-medium", type === 'alert' ? "text-red-700" : "text-gray-500")}>
        {hospital && <span className="text-gray-600 block mb-0.5">{hospital}</span>}
        {sub}
      </p>
    </div>
  );
}

interface SymptomCardProps {
  name: string;
  icon: string;
  key?: string | number;
}

function SymptomCard({ name, icon }: SymptomCardProps) {
  const [level, setLevel] = useState<number | null>(null);

  const colors = [
    "bg-teal-50 text-teal-800 border-teal-500",
    "bg-amber-50 text-amber-800 border-amber-500",
    "bg-orange-50 text-orange-800 border-orange-500",
    "bg-red-50 text-red-800 border-red-500"
  ];

  return (
    <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center gap-3">
      <span className="text-3xl">{icon}</span>
      <div className="text-center space-y-0.5">
        <span className="text-xs font-bold block leading-tight">{name}</span>
      </div>
      <div className="flex gap-1 w-full">
        {([0, 1, 2, 3] as const).map((v) => (
          <button
            key={v}
            onClick={() => setLevel(v)}
            className={cn(
              "flex-1 py-2 text-[10px] font-bold rounded-lg transition-all border",
              level === v 
                ? colors[v]
                : "bg-gray-50 text-gray-400 border-transparent hover:bg-gray-100"
            )}
          >
            {v === 3 ? '3+' : v}
          </button>
        ))}
      </div>
    </div>
  );
}

function InputGroup({ label, children, small, icon }: { label: string, children: ReactNode, small?: boolean, icon?: ReactNode }) {
  return (
    <div className="space-y-2">
      <label className={cn("flex items-center gap-1.5 font-bold text-gray-700", small ? "text-[10px] uppercase tracking-wide" : "text-xs")}>
        {icon}
        {label}
      </label>
      {children}
    </div>
  );
}

function NavBtn({ icon, label, active, onClick }: { icon: ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex-1 flex flex-col items-center gap-1 py-1 transition-all rounded-xl",
        active ? "text-[#4C3FC1]" : "text-gray-400"
      )}
    >
      <span className={cn("transition-transform duration-300", active && "scale-110")}>{icon}</span>
      <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
    </button>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState('schedule');
  const [setup, setSetup] = useState<TreatmentSetup>(() => {
    const saved = localStorage.getItem('saathi_setup');
    return saved ? JSON.parse(saved) : {
      name: '',
      total: '30',
      done: '0',
      site: 'head-neck',
      chemoday: 'none',
      hospital: '',
      rttime: '09:30',
      chtime: '11:00'
    };
  });
  const [detailKey, setDetailKey] = useState<string | null>(null);

  const t: Translation = TRANSLATIONS[lang];

  useEffect(() => {
    if (!setup.name && activeTab !== 'setup') {
      setActiveTab('setup');
    }
  }, [setup.name, activeTab]);

  const saveSetup = (newSetup: TreatmentSetup) => {
    setSetup(newSetup);
    localStorage.setItem('saathi_setup', JSON.stringify(newSetup));
    setActiveTab('schedule');
  };

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return t.greeting_morning;
    if (h < 17) return t.greeting_afternoon;
    return t.greeting_evening;
  };

  const totalFX = parseInt(setup.total) || 30;
  const doneFX = parseInt(setup.done) || 0;
  const progressPct = Math.min(100, Math.round((doneFX / totalFX) * 100));
  const currentWeek = Math.ceil((doneFX + 1) / 5) || 1;
  const totalWeeks = (totalFX / 5).toFixed(1);

  return (
    <div className="min-h-screen bg-[#F4F4F8] text-[#1a1a2e] font-sans flex flex-col max-w-md mx-auto relative overflow-x-hidden pb-16">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#4C3FC1] to-[#6B5CE7] p-8 pt-12 text-white shrink-0">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Saathi</h1>
            <p className="text-[10px] opacity-70 mt-0.5 tracking-wider uppercase">साथी · சாத்தி · Companion</p>
          </div>
          <div className="flex gap-1.5">
            {(['en', 'ta', 'hi'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2.5 py-1 rounded-full border border-white/40 text-[10px] font-bold transition-all",
                  lang === l ? "bg-white text-[#4C3FC1] border-white" : "hover:bg-white/10"
                )}
              >
                {l === 'en' ? 'EN' : l === 'ta' ? 'த' : 'हि'}
              </button>
            ))}
          </div>
        </div>

        <p className="text-sm opacity-90 mb-4">{getGreeting()}, {setup.name || 'Patient'}</p>
        
        <div className="bg-white/20 rounded-full h-1.5 overflow-hidden mb-2">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            className="h-full bg-white rounded-full"
          />
        </div>
        <div className="flex justify-between text-[10px] opacity-80 font-medium">
          <span>{t.progress}</span>
          <span>{t.week_label} {currentWeek} {t.of} {totalWeeks} · {progressPct}%</span>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto w-full">
        <AnimatePresence mode="wait">
          {activeTab === 'schedule' && (
            <motion.section
              key="schedule"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4"
            >
              <SectionTitle label={t.thisweek} />
              <div className="grid grid-cols-7 gap-1.5 mb-6">
                {t.day_names.map((day, i) => {
                  const todayDow = new Date().getDay(); // 0=Sun
                  const dowMap = [1, 2, 3, 4, 5, 6, 0]; // Mon=0 index -> jsDay
                  const jsDay = dowMap[i];
                  const isWeekend = i >= 5;
                  const isToday = jsDay === todayDow;
                  const chemoDay = setup.chemoday !== 'none' ? parseInt(setup.chemoday) : -1;
                  
                  let type = isWeekend ? 'rest' : 'rt';
                  if (!isWeekend && chemoDay === i) type = 'both';

                  return (
                    <div key={day} className="flex flex-col items-center gap-1.5">
                      <span className="text-[10px] font-bold text-gray-500 uppercase">{day}</span>
                      <div className={cn(
                        "w-full aspect-square rounded-full flex items-center justify-center text-[9px] font-bold border-2 transition-all",
                        type === 'rt' && "bg-[#EEF0FF] text-[#4C3FC1] border-[#B8B3F0]",
                        type === 'rest' && "bg-gray-100 text-gray-400 border-transparent",
                        type === 'both' && "bg-orange-50 text-orange-700 border-orange-200",
                        isToday && "ring-2 ring-offset-2 ring-[#4C3FC1]"
                      )}>
                        {isWeekend ? '—' : type === 'rt' ? 'RT' : 'RT+C'}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <LegendItem color="#B8B3F0" label={t.lg_rt} />
                <LegendItem color="#90CAF9" label={t.lg_ch} />
                <LegendItem color="#FFCC02" label={t.lg_both} />
                <LegendItem color="#D1D5DB" label={t.lg_rest} />
              </div>

              <SectionTitle label={t.today_appt} />
              <div className="space-y-3">
                <AppointmentCard 
                  type="rt" 
                  title={t.appt_rt} 
                  time={setup.rttime} 
                  hospital={setup.hospital}
                  sub={t.appt_rt_sub}
                  active={new Date().getDay() !== 0 && new Date().getDay() !== 6}
                />
                <AppointmentCard 
                  type="ch" 
                  title={t.appt_ch} 
                  time={setup.chtime} 
                  sub={t.appt_ch_sub}
                  active={setup.chemoday !== 'none' && (new Date().getDay() - 1 === parseInt(setup.chemoday))}
                />
                <AppointmentCard 
                  type="alert" 
                  title={t.alert_title}
                  sub={t.alert_sub}
                />
              </div>
            </motion.section>
          )}

          {activeTab === 'symptoms' && (
            <motion.section
              key="symptoms"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4"
            >
              <SectionTitle label={t.howfeel} />
              <div className="grid grid-cols-2 gap-3 mb-4">
                {t.sx.map((name, i) => (
                  <SymptomCard key={name} name={name} icon={['🗣️', '😴', '🤢', '🔥', '😮', '🍽️'][i]} />
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed italic">
                {t.gradeinfo}
              </div>
            </motion.section>
          )}

          {activeTab === 'tips' && (
            <motion.section
              key="tips"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4"
            >
              <div className="bg-gradient-to-br from-[#4C3FC1] to-[#6B5CE7] rounded-2xl p-6 text-white mb-6 shadow-lg shadow-indigo-200">
                <p className="text-base italic leading-relaxed mb-2 font-medium">
                  {t.motiv}
                </p>
                <p className="text-xs opacity-70">— {t.motivby}</p>
              </div>

              <SectionTitle label={t.tips_lbl} />
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-50 overflow-hidden">
                {t.tips.map((tip, i) => (
                  <div key={i} className="p-4 flex gap-4 items-start hover:bg-gray-50 transition-colors">
                    <span className="text-2xl pt-0.5 shrink-0">
                      {['🥣', '💧', '🫘', '🪥', '🚶'][i]}
                    </span>
                    <div className="space-y-1.5">
                      <p className="text-xs text-gray-700 leading-relaxed font-medium">{tip.t}</p>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-indigo-50 text-[#4C3FC1] text-[10px] font-bold">
                        {tip.g}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {activeTab === 'learn' && (
            <motion.section
              key="learn"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4"
            >
              {!detailKey ? (
                <div className="space-y-4">
                  <SectionTitle label={t.library} />
                  <div className="grid grid-cols-2 gap-3">
                    {t.le.map((title, i) => (
                      <button
                        key={title}
                        onClick={() => setDetailKey(['dodont', 'nutrition', 'hydration', 'taste', 'supplements', 'foodsafety'][i])}
                        className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center gap-2 active:scale-95 transition-all"
                      >
                        <span className="text-3xl">{['✅', '🥗', '💧', '👅', '💊', '🛡️'][i]}</span>
                        <span className="text-xs font-bold leading-tight">{title}</span>
                        <span className="text-[9px] text-[#4C3FC1] font-bold tracking-tight">Tap to read →</span>
                      </button>
                    ))}
                  </div>
                  <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4 text-center">
                    <p className="text-[10px] text-teal-800 font-medium whitespace-pre-line">
                      {t.silverline}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <button 
                    onClick={() => setDetailKey(null)}
                    className="flex items-center gap-2 text-sm font-bold text-[#4C3FC1]"
                  >
                    <ChevronLeft size={18} />
                    Back to Library
                  </button>
                  <div className="prose prose-sm prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: DETAILS[detailKey] }} />
                </div>
              )}
            </motion.section>
          )}

          {activeTab === 'setup' && (
            <motion.section
              key="setup"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="p-4 pb-12"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900">{t.setup_title}</h2>
                <p className="text-xs text-gray-500 mt-1">{t.setup_sub}</p>
              </div>

              <div className="space-y-5">
                <InputGroup label={t.lbl_name} icon={<Info size={14} />}>
                  <input 
                    type="text" 
                    value={setup.name}
                    onChange={(e) => setSetup({...setup, name: e.target.value})}
                    placeholder="e.g. Meena"
                    className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm transition-all"
                  />
                </InputGroup>

                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Total fractions" small>
                    <input 
                      type="number" 
                      value={setup.total}
                      onChange={(e) => setSetup({...setup, total: e.target.value})}
                      className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm"
                    />
                  </InputGroup>
                  <InputGroup label="Fractions done" small>
                    <input 
                      type="number" 
                      value={setup.done}
                      onChange={(e) => setSetup({...setup, done: e.target.value})}
                      className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm"
                    />
                  </InputGroup>
                </div>

                <InputGroup label={t.lbl_site}>
                  <select 
                    value={setup.site}
                    onChange={(e) => setSetup({...setup, site: e.target.value})}
                    className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm appearance-none"
                  >
                    <option value="head-neck">Head & Neck</option>
                    <option value="breast">Breast</option>
                    <option value="cervix">Cervix / Gynaecology</option>
                    <option value="lung">Lung</option>
                    <option value="rectal">Rectum / Abdomen</option>
                    <option value="prostate">Prostate</option>
                    <option value="other">Other</option>
                  </select>
                </InputGroup>

                <InputGroup label={t.lbl_chemoday}>
                  <select 
                    value={setup.chemoday}
                    onChange={(e) => setSetup({...setup, chemoday: e.target.value})}
                    className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm appearance-none"
                  >
                    <option value="none">{t.no_chemo}</option>
                    {t.week_days.map((day, i) => (
                      <option key={day} value={i}>{day}</option>
                    ))}
                  </select>
                </InputGroup>

                <InputGroup label={t.lbl_hospital}>
                  <input 
                    type="text" 
                    value={setup.hospital}
                    onChange={(e) => setSetup({...setup, hospital: e.target.value})}
                    placeholder="e.g. SilverLine Hospital"
                    className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm"
                  />
                </InputGroup>

                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="RT Time" small>
                    <input 
                      type="time" 
                      value={setup.rttime}
                      onChange={(e) => setSetup({...setup, rttime: e.target.value})}
                      className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm"
                    />
                  </InputGroup>
                  <InputGroup label="Chemo Time" small>
                    <input 
                      type="time" 
                      value={setup.chtime}
                      onChange={(e) => setSetup({...setup, chtime: e.target.value})}
                      className="w-full p-4 bg-white rounded-xl border-2 border-gray-100 focus:border-[#4C3FC1] outline-none text-sm"
                    />
                  </InputGroup>
                </div>

                <button 
                  onClick={() => saveSetup(setup)}
                  className="w-full py-5 bg-[#4C3FC1] text-white rounded-2xl font-bold tracking-wide active:scale-[0.98] transition-all shadow-lg shadow-indigo-100 mt-4"
                >
                  {t.btn_save}
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  {t.privacy}
                </p>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-between px-2 py-3 max-w-md mx-auto z-50">
        <NavBtn icon={<Calendar size={20} />} label={t.nav[0]} active={activeTab === 'schedule'} onClick={() => setActiveTab('schedule')} />
        <NavBtn icon={<ClipboardCheck size={20} />} label={t.nav[1]} active={activeTab === 'symptoms'} onClick={() => setActiveTab('symptoms')} />
        <NavBtn icon={<Sun size={20} />} label={t.nav[2]} active={activeTab === 'tips'} onClick={() => setActiveTab('tips')} />
        <NavBtn icon={<BookOpen size={20} />} label={t.nav[3]} active={activeTab === 'learn'} onClick={() => { setActiveTab('learn'); setDetailKey(null); }} />
        <NavBtn icon={<Settings size={20} />} label={t.nav[4]} active={activeTab === 'setup'} onClick={() => setActiveTab('setup')} />
      </nav>
    </div>
  );
}
