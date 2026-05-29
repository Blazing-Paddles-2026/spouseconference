import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Mail, Clock, Facebook, Instagram, Send, Check,
  ArrowRight,
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

const subjects = [
  'General Inquiry',
  'Registration Questions',
  'Sponsorship Opportunities',
  'Speaking/Presenting',
  'Hotel & Accommodations',
  'Other',
];

export default function ContactPage() {
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const subject = `NSC Contact Form: ${data.subject} - ${data.name}`;
    const body = `Name: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone || 'N/A'}%0ASubject: ${data.subject}%0A%0AMessage:%0A${data.message}`;
    window.location.href = `mailto:info@roundrockfirefoundation.org?cc=info@roundrockfirefoundation.org&subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
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
            </div>
          </div>
        </nav>

        <section className="min-h-[80vh] flex items-center justify-center pt-20">
          <FadeIn className="max-w-md mx-auto px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Message Ready to Send!</h2>
            <p className="text-white/50 text-sm mb-4">
              Your email has been created with all your details. Hit send and our team will get back to you within 24-48 hours.
            </p>
            <p className="text-orange-500 text-xs font-medium mb-6">info@roundrockfirefoundation.org</p>
            <a href="#/">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-4 rounded-full text-xs">Back to Conference</Button>
            </a>
          </FadeIn>
        </section>
      </div>
    );
  }

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
      <section className="relative min-h-[45vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/nsc-hero-website.png)' }}>
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
          <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Get In Touch</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Contact Us</h1>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-4" />
          <p className="text-sm text-white/50 max-w-lg mx-auto leading-relaxed">
            Have questions about the conference? We&apos;re here to help! Send us a message and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="py-14 bg-white text-black">
        <div className="max-w-2xl mx-auto px-4">
          <div className="grid md:grid-cols-[1fr_280px] gap-10">
            {/* Form */}
            <FadeIn>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-black text-xs font-semibold mb-1.5 block">Your Name *</Label>
                  <Input id="name" name="name" required className="border-black/15 text-black text-sm rounded-lg h-10" placeholder="Full name" />
                </div>

                <div>
                  <Label htmlFor="email" className="text-black text-xs font-semibold mb-1.5 block">Email Address *</Label>
                  <Input id="email" name="email" type="email" required className="border-black/15 text-black text-sm rounded-lg h-10" placeholder="you@email.com" />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-black text-xs font-semibold mb-1.5 block">Phone Number <span className="text-black/30 font-normal">(Optional)</span></Label>
                  <Input id="phone" name="phone" type="tel" className="border-black/15 text-black text-sm rounded-lg h-10" placeholder="(555) 123-4567" />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-black text-xs font-semibold mb-1.5 block">Subject *</Label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full h-10 px-3 rounded-lg border border-black/15 text-black text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
                  >
                    <option value="">Select a topic...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-black text-xs font-semibold mb-1.5 block">Your Message *</Label>
                  <Textarea id="message" name="message" required className="border-black/15 text-black text-sm rounded-lg min-h-[120px]" placeholder="How can we help you?" />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-3.5 rounded-full text-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
              </form>
            </FadeIn>

            {/* Sidebar Info */}
            <FadeIn delay={0.1}>
              <div className="space-y-5">
                <div className="border border-black/10 rounded-2xl p-5">
                  <Mail className="h-5 w-5 text-orange-500 mb-2" />
                  <h3 className="font-bold text-black text-sm mb-1">Email Us</h3>
                  <a href="mailto:info@roundrockfirefoundation.org?cc=info@roundrockfirefoundation.org" className="text-orange-500 text-xs hover:underline">
                    info@roundrockfirefoundation.org
                  </a>
                </div>

                <div className="border border-black/10 rounded-2xl p-5">
                  <Clock className="h-5 w-5 text-orange-500 mb-2" />
                  <h3 className="font-bold text-black text-sm mb-1">Response Time</h3>
                  <p className="text-black/40 text-xs">We typically respond within 24-48 hours during business days.</p>
                </div>

                <div className="border border-black/10 rounded-2xl p-5">
                  <h3 className="font-bold text-black text-sm mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-orange-500 hover:underline">
                      <ArrowRight className="h-3 w-3" />
                      Register Now
                    </a>
                    <a href="#/sponsorship" className="flex items-center gap-2 text-xs text-orange-500 hover:underline">
                      <ArrowRight className="h-3 w-3" />
                      Become a Sponsor
                    </a>
                  </div>
                </div>

                <div className="border border-black/10 rounded-2xl p-5">
                  <h3 className="font-bold text-black text-sm mb-3">Follow Us</h3>
                  <p className="text-black/40 text-xs mb-3">Stay updated on conference news and announcements.</p>
                  <div className="flex gap-2">
                    <a href="https://www.facebook.com/profile.php?id=61559803493887" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all group">
                      <Facebook className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/rrffspouseconference/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all group">
                      <Instagram className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
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
