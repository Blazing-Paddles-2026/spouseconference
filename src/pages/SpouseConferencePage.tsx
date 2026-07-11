import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  Clock, Users, Flame, HandHeart, Brain, GraduationCap,
  Calendar, MapPin, Star, Quote, Heart,
  MessageCircle, ShieldCheck, PiggyBank, UserCheck, Timer,
  CloudRain, MessagesSquare, Baby, TrendingUp, Network,
  Mail, Facebook, Instagram, ArrowRight, UsersRound,
  ChevronLeft,
} from 'lucide-react';

/* ─── Data ─── */
const faqSections = [
  {
    category: 'Registration & Eligibility',
    items: [
      { q: 'Who can attend the conference?', a: 'The National Spouse Conference is designed for firefighters and their spouses or partners. Whether you are a career or volunteer firefighter, newly married or have been together for decades, this conference is for you.' },
      { q: 'When and where is the conference?', a: 'November 6-8, 2026 at the Tru by Hilton, 2900 Hoppe Trail, Round Rock, TX 78681. Check-in begins at 5:00 PM on Thursday, November 5, 2026.' },
      { q: "What's included in registration?", a: 'Registration includes all conference sessions, hands-on training activities, meals during the conference, welcome bag, and access to all wellness programming and social events.' },
      { q: 'Is there a payment plan option?', a: 'Yes! We offer flexible payment plans to make attendance accessible. Contact us to discuss payment plan options that work for your budget.' },
      { q: 'Is a deposit required? What are the payment options?', a: 'A deposit secures your spot with the balance due closer to the event. We accept all major credit cards and can arrange payment plans upon request.' },
      { q: 'What is your cancellation and refund policy?', a: 'Full refunds are available up to 60 days before the event. Partial refunds may be available between 30-60 days. Within 30 days, registrations are transferable but non-refundable.' },
    ],
  },
  {
    category: 'Location, Travel & Lodging',
    items: [
      { q: 'Where is the conference held?', a: 'Tru by Hilton, 2900 Hoppe Trail, Round Rock, TX 78681. A room block is available at a discounted rate for conference attendees.' },
      { q: 'Is parking available?', a: 'Yes, complimentary parking is available at the hotel for all conference attendees.' },
    ],
  },
  {
    category: 'Conference Experience',
    items: [
      { q: 'What is the schedule format?', a: 'The conference combines hands-on training sessions, expert-led workshops, small group discussions, and social events. Each day builds on the last to create a comprehensive, immersive experience.' },
      { q: 'What makes this different from other fire service conferences?', a: 'This is the first national conference designed specifically for firefighter couples. Unlike traditional conferences that focus solely on the firefighter, we address the unique dynamics of fire service relationships through shared experiences.' },
      { q: 'Are there opportunities to connect with other fire couples?', a: 'Absolutely! We prioritize community building through small group sessions, social events, and shared training experiences designed to foster lasting connections.' },
    ],
  },
  {
    category: 'Training & Participation',
    items: [
      { q: 'Do I need to be in top physical condition to participate?', a: 'No! All activities are designed to be accessible regardless of fitness level. Participation is always optional, and we encourage attendees to engage at their comfort level.' },
      { q: 'Do I need special equipment or gear?', a: 'All specialized gear for training activities is provided. We recommend comfortable clothing and closed-toe shoes for active sessions.' },
      { q: 'What gear do we need to bring?', a: 'Just comfortable clothes suitable for light physical activity and closed-toe shoes. We provide all fire service equipment and protective gear for training sessions.' },
    ],
  },
  {
    category: 'Accessibility & Inclusion',
    items: [
      { q: 'Is the venue accessible for people with mobility needs?', a: 'Yes, the Tru by Hilton is fully ADA compliant. Please contact us in advance if you have specific accessibility needs so we can ensure the best possible experience.' },
    ],
  },
];

const speakers = [
  { tag: 'Adventure Therapy', name: 'Hunter Harris, LPC', org: 'Bonfire Counseling', bio: 'Owner/operator of Bonfire Counseling, specializing in Adventure Therapy, Training, and retreats for First Responders. Hunter uses hands-on experiences to facilitate learning, growth, and healing. He will lead engaging activities designed to strengthen resiliency in firefighter marriages — an active skill-building experience to help couples thrive.', image: '/images/speaker-hunter.jpg' },
  { tag: 'Communication', name: 'Irina Alexander & Jen Hardy', org: 'The Academy of MotivAction\u00AE', bio: 'CEO Irina Alexander and COO Jen Hardy help high-stress professionals and their loved ones restore human connection through training, mentorship, and practical tools. They\'re bringing "Crafting Conversations That Connect" — simple, powerful shifts to reduce misunderstandings, build trust, and strengthen connection where it matters most.', image: '/images/speaker-irina-jen.jpg' },
  { tag: 'Financial Planning', name: 'Jeff Paull', org: 'Financial Advisor', bio: 'With over 20 years of experience in financial services, Jeff is committed to helping clients achieve peace of mind and long-term financial security. He specializes in guiding public service professionals through personalized financial strategies, ensuring the client, spouse, and family are well-protected and confident in their financial future.', image: '/images/speaker-jeff.png' },
  { tag: 'Self-Care & Wellness', name: 'John Patterson', org: 'Chaplain, Round Rock Fire Department', bio: 'John Patterson has served as Fire Chaplain since 2019, offering spiritual leadership and care to firefighters and their families. He is passionate about ensuring firefighters are supported as whole people — spiritually, emotionally, relationally, and physically. John believes deeply that with faith-centered care and intentional support, firefighters can finish their careers stronger and more connected than when they began.', image: '/images/speaker-john.jpg' },
];

const testimonials = [
  { title: 'Life Changing Conference', quote: 'This conference has been absolutely life changing for us. I got to not only learn what he does, but he got to teach me. He was able to share his passion with me on a deeper level. We learned so much about how our brains work and how we can better our communication skills to maintain an amazing connection.', author: 'Fire Service Spouse, 2025' },
  { title: 'Understanding His World', quote: 'I now understand why he is so tired when he comes home and how hard the job actually is. I could never do this every day, so I\'m so thankful for those that choose to. This experience gave me insight into both our lives in a way nothing else could.', author: 'Spouse & Conference Participant' },
  { title: 'Stronger Communication', quote: 'The communication portion with our spouses helped me and my wife tremendously. We learned the science behind why fire families might be feeling the way they do — and real solutions to strengthen our relationship.', author: 'Firefighter Attendee' },
  { title: 'Finding Our Community', quote: 'It allowed couples to see common struggles as a fire family. Being surrounded by others who truly understand was incredibly powerful. We left feeling less alone and more equipped.', author: 'Fire Service Couple' },
  { title: 'Complete Wellness Approach', quote: 'The importance of full body health and wellness was demonstrated through the physically taxing (but SO fun!) trainings. This conference addresses every aspect of fire family life — mental, physical, and relational.', author: 'Conference Participant, 2025' },
];

const topics = [
  { icon: Timer, title: 'Managing Shift Life', desc: 'Strategies for navigating shift schedules, maintaining connection during long shifts, and creating stability in an unpredictable lifestyle.', href: '#/wellness?session=resiliency' },
  { icon: CloudRain, title: 'Secondary Trauma & Stress', desc: 'Understanding vicarious trauma, recognizing warning signs, and building personal resilience when your partner carries the weight of critical calls.', href: '#/wellness?session=resiliency' },
  { icon: MessagesSquare, title: 'Communication & Connection', desc: 'Tools for deepening relationships, navigating difficult conversations, and staying emotionally connected through the demands of fire service life.', href: '#/wellness?session=communication' },
  { icon: Baby, title: 'Parenting in the Fire Family', desc: 'Raising resilient kids when one parent is often absent, explaining the job to children, and managing the unique pressures of first responder families.', href: '#/wellness?session=chaplain' },
  { icon: TrendingUp, title: 'Financial & Career Planning', desc: 'Building financial security, understanding fire service benefits, and developing your own career path while supporting your partner\'s.', href: '#/wellness?session=selfcare' },
  { icon: Network, title: 'Building Your Support Network', desc: 'Connecting with others who truly understand, finding your tribe within the fire service community, and creating lasting peer relationships.', href: '#/conference-experience' },
];

const testimonialIcons = [Quote, Heart, MessageCircle, Users, Flame];

const videoSlides = [
  { name: 'Ashley Sneed', role: 'Fire Service Spouse', youtubeId: 't1Bib-BSwB8' },
  { name: 'Ashley Sneed', role: 'Fire Service Spouse', youtubeId: 'jQD83Vi9Hfw' },
  { name: 'Matt Sneed', role: 'Firefighter', youtubeId: 'EMMdDrn4U6E' },
  { name: 'Matt Sneed', role: 'Firefighter', youtubeId: 'LE8sFba278U' },
  { name: 'Christina Darr', role: 'Fire Service Spouse', youtubeId: 'HX7WehDWiuc' },
  { name: 'Christina Darr', role: 'Fire Service Spouse', youtubeId: 'SM7jRLx92-I' },
  { name: 'Trett Darr', role: 'Firefighter', youtubeId: '3cF6ewXsmZA' },
];

function VideoTestimonialCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const v = videoSlides[active];

  // Reset to thumbnail when switching slides
  const goTo = (idx: number) => {
    setPlaying(false);
    setActive(idx);
  };

  // Use maxresdefault for crisp 1280x720 thumbnails; fall back to hqdefault if it 404s
  const thumbSrc = `https://i.ytimg.com/vi/${v.youtubeId}/maxresdefault.jpg`;
  const fallbackThumb = `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`;

  return (
    <div className="max-w-xl mx-auto">
      {/* Video Card */}
      <div className="relative mb-5">
        <div className="relative rounded-xl overflow-hidden aspect-video bg-black">
          {playing ? (
            <>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&showinfo=0&controls=1&fs=1&disablekb=1&playsinline=1&color=white`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={`${v.name} — Testimonial`}
              />
              {/* Cover YouTube channel-name watermark (top-left) and 'Watch on YouTube' (bottom-right) with brand-colored bars */}
              {/* Top-left cover: hides the channel name overlay that appears when video starts */}
              <div className="absolute top-0 left-0 h-10 w-[55%] bg-black pointer-events-none" />
              {/* Bottom-right cover: hides the 'Watch on YouTube' button (sits above the controls bar) */}
              <div className="absolute bottom-10 right-0 h-10 w-44 bg-black pointer-events-none" />
            </>
          ) : (
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="group absolute inset-0 w-full h-full block bg-black focus:outline-none"
              aria-label={`Play testimonial from ${v.name}`}
            >
              {/* Thumbnail image — scaled up slightly to crop the YouTube
                 hqdefault letterbox bars (black bars at top/bottom of
                 hqdefault images) so we see only the face. */}
              {/* Clean full-color photo, no overlays */}
              <img
                src={thumbSrc}
                alt={`${v.name} testimonial thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).src = fallbackThumb; }}
              />
              {/* Soft bottom-only fade so the name caption stays legible */}
              <div
                className="absolute inset-x-0 bottom-0 h-2/5 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)' }}
              />
              {/* Centered play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm group-hover:bg-white/25 transition-all group-hover:scale-110 flex items-center justify-center ring-2 ring-white/60">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-0.5">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Bottom-left name + role */}
              <div className="absolute bottom-3 left-4 border-l-2 border-white/70 pl-3">
                <p className="text-white font-bold text-sm leading-tight drop-shadow">{v.name}</p>
                <p className="text-white/85 text-[10px] tracking-[0.18em] font-semibold uppercase mt-0.5 drop-shadow">{v.role}</p>
              </div>
            </button>
          )}
        </div>
        {/* Speaker caption is now shown in the overlay itself (see above) so no
           extra caption needed beneath the video. */}
      </div>

      {/* Navigation — matching original: orange circle arrows + X/7 counter */}
      <div className="flex justify-center items-center gap-3">
        <button
          onClick={() => goTo((active - 1 + videoSlides.length) % videoSlides.length)}
          className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-black/50 text-xs font-medium tabular-nums">
          {active + 1} / {videoSlides.length}
        </span>
        <button
          onClick={() => goTo((active + 1) % videoSlides.length)}
          className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-400 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 rotate-180" />
        </button>
      </div>
    </div>
  );
}

function TestimonialCarousel() {
  // Static grid layout: first testimonial spans full width, others in a 2-column grid below.
  const renderCard = (t: typeof testimonials[number], i: number, fullWidth = false) => {
    const Icon = testimonialIcons[i] || Quote;
    return (
      <FadeIn key={i} delay={i * 0.05} className="h-full">
        <div className={`bg-white rounded-xl p-6 h-full flex flex-col ${fullWidth ? '' : ''}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
              <Icon className="h-4 w-4 text-white" />
            </div>
            <h3 className="font-bold text-black text-lg sm:text-xl leading-tight">{t.title}</h3>
          </div>
          <div className="flex gap-0.5 mb-3 ml-11">
            {[...Array(5)].map((_, s) => <Star key={s} className="h-3.5 w-3.5 fill-orange-500 text-orange-500" />)}
          </div>
          <p className="text-black/75 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-2 mt-4">
            <span className="h-0.5 w-6 bg-orange-500" />
            <span className="text-orange-500 text-[11px] font-bold uppercase tracking-[0.15em]">{t.author}</span>
          </div>
        </div>
      </FadeIn>
    );
  };

  return (
    <div className="space-y-4">
      {/* Full-width first testimonial */}
      {renderCard(testimonials[0], 0, true)}

      {/* 2-column grid for the rest */}
      <div className="grid md:grid-cols-2 gap-4">
        {testimonials.slice(1).map((t, i) => renderCard(t, i + 1))}
      </div>
    </div>
  );
}

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function SpouseConferencePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = '2026 RRFF National Spouse Conference';
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.title = prevTitle;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-black text-white">


      {/* ═══ STICKY NAV ═══ */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3">
            <img src="/images/nsc-logo-white.png" alt="NSC Logo" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="font-bold text-xs text-white tracking-wide hidden sm:inline">NATIONAL SPOUSE CONFERENCE</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#/schedule" className="hidden sm:block text-white/90 text-xs hover:text-orange-500 transition-colors">Schedule</a>
            <button onClick={() => scrollToSection('speakers')} className="hidden sm:block text-white/90 text-xs hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-0 p-0">Speakers</button>
            <button onClick={() => scrollToSection('faq')} className="hidden sm:block text-white/90 text-xs hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-0 p-0">FAQs</button>
            <button onClick={() => scrollToSection('gallery')} className="hidden sm:block text-white/90 text-xs hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-0 p-0">Gallery</button>
            <a href="https://www.roundrockfirefoundation.org/" className="hidden sm:block text-white/90 text-xs hover:text-orange-500 transition-colors">RRFF Home</a>
            <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-4 py-2 h-8 text-xs rounded-full">Register</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/nsc-hero-website.png)' }}>
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/65 to-black/55" />
            <div className="absolute inset-0 bg-black/15" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <p className="text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-6">
            November 6-8, 2026 &middot; Round Rock, TX
          </p>
          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 mb-2">
            Round Rock Fire Foundation
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-orange-500">
            National Spouse Conference
          </h1>
          <p className="text-sm sm:text-base text-white/85 max-w-xl mx-auto mb-6 leading-relaxed">
            An immersive, hands-on conference designed to strengthen firefighter marriages through shared experiences, expert guidance, and lasting connections.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-5">
            <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-5 text-sm rounded-full">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
            </a>
            <button onClick={() => scrollToSection('partnership')}>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 font-medium px-8 py-5 text-sm rounded-full bg-transparent">Partner With Us</Button>
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1 text-white/80 text-xs sm:text-sm">
            <button onClick={() => scrollToSection('speakers')} className="hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-0 p-0 text-inherit">Meet Our Speakers</button>
            <span>&middot;</span>
            <a href="#/schedule" className="hover:text-orange-500 transition-colors">Schedule & Details</a>
            <span>&middot;</span>
            <button onClick={() => scrollToSection('faq')} className="hover:text-orange-500 transition-colors cursor-pointer bg-transparent border-0 p-0 text-inherit">FAQs</button>
          </div>
        </div>
      </section>

      {/* ═══ MISSION - BLACK BG ═══ */}
      <section className="py-7 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div>
              <FadeIn>
                <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Our Mission</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Empowering Fire Service Families</h2>
                <div className="w-10 h-0.5 bg-orange-500 mb-5" />
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/85 text-sm leading-relaxed mb-4">
                  The Round Rock Fire Foundation National Spouse Conference is the first national event designed specifically for the spouses of firefighters. Through immersive hands-on training and expert-led wellness programming, we create shared experiences that strengthen relationships and build lasting resilience.
                </p>
                <p className="text-white/85 text-sm leading-relaxed mb-6">
                  By bringing firefighters and their spouses together for real training scenarios, meaningful conversations, and supportive community connection, we equip fire service couples with the tools they need to thrive — both at home and on the job.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[{ icon: Users, title: 'Community Connection', desc: 'Build lasting relationships' }, { icon: Brain, title: 'Mental Wellness', desc: 'Tools for resilience' }, { icon: HandHeart, title: 'Family Support', desc: 'Strengthen bonds together' }, { icon: GraduationCap, title: 'Expert Guidance', desc: 'Learn from leaders' }].map((item, i) => (
                    <div key={i} className="flex gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                        <item.icon className="h-3.5 w-3.5 text-orange-500" />
                      </div>
                      <div>
                        <p className="font-medium text-white text-xs">{item.title}</p>
                        <p className="text-white/80 text-[11px]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['Established 2025', 'Annual National Conference', 'Firefighter-Led', 'Nationwide'].map((label, i) => (
                    <div key={i} className="border border-white/10 rounded-lg py-2.5 px-2 text-center">
                      <p className="text-orange-500 font-semibold text-[10px] uppercase tracking-wider leading-tight">{label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <div className="rounded-xl overflow-hidden border border-white/10 max-w-sm mx-auto">
                <img src="/images/rrfd-team-bw.jpg" alt="Round Rock Fire Department team" className="w-full h-auto object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ WHO WE SERVE - WHITE BG ═══ */}
      <section className="py-7 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-6">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Who We Serve</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">Built for Fire Service Couples</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-black/45 text-xs max-w-md mx-auto">Every session, every activity, every moment is designed with fire families in mind.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid md:grid-cols-2 gap-4 items-center max-w-3xl mx-auto">
              {/* Text content */}
              <div className="space-y-3">
                <p className="text-black/60 text-sm leading-relaxed">
                  This conference was created by firefighters and their spouses, for firefighters and their spouses. We know the unique challenges of shift work, the weight of trauma, and the strain it can place on a marriage.
                </p>
                <p className="text-black/60 text-sm leading-relaxed">
                  Whether you are newly married or have been together for decades, this experience is designed to help you reconnect, communicate better, and walk away stronger as a couple.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Firefighters & Spouses', 'Career & Volunteer', 'All Ranks & Stations'].map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.04] border border-black/10 text-black/65 text-[11px] font-semibold uppercase tracking-wider">
                      <span className="w-1 h-1 rounded-full bg-orange-500" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Small couple photo */}
              <div className="rounded-lg overflow-hidden border border-black/10 max-w-[200px] mx-auto">
                <img src="/images/hero-couple.jpg" alt="Firefighter couple at training" className="w-full h-auto object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SEE IT IN ACTION (Vimeo video) - BLACK BG, COMPACT ═══ */}
      <section className="py-7 bg-black border-t border-white/5">
        <div className="max-w-md mx-auto px-4">
          <FadeIn className="text-center mb-3">
            <p className="text-orange-500 font-semibold text-[10px] tracking-[0.2em] uppercase mb-1">See It In Action</p>
            <h2 className="text-base sm:text-lg font-bold text-white">Experience the Conference Through Their Eyes</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative w-full rounded-lg overflow-hidden border border-white/10 bg-black" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://player.vimeo.com/video/1164069619?title=0&byline=0&portrait=0"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Round Rock Fire Foundation National Spouse Conference"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CONFERENCE EXPERIENCE - WHITE BG ═══ */}
      <section className="py-7 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">Experience the Fire Service Life as a Couple</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-black/45 text-sm max-w-md mx-auto">A transformative experience where spouses gain firsthand understanding.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Flame, title: 'Hands-On Training Activities', desc: 'Firefighters will guide and train their spouses through forcible entry, search, vehicle extrication, rappelling, and much more, offering a powerful new perspective on fire service life.' },
              { icon: Heart, title: 'Wellness Training', desc: 'Equip couples with practical tools for stress management, resilience, and self-care — so you both can thrive together in the demanding world of fire service.' },
              { icon: UsersRound, title: 'Support Programming', desc: 'Small group discussions and expert-led workshops designed for the unique journey of fire couples — connect with others who truly understand your experience.' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <a href="#/conference-experience" className="block border border-black/10 rounded-2xl p-6 h-full hover:border-orange-500/40 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4">
                    <item.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-sm font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-black/45 text-xs leading-relaxed">{item.desc}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MENTAL HEALTH - BLACK BG ═══ */}
      <section className="py-7 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-5 items-start">
            {/* Left column - heading + intro */}
            <div>
              <FadeIn>
                <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Mental Health & Wellness</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Prioritize Your Well-Being Together</h2>
                <div className="w-10 h-0.5 bg-orange-500 mb-5" />
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-white/85 text-sm leading-relaxed mb-4">
                  Fire service life brings unique pressures that affect both partners. Our wellness programming gives couples practical tools to navigate stress, strengthen communication, and build resilience — together.
                </p>
                <div className="space-y-3">
                  {[
                    { icon: ShieldCheck, label: 'Adventure-based resilience training' },
                    { icon: MessageCircle, label: 'Communication skill-building workshops' },
                    { icon: PiggyBank, label: 'Financial planning for fire families' },
                    { icon: UserCheck, label: 'Faith-centered wellness guidance' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-3 w-3 text-orange-500" />
                      </div>
                      <p className="text-white/90 text-xs">{item.label}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            {/* Right column - 2x2 card grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: ShieldCheck, title: 'Resilience in Real Life', desc: 'Build lasting resilience with Hunter Harris', href: '#/wellness?session=resiliency' },
                { icon: MessageCircle, title: 'Conversations That Matter', desc: 'Strengthen your partnership with MotivAction', href: '#/wellness?session=communication' },
                { icon: PiggyBank, title: 'Secure Your Future', desc: 'Financial planning for fire families with Jeff Paull', href: '#/wellness?session=selfcare' },
                { icon: UserCheck, title: 'The Power of Self-Care', desc: 'Wellness guidance from Fire Chaplain John Patterson', href: '#/wellness?session=chaplain' },
              ].map((item, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <a href={item.href} className="block border border-white/10 rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors h-full">
                    <div className="w-9 h-9 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-2">
                      <item.icon className="h-4 w-4 text-orange-500" />
                    </div>
                    <h3 className="font-bold text-white text-[11px] mb-1 leading-tight">{item.title}</h3>
                    <p className="text-white/85 text-xs leading-relaxed">{item.desc}</p>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SPEAKERS - BLACK BG ═══ */}
      <section id="speakers" className="py-7 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn className="text-center mb-5">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Meet Your Presenters</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Expert Guidance from Fire Service Leaders</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-white/85 text-sm max-w-md mx-auto">Industry leaders sharing real-world insights for fire service families.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-3 items-stretch">
            {speakers.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06} className="h-full">
                <div className="border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/30 transition-colors flex h-full">
                  {/* Left - Photo */}
                  <div className="bg-white p-1.5 shrink-0">
                    <div className="w-[100px] sm:w-[120px] h-full bg-neutral-100 overflow-hidden">
                      <img src={s.image} alt={s.name} className="w-full h-full object-cover object-top" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                    </div>
                  </div>
                  {/* Right - Bio on white */}
                  <div className="bg-white flex-1 p-3 sm:p-4 flex flex-col">
                    <span className="inline-block self-start px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[9px] font-bold uppercase tracking-wider mb-2">
                      {s.tag}
                    </span>
                    <h3 className="text-xs font-bold text-black mb-0.5 leading-tight">{s.name}</h3>
                    <p className="text-orange-600 text-xs font-semibold mb-2">{s.org}</p>
                    <p className="text-black/50 text-[11px] leading-relaxed flex-1">{s.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED - WHITE BG ═══ */}
      <section className="py-7 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-5">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">What&apos;s Included</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">Everything You Need for Growth</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-black/75 text-sm max-w-md mx-auto">A comprehensive conference experience.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <a href={topic.href} className="block h-full border border-black/10 rounded-xl p-5 hover:border-orange-500/40 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 group-hover:bg-orange-500/20 transition-colors">
                    <topic.icon className="h-4 w-4 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-black text-sm mb-1.5 group-hover:text-orange-600 transition-colors">{topic.title}</h3>
                  <p className="text-black/75 text-xs leading-relaxed">{topic.desc}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VIDEO TESTIMONIALS - BLACK BG ═══ */}
      <section className="py-7 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-5">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Real Stories</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Voices from Fire Service Families</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-white/85 text-sm max-w-md mx-auto">Hear directly from conference attendees about their transformative experiences and the lasting impact on their relationships.</p>
          </FadeIn>

          <VideoTestimonialCarousel />

          <FadeIn delay={0.2}>
            <div className="text-center mt-8">
              <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-5 rounded-full text-sm">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TESTIMONIALS - DARK BG (matches landingsite design) ═══ */}
      <section className="py-8 bg-black text-white">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn className="text-center mb-6">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">What Attendees Say</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Stories That Inspire Connection</h2>
            <p className="text-white/75 text-sm max-w-xl mx-auto">Real experiences from fire service families who found strength, community, and transformation.</p>
          </FadeIn>

          <TestimonialCarousel />
        </div>
      </section>

      {/* ═══ VENUE - BLACK BG ═══ */}
      <section id="venue" className="py-7 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <FadeIn>
              <div className="rounded-xl overflow-hidden border border-white/10 max-w-sm mx-auto">
                <img src="/images/venue-training-center.jpg" alt="Round Rock Public Safety Training Center" className="w-full h-auto object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            </FadeIn>
            <div>
              <FadeIn delay={0.1}>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-semibold mb-4">
                  <Calendar className="h-3 w-3" /> Save the Date
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Join Us <span className="text-orange-500">November 6-8, 2026</span>
                </h2>
                <div className="w-10 h-0.5 bg-orange-500 mb-5" />
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="space-y-2.5 mb-6">
                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/10">
                    <MapPin className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    <div><p className="font-medium text-white text-sm">Tru by Hilton</p><p className="text-white/85 text-xs">2900 Hoppe Trail, Round Rock, TX 78681</p></div>
                  </div>
                  <div className="flex items-start gap-3 p-3.5 rounded-xl border border-white/10">
                    <Clock className="h-4 w-4 text-orange-500 mt-0.5 shrink-0" />
                    <div><p className="font-medium text-white text-sm">Check-in: 5:00 PM</p><p className="text-white/85 text-xs">Thursday, November 5, 2026</p></div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-5 rounded-full text-sm">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
                  </a>
                  <a href="#/schedule">
                    <Button variant="outline" className="border-white/25 text-white hover:bg-white/10 px-6 py-5 rounded-full bg-transparent text-sm"><Calendar className="mr-2 h-4 w-4" /> Full Schedule</Button>
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ - WHITE BG ═══ */}
      <section id="faq" className="py-8 bg-white text-black">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn className="text-center mb-5">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Got Questions?</p>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">National Spouse Conference FAQs</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-2" />
            <p className="text-black/85 text-sm">Everything you need to know</p>
          </FadeIn>

          {/* CSS columns auto-balance content height across the two columns -
             eliminates the awkward white space when one column is taller. */}
          <div className="md:columns-2 md:gap-x-8 [column-fill:_balance]">
            {faqSections.map((section, si) => (
              <FadeIn key={si} delay={si * 0.04} className="break-inside-avoid mb-6 inline-block w-full">
                <h3 className="text-orange-500 font-semibold text-sm mb-3">{section.category}</h3>
                <Accordion type="single" collapsible className="space-y-2">
                  {section.items.map((item, ii) => (
                    <AccordionItem key={ii} value={`faq-${si}-${ii}`} className="bg-white border border-black/10 rounded-xl px-4 data-[state=open]:border-orange-500/40 transition-colors">
                      <AccordionTrigger className="text-black font-medium text-left hover:no-underline py-3 text-sm gap-3">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-black/65 pb-3 text-sm leading-relaxed">{item.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-5 border border-black/10 rounded-2xl p-4 text-center max-w-md mx-auto">
              <p className="text-black font-semibold text-sm mb-1">Still have questions?</p>
              <p className="text-black/55 text-xs mb-3">Reach out to our team.</p>
              <a href="#/contact">
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-full text-sm"><Mail className="mr-2 h-4 w-4" /> Contact Us</Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA BANNER - BLACK BG ═══ */}
      <section className="py-8 bg-black">
        <div className="max-w-sm mx-auto px-4 text-center">
          <FadeIn>
            <div className="border border-white/10 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-2">Ready to Connect with Fire Families?</h2>
              <p className="text-white/85 text-xs mb-5">Join us for an unforgettable experience of growth, connection, and resilience.</p>
              <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
                <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-5 rounded-full text-sm">Register Now <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ FINAL CTA - BLACK BG ═══ */}
      <section className="py-7 bg-black">
        <FadeIn className="max-w-md mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Join Us in <span className="text-orange-500">Round Rock</span></h2>
          <p className="text-white/85 text-sm mb-6">Be part of the first national conference designed exclusively for firefighter couples.</p>
          <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
            <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-10 py-5 text-sm rounded-full">Register Now <ArrowRight className="ml-2 h-5 w-5" /></Button>
          </a>
        </FadeIn>
      </section>

      {/* ═══ SCROLLING PHOTO MARQUEE ═══ */}
      <section id="gallery" className="py-0 bg-black overflow-hidden">
        <style>{`
          @keyframes marquee-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            animation: marquee-scroll 40s linear infinite;
          }
          .marquee-track:hover {
            animation-play-state: paused;
          }
        `}</style>
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          <div className="marquee-track flex gap-4 py-4" style={{ width: 'max-content' }}>
            {/* First set of photos */}
            {[
              '/images/gallery-BBE6C938-3387-4F49-A183-34B60B7E9D76.jpg',
              '/images/gallery-A173FD4E-9633-4DCA-966C-01A718B24FD5.jpg',
              '/images/gallery-4F688D40-F6AE-473F-819D-8D4CD49B5697.jpg',
              '/images/gallery-FC4378E2-C008-4FEC-8C47-ECAAAD4512B9.jpg',
              '/images/gallery-B23462A6-51CC-4E6D-B6FC-447E699CEE90.jpg',
              '/images/gallery-BA478303-BA34-4E2F-B96D-DEC2B8469036.jpg',
              '/images/gallery-B2347142-083B-45CC-8CC5-2A09A50A826F.jpg',
              '/images/gallery-38BA5659-6942-4CD8-855B-53AB9DB04868.jpg',
              '/images/gallery-143E1361-A1E8-4384-8486-23366FFE878B.jpg',
              '/images/gallery-73AB4801-0C68-428F-9DC7-354D7A04CA6B.jpg',
              '/images/gallery-C4EBE053-B708-43AA-927D-F4DC530F5AE7.jpg',
              '/images/gallery-9D8ED385-4A46-4F2D-92AB-AEAD52A0C515.jpg',
              '/images/gallery-D9BF4DEF-4CDD-4877-9A83-1E6EC97EC6B1.jpg',
              '/images/gallery-8A8F167F-5767-4FF4-BB78-0075932C2B23.jpg',
              '/images/gallery-EF0364BF-AF6B-498F-9E59-74D25AA9E07F.jpg',
            ].map((src, i) => (
              <div key={`a-${i}`} className="w-44 h-28 rounded-lg overflow-hidden border border-white/10 shrink-0 hover:border-orange-500/40 transition-colors">
                <img src={src} alt={`Conference moment ${i + 1}`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {[
              '/images/gallery-BBE6C938-3387-4F49-A183-34B60B7E9D76.jpg',
              '/images/gallery-A173FD4E-9633-4DCA-966C-01A718B24FD5.jpg',
              '/images/gallery-4F688D40-F6AE-473F-819D-8D4CD49B5697.jpg',
              '/images/gallery-FC4378E2-C008-4FEC-8C47-ECAAAD4512B9.jpg',
              '/images/gallery-B23462A6-51CC-4E6D-B6FC-447E699CEE90.jpg',
              '/images/gallery-BA478303-BA34-4E2F-B96D-DEC2B8469036.jpg',
              '/images/gallery-B2347142-083B-45CC-8CC5-2A09A50A826F.jpg',
              '/images/gallery-38BA5659-6942-4CD8-855B-53AB9DB04868.jpg',
              '/images/gallery-143E1361-A1E8-4384-8486-23366FFE878B.jpg',
              '/images/gallery-73AB4801-0C68-428F-9DC7-354D7A04CA6B.jpg',
              '/images/gallery-C4EBE053-B708-43AA-927D-F4DC530F5AE7.jpg',
              '/images/gallery-9D8ED385-4A46-4F2D-92AB-AEAD52A0C515.jpg',
              '/images/gallery-D9BF4DEF-4CDD-4877-9A83-1E6EC97EC6B1.jpg',
              '/images/gallery-8A8F167F-5767-4FF4-BB78-0075932C2B23.jpg',
              '/images/gallery-EF0364BF-AF6B-498F-9E59-74D25AA9E07F.jpg',
            ].map((src, i) => (
              <div key={`b-${i}`} className="w-44 h-28 rounded-lg overflow-hidden border border-white/10 shrink-0 hover:border-orange-500/40 transition-colors">
                <img src={src} alt={`Conference moment ${i + 1}`} className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS - BLACK BG ═══ */}
      <section id="partnership" className="py-7 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-6">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Our Partners</p>
            <h2 className="text-xl font-bold text-white mb-2">Thank You to Our Sponsors</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-2" />
          </FadeIn>

          {/* ─── OFFICIAL MEDIA SPONSOR — CRACKYL ─── */}
          <FadeIn delay={0.1}>
            <div className="relative max-w-2xl mx-auto mb-8">
              {/* Soft gold glow echoing the CRACKYL brand palette */}
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-[#C8A24A]/25 via-orange-500/10 to-transparent blur-[2px]" aria-hidden="true" />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent px-6 py-8 sm:px-10 sm:py-9 text-center overflow-hidden">
                {/* Designation badge */}
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                  <Star className="h-3 w-3 fill-orange-500" /> Official Media Sponsor
                </span>

                {/* CRACKYL wordmark */}
                <a
                  href="https://crackylmag.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                  aria-label="CRACKYL Magazine — Official Media Sponsor (opens in a new tab)"
                >
                  <img
                    src="/images/crackyl-logo-white.svg"
                    alt="CRACKYL Magazine"
                    className="h-14 sm:h-16 w-auto mx-auto opacity-95 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </a>

                {/* Partnership line */}
                <p className="text-white/70 text-sm leading-relaxed max-w-md mx-auto mt-6">
                  CRACKYL Magazine, the national voice for firefighter lifestyle, health, and wellness, is proud to serve as the Official Media Sponsor of the RRFF National Spouse Conference.
                </p>

                <a
                  href="https://crackylmag.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-orange-500 hover:text-orange-400 text-xs font-semibold uppercase tracking-[0.15em] mt-5 transition-colors"
                >
                  Visit CRACKYL <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="border-t border-white/10 pt-8 max-w-lg mx-auto text-center">
              <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Sponsorship Opportunities</p>
              <h3 className="text-xl font-bold text-white mb-2">Partner With Purpose</h3>
              <p className="text-white/85 text-xs mb-5 max-w-sm mx-auto">From $700 to $5,000 — choose the tier that aligns with your goals and make a lasting impact on fire service families.</p>
              <a href="#/sponsorship">
                <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-8 py-5 rounded-full text-sm">View Partnership Tiers <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CLOSING BRAND STAMP - BLACK BG ═══ */}
      <section className="py-7 bg-black">
        <FadeIn className="max-w-xs mx-auto px-4 text-center">
          <img src="/images/nsc-banner-logo.png" alt="Round Rock Fire Foundation National Spouse Conference" className="w-full opacity-80" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <p className="text-white/85 text-xs uppercase tracking-widest mt-3">Built to Support Fire Service Families</p>
        </FadeIn>
      </section>

      {/* ═══ FOOTER - WHITE BG ═══ */}
      <footer className="py-7 bg-white text-black border-t border-black/10">
        <div className="max-w-sm mx-auto px-4 text-center">
          <p className="text-black font-medium text-sm mb-4">Connect With Us</p>
          <div className="flex justify-center gap-3 mb-6">
            <a href="https://www.facebook.com/profile.php?id=61559803493887" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all group">
              <Facebook className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />
            </a>
            <a href="https://www.instagram.com/rrffspouseconference/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all group">
              <Instagram className="h-4 w-4 text-black/40 group-hover:text-white transition-colors" />
            </a>
          </div>
          <p className="text-black/25 text-xs">&copy; 2026 Round Rock Fire Foundation. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
