import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Clock, MapPin, Calendar, Users,
  Flame, MessageCircle, Brain, Heart, Star, Utensils,
} from 'lucide-react';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const scheduleDays = [
  {
    day: 'Friday',
    date: 'November 6',
    theme: 'Orientation + Shared Foundation',
    icon: Users,
    sessions: [
      {
        time: '9:00 AM - 12:00 PM',
        period: 'Morning',
        items: [
          { title: 'Conference Welcome & Orientation', desc: 'Meet fellow fire couples from across the nation and learn what to expect throughout the weekend' },
          { title: 'Public Safety Training Center Tour', desc: 'Get familiar with the facility where you\'ll train together over the next three days' },
        ],
      },
      {
        time: '1:00 PM - 5:30 PM',
        period: 'Afternoon',
        items: [
          { title: 'Hands-On Training Session', desc: 'Begin training together as couples in realistic fire service scenarios designed to build communication and teamwork' },
          { title: 'Resiliency Session with Hunter Harris', desc: 'Learn practical resiliency strategies specifically designed for fire service families' },
        ],
      },
      {
        time: '6:00 PM',
        period: 'Evening',
        items: [
          { title: 'Free Time / Dinner on Your Own', desc: 'Enjoy dinner on your own and rest up for a full day of training tomorrow. Explore Round Rock restaurants or relax at the hotel.' },
        ],
      },
    ],
  },
  {
    day: 'Saturday',
    date: 'November 7',
    theme: 'Skill Development + Real-Time Practice',
    icon: Flame,
    sessions: [
      {
        time: '8:00 AM - 12:00 PM',
        period: 'Morning',
        items: [
          { title: 'Hands-On Training Scenarios', desc: 'Continue building skills through immersive training exercises that strengthen couple communication under pressure' },
          { title: 'Communication & Connection Workshop', desc: 'Interactive session with MotivAction facilitators Jen & Irena focusing on practical communication strategies for fire families' },
        ],
      },
      {
        time: '12:00 PM - 1:30 PM',
        period: 'Midday',
        items: [
          { title: 'Working Lunch: Retirement Preparation', desc: 'Expert guidance from Jeff Paull on financial planning, transition strategies, and preparing for life after the fire service' },
        ],
      },
      {
        time: '1:30 PM - 6:00 PM',
        period: 'Afternoon',
        items: [
          { title: 'Advanced Training Scenarios', desc: 'Put morning\'s communication skills into practice through challenging, real-world fire service scenarios' },
          { title: 'Chaplain Session: Spiritual Wellness', desc: 'Explore spiritual resilience and support systems for navigating the unique challenges of fire service life' },
        ],
      },
      {
        time: '7:30 PM',
        period: 'Evening',
        items: [
          { title: 'Optional Social Gathering', desc: 'Casual get-together with other fire couples — no pressure, just connection' },
        ],
      },
    ],
  },
  {
    day: 'Sunday',
    date: 'November 8',
    theme: 'Sustainability + Leadership',
    icon: Star,
    sessions: [
      {
        time: '8:00 AM - 12:00 PM',
        period: 'Morning',
        items: [
          { title: 'Final Hands-On Training', desc: 'Capstone training session integrating all weekend skills into comprehensive scenarios' },
          { title: 'Working Lunch + Optional Leadership Session', desc: 'Learn how to launch a spouse conference at your own department and become a leader in fire family wellness' },
        ],
      },
      {
        time: '12:00 PM - 2:30 PM',
        period: 'Afternoon',
        items: [
          { title: 'Self-Care & Wellness Tools', desc: 'Practical self-care strategies you can implement immediately when you return home' },
          { title: 'Closing Ceremony & Next Steps', desc: 'Reflect on the weekend, celebrate your growth, and create your action plan for sustaining these skills' },
        ],
      },
      {
        time: '2:30 PM',
        period: 'Conference Concludes',
        items: [
          { title: 'Departure', desc: 'Leave equipped with practical tools, stronger connections, and a nationwide network of fire families' },
        ],
      },
    ],
  },
];

const differentiators = [
  { icon: Users, title: 'Train Together', desc: 'Couples train together, not separately' },
  { icon: Flame, title: 'Scenario-Based', desc: 'Real-world scenario-based activities' },
  { icon: MessageCircle, title: 'Real-Time Practice', desc: 'Communication skills practiced in real time' },
  { icon: Brain, title: 'Practical Tools', desc: 'Practical tools for long-term fire family wellness' },
];

export default function SchedulePage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeDay, setActiveDay] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentDay = scheduleDays[activeDay];

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3">
            <img src="/images/nsc-logo-white.png" alt="NSC Logo" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="font-bold text-xs text-white tracking-wide hidden sm:inline">NATIONAL SPOUSE CONFERENCE</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#/" className="text-white/60 text-xs hover:text-orange-500 transition-colors">Back to Conference</a>
            <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-4 py-2 h-8 text-xs rounded-full">Register</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/nsc-hero-website.png)' }}>
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
          <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4">November 6-8, 2026</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Conference Schedule</h1>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-4" />
          <p className="text-sm text-white/50 max-w-lg mx-auto leading-relaxed mb-6">
            Train Together. Grow Stronger. Every session is designed to strengthen communication, resilience, and long-term fire family sustainability.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-4 rounded-full text-xs">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className="py-6 bg-white text-black border-b border-black/10">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-1.5">
                <MapPin className="h-4 w-4 text-orange-500" />
                <p className="font-semibold text-xs">Round Rock Public Safety Training Center</p>
                <p className="text-black/40 text-[10px]">Tru by Hilton, 2900 Hoppe Trail, Round Rock, TX</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Calendar className="h-4 w-4 text-orange-500" />
                <p className="font-semibold text-xs">November 6-8, 2026</p>
                <p className="text-black/40 text-[10px]">Check-in: 5:00 PM Thursday, Nov 5</p>
              </div>
              <div className="flex flex-col items-center gap-1.5">
                <Users className="h-4 w-4 text-orange-500" />
                <p className="font-semibold text-xs">$700 per couple</p>
                <p className="text-black/40 text-[10px]">Includes hotel at Tru by Hilton</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* DAY SELECTOR */}
      <section className="py-8 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-6">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">3 Days of Transformation</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Your Weekend at a Glance</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-3 gap-2 max-w-2xl mx-auto mb-8">
              {scheduleDays.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setActiveDay(i)}
                  className={`py-3 px-2 rounded-xl text-center transition-all ${activeDay === i ? 'bg-orange-500 text-white' : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'}`}
                >
                  <p className="font-bold text-sm">{d.day}</p>
                  <p className={`text-[10px] ${activeDay === i ? 'text-white/80' : 'text-white/30'}`}>{d.date}</p>
                </button>
              ))}
            </div>
          </FadeIn>

          {/* ACTIVE DAY THEME */}
          <FadeIn delay={0.15}>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold">
                <currentDay.icon className="h-3.5 w-3.5" />
                {currentDay.theme}
              </span>
            </div>
          </FadeIn>

          {/* SCHEDULE TIMELINE */}
          <div className="max-w-2xl mx-auto">
            {currentDay.sessions.map((session, si) => (
              <FadeIn key={si} delay={si * 0.08}>
                <div className="relative pl-8 pb-8 last:pb-0">
                  {/* Timeline line */}
                  {si < currentDay.sessions.length - 1 && (
                    <div className="absolute left-[11px] top-6 bottom-0 w-px bg-white/10" />
                  )}
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center">
                    <Clock className="h-3 w-3 text-orange-500" />
                  </div>

                  <div className="mb-1">
                    <span className="text-orange-500 text-[10px] font-bold uppercase tracking-wider">{session.period}</span>
                    <span className="text-white/30 text-[10px] ml-2">{session.time}</span>
                  </div>

                  <div className="space-y-3">
                    {session.items.map((item, ii) => (
                      <div key={ii} className="border border-white/10 rounded-xl p-4 hover:border-orange-500/30 transition-colors">
                        <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                        <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-14 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Why This Works</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">What Makes This Different</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-black/45 text-sm max-w-md mx-auto">A conference experience unlike any other in the fire service.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentiators.map((d, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="border border-black/10 rounded-2xl p-5 text-center hover:border-orange-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                    <d.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-black text-sm mb-1">{d.title}</h3>
                  <p className="text-black/40 text-xs">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MEALS & LOGISTICS */}
      <section className="py-14 bg-black">
        <div className="max-w-3xl mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Logistics</p>
            <h2 className="text-2xl font-bold text-white mb-3">Meals & Dining</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="h-4 w-4 text-orange-500" />
                  <h3 className="font-bold text-white text-sm">Included Meal</h3>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">Saturday working lunch is provided during the Retirement Preparation session with Jeff Paull.</p>
              </div>
              <div className="border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-4 w-4 text-orange-500" />
                  <h3 className="font-bold text-white text-sm">Dietary Restrictions?</h3>
                </div>
                <p className="text-white/45 text-xs leading-relaxed">Please note them on your registration form. For severe allergies, email <a href="mailto:rrfdspouseconference@gmail.com?cc=info@roundrockfirefoundation.org" className="text-orange-500 hover:underline">rrfdspouseconference@gmail.com</a> at least two weeks before the conference.</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-6 border border-white/10 rounded-2xl p-5 text-center">
              <MapPin className="h-5 w-5 text-orange-500 mx-auto mb-2" />
              <h3 className="font-bold text-white text-sm mb-1">Explore Round Rock</h3>
              <p className="text-white/40 text-xs leading-relaxed max-w-sm mx-auto">All other meals are on your own. We&apos;ll provide recommendations for Round Rock&apos;s best restaurants and dining spots near your hotel.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-10 bg-white text-black">
        <FadeIn className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-black mb-2">Ready to Experience This Transformative Weekend?</h2>
          <p className="text-black/45 text-sm mb-5">Registration is open. Secure your spot today.</p>
          <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
            <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-5 rounded-full text-sm">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </a>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-sm mx-auto px-4 text-center">
          <a href="#/" className="text-white/30 text-xs hover:text-orange-500 transition-colors">&larr; Back to National Spouse Conference</a>
        </div>
      </footer>
    </div>
  );
}
