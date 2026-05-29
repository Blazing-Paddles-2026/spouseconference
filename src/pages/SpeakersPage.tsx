import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const speakers = [
  {
    tag: 'Adventure Therapy',
    name: 'Hunter Harris, LPC',
    org: 'Bonfire Counseling',
    bio: 'Owner/operator of Bonfire Counseling, specializing in Adventure Therapy, Training, and retreats for First Responders. Hunter uses hands-on experiences to facilitate learning, growth, and healing. He will lead engaging activities designed to strengthen resiliency in firefighter marriages — an active skill-building experience to help couples thrive.',
    image: '/images/speaker-hunter.jpg',
    session: 'Resilience in Real Life',
  },
  {
    tag: 'Communication',
    name: 'Irina Alexander & Jen Hardy',
    org: 'The Academy of MotivAction\u00AE',
    bio: 'CEO Irina Alexander and COO Jen Hardy help high-stress professionals and their loved ones restore human connection through training, mentorship, and practical tools. They\'re bringing "Crafting Conversations That Connect" — simple, powerful shifts to reduce misunderstandings, build trust, and strengthen connection where it matters most.',
    image: '/images/speaker-irina-jen.jpg',
    session: 'Conversations That Matter',
  },
  {
    tag: 'Financial Planning',
    name: 'Jeff Paull',
    org: 'Financial Advisor',
    bio: 'With over 20 years of experience in financial services, Jeff is committed to helping clients achieve peace of mind and long-term financial security. He specializes in guiding public service professionals through personalized financial strategies, ensuring the client, spouse, and family are well-protected and confident in their financial future.',
    image: '/images/speaker-jeff.png',
    session: 'Secure Your Future, Together',
  },
  {
    tag: 'Self-Care & Wellness',
    name: 'John Patterson',
    org: 'Chaplain, Round Rock Fire Department',
    bio: 'John Patterson has served as Fire Chaplain since 2019, offering spiritual leadership and care to firefighters and their families. He is passionate about ensuring firefighters are supported as whole people — spiritually, emotionally, relationally, and physically. John believes deeply that with faith-centered care and intentional support, firefighters can finish their careers stronger and more connected than when they began.',
    image: '/images/speaker-john.jpg',
    session: 'The Power of Self-Care',
  },
];

export default function SpeakersPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Nav */}
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

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/nsc-hero-website.png)' }}>
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
          <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4">2026 National Spouse Conference</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Meet Our Speakers</h1>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-4" />
          <p className="text-sm text-white/50 max-w-lg mx-auto">Industry leaders and experts sharing real-world insights and actionable strategies for fire service families.</p>
        </div>
      </section>

      {/* Speakers */}
      <section className="py-10 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {speakers.map((s, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="grid sm:grid-cols-[200px_1fr] gap-6 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
                  <div className="bg-white p-2">
                    <div className="aspect-[3/4] bg-neutral-100 overflow-hidden">
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover object-top" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                  </div>
                  <div className="p-5 sm:py-5 sm:pr-6 sm:pl-0">
                    <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-wider mb-3">
                      {s.tag}
                    </span>
                    <h2 className="text-xl font-bold text-white mb-0.5">{s.name}</h2>
                    <p className="text-orange-500/80 text-xs font-semibold mb-1">{s.org}</p>
                    <p className="text-white/40 text-xs mb-3">Session: <span className="text-white/60">{s.session}</span></p>
                    <p className="text-white/45 text-xs leading-relaxed">{s.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-neutral-950">
        <FadeIn className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-white mb-2">Join Us in <span className="text-orange-500">Round Rock</span></h2>
          <p className="text-white/40 text-xs mb-5">Learn from these incredible speakers and strengthen your fire family.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-4 text-xs rounded-full">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
            <a href="mailto:info@roundrockfirefoundation.org?cc=info@roundrockfirefoundation.org">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-6 py-4 rounded-full bg-transparent text-xs"><Mail className="mr-2 h-4 w-4" /> Contact</Button>
            </a>
          </div>
        </FadeIn>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-sm mx-auto px-4 text-center">
          <a href="#/" className="text-white/25 text-xs hover:text-orange-500 transition-colors">&larr; Back to National Spouse Conference</a>
        </div>
      </footer>
    </div>
  );
}
