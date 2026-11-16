import { useEffect, useState } from 'react';
import { CalendarPlus, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  REGISTRATION_OPENS, REGISTRATION_OPENS_LABEL, REGISTRATION_URL,
  REGISTRATION_ICS, REGISTRATION_GCAL, isRegistrationOpen, registrationDatePassed,
} from '@/lib/conference';

function parts(ms: number) {
  const s = Math.max(0, Math.floor(ms / 1000));
  return { days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
}

export default function RegistrationCountdown() {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => { const t = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(t); }, []);

  if (isRegistrationOpen(now)) {
    return (
      <div id="save-the-date" className="mx-auto max-w-md rounded-2xl border border-orange-500/50 bg-black/60 backdrop-blur-sm p-5 text-center">
        <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Registration Is Open</p>
        <a href={REGISTRATION_URL} target="_blank" rel="noopener noreferrer">
          <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-5 text-sm rounded-full">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
        </a>
      </div>
    );
  }

  if (registrationDatePassed(now)) {
    return (
      <div id="save-the-date" className="mx-auto max-w-md rounded-2xl border border-orange-500/40 bg-black/55 backdrop-blur-sm p-5 text-center">
        <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Registration Opening Soon</p>
        <p className="text-white/85 text-sm">The 2027 registration form is on its way. Check back here shortly.</p>
      </div>
    );
  }

  const p = parts(REGISTRATION_OPENS.getTime() - now);
  const tiles: [number, string][] = [[p.days, 'Days'], [p.hours, 'Hours'], [p.minutes, 'Minutes'], [p.seconds, 'Seconds']];
  return (
    <div id="save-the-date" className="mx-auto max-w-lg rounded-2xl border border-orange-500/40 bg-black/55 backdrop-blur-sm px-4 py-5 sm:px-6">
      <p className="text-orange-500 font-semibold text-[11px] sm:text-xs tracking-[0.22em] uppercase mb-1">Registration Opens</p>
      <p className="text-white font-bold text-lg sm:text-xl mb-4">{REGISTRATION_OPENS_LABEL}</p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-4" role="timer" aria-label={`Time until registration opens on ${REGISTRATION_OPENS_LABEL}`}>
        {tiles.map(([n, label]) => (
          <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] py-2.5 sm:py-3">
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums leading-none">{String(n).padStart(2, '0')}</div>
            <div className="mt-1.5 text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/70">{label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/80">
        <span className="inline-flex items-center gap-1.5"><CalendarPlus className="h-3.5 w-3.5 text-orange-500" /> Get a reminder:</span>
        <a href={REGISTRATION_ICS} download className="hover:text-orange-500 underline underline-offset-4 decoration-white/30">Apple / Outlook</a>
        <a href={REGISTRATION_GCAL} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 underline underline-offset-4 decoration-white/30">Google Calendar</a>
      </div>
    </div>
  );
}
