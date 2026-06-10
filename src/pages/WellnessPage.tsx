import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Brain, MessageCircle, Heart, Shield,
  Check, Sparkles,
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

const sessions = [
  {
    id: 'resiliency',
    icon: Brain,
    tag: 'Resiliency Session',
    title: 'Build Lasting Resilience',
    speaker: 'Hunter Harris, LPC',
    org: 'Bonfire Counseling',
    description: 'Fire service life brings unique challenges — unpredictable schedules, high-stress calls, and the emotional weight that comes home with your firefighter. Learn proven strategies to build resilience that lasts.',
    topics: [
      { title: 'Understanding Stress Response', desc: 'Learn how chronic stress affects you physically and emotionally, and discover practical techniques to regulate your nervous system.' },
      { title: 'Adapting to Change', desc: 'Develop the mental flexibility to handle unpredictable schedules, life transitions, and the demands of first responder family life.' },
      { title: 'Building Your Resilience Toolkit', desc: 'Walk away with practical, actionable strategies you can use immediately to strengthen your mental and emotional wellbeing.' },
    ],
    outcomes: [
      'Tools to manage stress in healthy, sustainable ways',
      'Strategies for bouncing back from difficult experiences',
      'A personalized resilience action plan',
      'Connection with others facing similar challenges',
      'Greater confidence in navigating fire service life',
    ],
  },
  {
    id: 'communication',
    icon: MessageCircle,
    tag: 'Communication & Connection',
    title: 'Conversations That Matter',
    speaker: 'Jen Hardy & Irina Alexander',
    org: 'The Academy of MotivAction',
    description: 'Join Jen and Irena from MotivAction for an interactive session on strengthening your partnership. Learn practical communication tools to deepen connection, navigate conflict, and stay emotionally close through the demands of fire service life.',
    topics: [
      { title: 'Active Listening', desc: 'Move beyond hearing to truly understanding. Practice reflective listening techniques that make your partner feel seen and valued.' },
      { title: 'Conflict Resolution', desc: 'Learn fair fighting techniques, de-escalation strategies, and how to navigate disagreements without damaging your relationship.' },
      { title: 'Emotional Expression', desc: 'Create space for vulnerability and authentic sharing. Learn to express needs, fears, and feelings in healthy, constructive ways.' },
      { title: 'Nonverbal Cues', desc: 'Recognize body language, tone, and facial expressions that communicate beyond words — especially after difficult shifts.' },
      { title: 'Difficult Conversations', desc: 'Approach sensitive topics with courage and compassion — from mental health concerns to career changes and family planning.' },
      { title: 'Connection Rituals', desc: 'Build daily and weekly rituals that prioritize emotional connection despite unpredictable schedules and competing demands.' },
    ],
    outcomes: [
      'Stronger communication builds trust and deepens intimacy',
      'Practical tools for navigating conflict constructively',
      'Greater emotional awareness and expression',
      'Connection rituals you can implement immediately',
    ],
  },
  {
    id: 'selfcare',
    icon: Heart,
    tag: 'Self-Care Session',
    title: 'Self-Care Isn\'t Selfish',
    speaker: 'Conference Wellness Team',
    org: 'National Spouse Conference',
    description: 'You can\'t pour from an empty cup. Taking care of yourself isn\'t just important — it\'s essential for showing up fully for your partner, your family, and yourself.',
    topics: [
      { title: 'Physical Wellbeing', desc: 'Movement, nutrition, sleep, and body awareness — strategies that fit the fire service lifestyle.' },
      { title: 'Mental Clarity', desc: 'Tools for managing the mental load of supporting a first responder, from mindfulness to boundary setting.' },
      { title: 'Energy Management', desc: 'Learn to protect and replenish your energy throughout the week — especially during high-stress shifts and life transitions.' },
      { title: 'Self-Care Resources', desc: 'Prioritize your wellbeing with practical tools and strategies that fit your lifestyle, values, and needs.' },
    ],
    outcomes: [
      'A personalized self-care plan that fits the fire service lifestyle',
      'Practical tools for managing energy and preventing burnout',
      'Permission to prioritize yourself without guilt',
      'Resources for ongoing wellness support',
    ],
  },
  {
    id: 'chaplain',
    icon: Shield,
    tag: 'Chaplain Session',
    title: 'The Power of Self-Care',
    speaker: 'John Patterson',
    org: 'Chaplain, Round Rock Fire Department',
    description: 'John Patterson has served as Fire Chaplain since 2019, offering spiritual leadership and care to firefighters and their families. Explore spiritual resilience and support systems for navigating the unique challenges of fire service life.',
    topics: [
      { title: 'Spiritual Resilience', desc: 'Discover how faith and spiritual practices can strengthen your ability to weather the unique challenges of fire service life.' },
      { title: 'Whole-Person Support', desc: 'Explore what it means to be supported as a whole person — spiritually, emotionally, relationally, and physically.' },
      { title: 'Faith-Centered Care', desc: 'Learn how intentional, faith-centered support can help firefighters finish their careers stronger and more connected than when they began.' },
      { title: 'Community & Connection', desc: 'Build meaningful connections within the fire service community and discover the strength that comes from shared faith and experience.' },
    ],
    outcomes: [
      'Greater spiritual resilience for fire family challenges',
      'Tools for whole-person wellness and support',
      'Deeper connection to faith-centered resources',
      'A renewed sense of purpose and strength',
    ],
  },
];

// Map URL session params/anchors to session index
const sessionParamMap: Record<string, number> = {
  resiliency: 0,
  resilience: 0,
  communication: 1,
  conversations: 1,
  selfcare: 2,
  'self-care': 2,
  financial: 2, // legacy alias (was financial in old landing site)
  chaplain: 3,
  leadership: 3, // legacy alias
  faith: 3,
};

function getSessionFromUrl(): number {
  if (typeof window === 'undefined') return 0;
  const hash = window.location.hash; // e.g. "#/wellness?session=resiliency" or "#/wellness#resiliency"
  // Try query param first: ?session=name
  const qMatch = hash.match(/[?&]session=([^&#]+)/i);
  if (qMatch) {
    const key = decodeURIComponent(qMatch[1]).toLowerCase();
    if (key in sessionParamMap) return sessionParamMap[key];
  }
  // Try sub-hash: /wellness#resiliency
  const hMatch = hash.match(/#\/wellness#([a-zA-Z-]+)/i);
  if (hMatch) {
    const key = hMatch[1].toLowerCase();
    if (key in sessionParamMap) return sessionParamMap[key];
  }
  return 0;
}

export default function WellnessPage() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSession, setActiveSession] = useState(() => getSessionFromUrl());

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update active session if the URL changes (e.g. user clicks another link)
    const onHash = () => setActiveSession(getSessionFromUrl());
    window.addEventListener('hashchange', onHash);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const s = sessions[activeSession];

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
            <a href="https://www.roundrockfirefoundation.org/" className="hidden sm:block text-white/60 text-xs hover:text-orange-500 transition-colors">RRFF Home</a>
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
          <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Mental Health & Wellness</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Build Resilience That Lasts
          </h1>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-4" />
          <p className="text-sm text-white/50 max-w-lg mx-auto leading-relaxed">
            Expert-led wellness sessions provide practical strategies for thriving in fire service life.
          </p>
        </div>
      </section>

      {/* SESSION NAV */}
      <section className="py-6 bg-white text-black border-b border-black/10">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-2">
              {sessions.map((sess, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSession(i)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all ${activeSession === i ? 'bg-orange-500 text-white' : 'bg-black/5 text-black/50 hover:bg-black/10 hover:text-black'}`}
                >
                  <sess.icon className="h-3 w-3" />
                  {sess.tag}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ACTIVE SESSION DETAIL */}
      <section className="py-14 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn key={activeSession}>
            <div className="text-center mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-wider mb-3">
                <s.icon className="h-3 w-3" />
                {s.tag}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{s.title}</h2>
              <p className="text-orange-500/80 text-sm font-semibold">{s.speaker}</p>
              <p className="text-white/35 text-xs">{s.org}</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-white/50 text-sm leading-relaxed text-center">{s.description}</p>
            </div>
          </FadeIn>

          {/* Topics */}
          <div className="max-w-2xl mx-auto mb-10">
            <h3 className="text-white font-bold text-sm mb-4 text-center">What You&apos;ll Learn</h3>
            <div className="space-y-3">
              {s.topics.map((t, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.05}>
                  <div className="border border-white/10 rounded-xl p-4 hover:border-orange-500/30 transition-colors">
                    <h4 className="font-bold text-white text-sm mb-1">{t.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{t.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <FadeIn delay={0.3}>
            <div className="max-w-lg mx-auto border border-orange-500/20 rounded-2xl p-6 bg-orange-500/[0.02]">
              <h3 className="text-orange-500 font-bold text-sm mb-4 text-center flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4" />
                What You&apos;ll Gain
              </h3>
              <div className="space-y-2">
                {s.outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                    <p className="text-white/50 text-xs leading-relaxed">{o}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ALL SESSIONS OVERVIEW */}
      <section className="py-14 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Explore All Sessions</p>
            <h2 className="text-2xl font-bold text-black mb-3">Four Pillars of Wellness</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sessions.map((sess, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <button
                  onClick={() => { setActiveSession(i); window.scrollTo({ top: 400, behavior: 'smooth' }); }}
                  className={`w-full border rounded-2xl p-5 text-left transition-all ${activeSession === i ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-orange-500/40'}`}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mb-3">
                    <sess.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-black text-xs mb-1">{sess.tag}</h3>
                  <p className="text-black/55 text-xs leading-relaxed">{sess.speaker}</p>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-black">
        <FadeIn className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Invest in Your Wellness Together</h2>
          <p className="text-white/45 text-sm mb-5">These sessions are designed specifically for the unique challenges fire service families face.</p>
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
