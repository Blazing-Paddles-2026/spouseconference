import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight, Flame, Heart, Users, Brain, Shield,
  MessageCircle, Target, Lightbulb, HandHeart, Star,
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

const trainingModules = [
  {
    icon: Flame,
    title: 'Forcible Entry',
    desc: 'Work together to breach doors and barriers — learning the physical demands and teamwork required in emergency access.',
  },
  {
    icon: Target,
    title: 'Search & Rescue',
    desc: 'Navigate smoke-filled environments together, building trust and communication under simulated emergency conditions.',
  },
  {
    icon: Shield,
    title: 'Vehicle Extrication',
    desc: 'Experience the precision and coordination of extricating victims from vehicles — a powerful perspective shift.',
  },
  {
    icon: Star,
    title: 'Rappelling',
    desc: 'Face fears together and build confidence as you learn rope rescue techniques side by side.',
  },
];

const wellnessTopics = [
  { title: 'Stress Management Techniques', desc: 'Learn proven methods for managing the chronic stress that comes with fire service life. From mindfulness practices to breathing exercises.' },
  { title: 'Building Personal Resilience', desc: 'Develop the emotional strength needed to weather the storms of this lifestyle. Understand how resilience works and create sustainable habits.' },
  { title: 'Self-Care Without Guilt', desc: 'Permission to prioritize yourself isn\'t selfish — it\'s essential. Explore practical ways to maintain your physical health and emotional balance.' },
  { title: 'Holistic Health Approaches', desc: 'Discover how nutrition, movement, sleep, and social connection work together to support your overall wellness.' },
];

const supportFeatures = [
  {
    title: 'Small Group Discussions',
    desc: 'Limited to 8-12 participants, these intimate gatherings create safe, confidential environments where authentic conversation flourishes.',
    topics: ['Managing shift-related stress', 'Navigating career transitions', 'Handling critical incident aftermath', 'Maintaining your own identity'],
  },
  {
    title: 'Expert-Led Workshops',
    desc: 'Facilitated by experienced fire service spouses and mental health professionals who specialize in first responder family dynamics.',
    topics: ['Communication strategies', 'Boundary setting', 'Secondary trauma recognition', 'Building resilience in your relationship'],
  },
];

export default function ConferenceExperiencePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <a href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-black font-bold px-4 py-2 h-8 text-xs rounded-full transition-colors">Donate</a>
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
          <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Conference Experience</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Experience the Fire Service Life Together
          </h1>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-4" />
          <p className="text-sm text-white/50 max-w-lg mx-auto leading-relaxed">
            A transformative experience where spouses gain firsthand understanding and couples build lasting resilience.
          </p>
        </div>
      </section>

      {/* A GIFT FROM FIREFIGHTERS */}
      <section className="py-14 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">More Than a Conference</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">A Heartfelt Gift From Firefighters to Their Spouses</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-4" />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4 text-black/60 text-sm leading-relaxed">
              <p>
                The RRFF National Spouse Conference represents something far more meaningful than a typical professional development event. This is a heartfelt gift from firefighters to the partners who stand beside them through every challenge, every missed holiday, every anxious moment when a tone drops, and every proud achievement throughout their career.
              </p>
              <p>
                It&apos;s a tangible expression of gratitude, recognition, and love — a way of saying, <em className="text-black font-medium">&ldquo;I see you, I appreciate you, and I want you to understand my world.&rdquo;</em>
              </p>
              <p>
                When firefighters bring their spouses to this conference, they&apos;re offering an invitation into a world that&apos;s often difficult to explain. The camaraderie of the firehouse, the adrenaline of emergency response, the weight of responsibility, the bonds forged through shared danger — these realities become vivid and tangible through the conference experience.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
              <div className="border border-black/10 rounded-2xl p-5">
                <Heart className="h-5 w-5 text-orange-500 mb-3" />
                <h3 className="font-bold text-black text-sm mb-2">Understanding Their World</h3>
                <p className="text-black/40 text-xs leading-relaxed">Experience firsthand what drives your firefighter&apos;s passion and commitment to serving the community, even when it means personal sacrifice.</p>
              </div>
              <div className="border border-black/10 rounded-2xl p-5">
                <Users className="h-5 w-5 text-orange-500 mb-3" />
                <h3 className="font-bold text-black text-sm mb-2">Building Deeper Connection</h3>
                <p className="text-black/40 text-xs leading-relaxed">Shared experiences create common ground for conversations and understanding that strengthen your relationship in lasting ways.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* HANDS-ON TRAINING */}
      <section className="py-14 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Hands-On Training Activities</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Train Side-by-Side in Real Scenarios</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-white/45 text-sm max-w-md mx-auto">
              Firefighters will guide and train their spouses through realistic fire service scenarios, offering a powerful new perspective on the job.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {trainingModules.map((m, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="border border-white/10 rounded-2xl p-5 hover:border-orange-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3">
                    <m.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{m.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WELLNESS TRAINING */}
      <section className="py-14 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Wellness Training</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">Thriving Together in Fire Service Life</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-black/45 text-sm max-w-md mx-auto">
              The fire service places extraordinary demands not just on firefighters, but on their entire family system. These aren&apos;t generic self-care tips — they&apos;re targeted strategies for the real challenges you face.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {wellnessTopics.map((t, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="border border-black/10 rounded-2xl p-5 hover:border-orange-500/40 transition-colors">
                  <Brain className="h-5 w-5 text-orange-500 mb-3" />
                  <h3 className="font-bold text-black text-sm mb-2">{t.title}</h3>
                  <p className="text-black/40 text-xs leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-6 text-center max-w-lg mx-auto">
              <p className="text-black/40 text-xs italic">
                <em className="text-black font-medium">You can&apos;t pour from an empty cup</em> — investing in your own wellness is one of the most powerful gifts you can give your entire family.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SUPPORT PROGRAMMING */}
      <section className="py-14 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-8">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Support Programming</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Built For Fire Families</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-white/45 text-sm max-w-md mx-auto">
              No one truly understands the fire service lifestyle like someone who lives it alongside you. Our support programming creates sacred spaces for authentic connection.
            </p>
          </FadeIn>

          <div className="space-y-6 max-w-2xl mx-auto">
            {supportFeatures.map((f, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {i === 0 ? <MessageCircle className="h-5 w-5 text-orange-500" /> : <Lightbulb className="h-5 w-5 text-orange-500" />}
                    <h3 className="font-bold text-white text-base">{f.title}</h3>
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed mb-4">{f.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {f.topics.map((t, ti) => (
                      <div key={ti} className="flex items-start gap-2">
                        <HandHeart className="h-3 w-3 text-orange-500 mt-0.5 shrink-0" />
                        <p className="text-white/50 text-xs">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white text-black">
        <FadeIn className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-black mb-2">Ready to Experience It Together?</h2>
          <p className="text-black/45 text-sm mb-5">Join us for an unforgettable weekend of growth, connection, and resilience.</p>
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
