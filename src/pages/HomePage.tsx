import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowRight,
  Heart,
  Shield,
  Users,
  Calendar,
  Ticket,
  ChevronRight,
  HandHeart,
  BookOpen,
  ExternalLink,
} from 'lucide-react'

/* ─── Reusable scroll-reveal wrapper ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('animate-in')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(0,0%,4%)]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,6%)] to-[hsl(35,30%,15%)] opacity-80" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(35,25%,12%)]/30 to-transparent" />

      {/* 1884 Watermark */}
      <div className="absolute bottom-8 right-4 md:right-12 select-none pointer-events-none">
        <span className="text-[12rem] md:text-[20rem] font-light text-white/[0.03] leading-none tracking-tighter">
          1884
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal delay={100}>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-xs tracking-[0.2em] text-gold uppercase">
                  Round Rock, Texas &middot; Est. 2025
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-2">
                Round Rock
                <br />
                <span className="text-gold">Fire Foundation</span>
              </h1>
              <p className="text-white/40 text-sm tracking-[0.15em] uppercase mb-8">
                Honoring Heroes &middot; Supporting Families
              </p>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg mb-8">
                We exist to stand with Round Rock firefighters and their families
                — every day, in every way. Born from an outpouring of care after
                profound loss, RRFF builds structured, lasting support so help is
                ready before a family ever has to ask.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-[hsl(220,15%,8%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(43,75%,65%)] transition-colors inline-flex items-center gap-2"
                >
                  Become a Founding Legacy Donor
                </a>
                <Link
                  to="/get-involved"
                  className="border border-white/20 text-white px-6 py-3 rounded-full font-medium text-sm hover:border-white/40 transition-colors inline-flex items-center gap-2"
                >
                  Volunteer With Us
                </Link>
                <a
                  href="#" onClick={(e) => { e.preventDefault(); document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="text-gold text-sm inline-flex items-center gap-1 hover:underline"
                >
                  Learn Our Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </Reveal>

            {/* Why/What/How cards */}
            <Reveal delay={400}>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[hsl(0,0%,10%)]/80 border border-white/5 rounded-lg p-4">
                  <h3 className="text-gold text-sm font-semibold mb-2">Why</h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Stand with fire families through hardship, healing, and the long road that follows.
                  </p>
                </div>
                <div className="bg-[hsl(0,0%,10%)]/80 border border-white/5 rounded-lg p-4">
                  <h3 className="text-gold text-sm font-semibold mb-2">What</h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    The 1884 Fund — a dedicated emergency-relief fund launching as the Foundation grows.
                  </p>
                </div>
                <div className="bg-[hsl(0,0%,10%)]/80 border border-white/5 rounded-lg p-4">
                  <h3 className="text-gold text-sm font-semibold mb-2">How</h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    Founding Legacy Donors and community partners help launch lasting care.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right side - large 1884 visual */}
          <div className="hidden lg:flex items-center justify-center">
            <Reveal delay={300}>
              <div className="relative">
                <span className="text-[18rem] font-extralight text-white/[0.04] leading-none tracking-tighter">
                  1884
                </span>
                <div className="absolute bottom-8 right-0 text-right">
                  <p className="text-[10px] tracking-[0.2em] text-white/30 uppercase">
                    Honoring our legacy &middot; Standing with fire families
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2 bg-gold rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Mission Section ─── */
function MissionSection() {
  return (
    <section id="mission" className="bg-[hsl(40,20%,94%)] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <Reveal>
            <div>
              <span className="text-xs tracking-[0.15em] text-[hsl(220,15%,50%)] uppercase mb-4 block">
                Our Mission &middot; Why We Exist
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[hsl(220,15%,15%)] leading-tight mb-8">
                RRFF was founded
                <br />
                by fire families,
                <br />
                for fire families.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-6">
              <p className="text-[hsl(220,15%,30%)] leading-relaxed">
                After profound loss inside a Round Rock fire family, neighbors and the wider fire
                family showed up with meals, presence, and practical care that changed what we
                believed was possible. The Round Rock Fire Foundation was built to turn that
                gratitude into structure, so support does not depend on timing, circumstance, or
                knowing who to call.
              </p>
              <p className="text-[hsl(220,15%,30%)] leading-relaxed">
                Our work focuses on family integration, resilience, and long-term care —
                supporting firefighters and their loved ones from the start of their careers
                through retirement, in lasting, meaningful ways.
              </p>
              <blockquote className="border-l-2 border-[hsl(43,75%,55%)] pl-6 py-2 mt-8">
                <p className="text-[hsl(220,15%,25%)] italic text-lg leading-relaxed">
                  "When we lost our daughter, Bailey, the love and support from our fire family
                  and our community showed us what true strength looks like."
                </p>
                <cite className="text-[hsl(220,15%,45%)] text-sm not-italic mt-2 block">
                  — Wylie Brownell
                </cite>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── 1884 Fund Section ─── */
function FundSection() {
  return (
    <section id="fund" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <span className="text-xs tracking-[0.15em] text-[hsl(220,15%,50%)] uppercase mb-4 block">
              What We Do &middot; Our Signature Fund
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[hsl(220,15%,15%)] leading-tight max-w-2xl">
              The 1884 Fund — dedicated emergency relief for Round Rock fire families.
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal delay={100}>
            <div className="bg-[hsl(0,0%,4%)] rounded-xl overflow-hidden">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-5 h-5 text-gold" />
                  <span className="text-xs tracking-[0.15em] text-gold uppercase">
                    Signature Fund
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
                  The 1884 Fund
                </h3>
                <p className="text-white/60 text-sm mb-2">Emergency relief for fire families.</p>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-8">Signature fund</p>

                <div className="bg-[hsl(0,0%,10%)] rounded-lg p-6 mb-6">
                  <h4 className="text-gold text-sm font-semibold mb-2">A dedicated relief fund.</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    The 1884 Fund supports Round Rock fire families facing medical travel, care
                    needs, home repairs after disaster, financial hardship, and family crises —
                    with structure, care, and long-term purpose. Launching as the Foundation grows.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gold text-[hsl(220,15%,8%)] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[hsl(43,75%,65%)] transition-colors inline-flex items-center gap-1"
                  >
                    Help Launch the Fund
                  </a>
                  <Link
                    to="/the-1884-fund"
                    className="text-gold text-sm inline-flex items-center gap-1 hover:underline"
                  >
                    See How Your Gift Is Used <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[hsl(40,15%,96%)] rounded-xl p-8 md:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(43,75%,55%)]/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-[hsl(220,15%,20%)] font-semibold text-sm mb-1">Family Crisis Support</h4>
                    <p className="text-[hsl(220,15%,45%)] text-xs leading-relaxed">
                      Emergency assistance for families facing unexpected hardship.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(43,75%,55%)]/10 flex items-center justify-center flex-shrink-0">
                    <HandHeart className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-[hsl(220,15%,20%)] font-semibold text-sm mb-1">Medical Travel</h4>
                    <p className="text-[hsl(220,15%,45%)] text-xs leading-relaxed">
                      Travel and lodging support for out-of-area medical care.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(43,75%,55%)]/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-[hsl(220,15%,20%)] font-semibold text-sm mb-1">Home Repairs</h4>
                    <p className="text-[hsl(220,15%,45%)] text-xs leading-relaxed">
                      Disaster recovery assistance for fire families' homes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-[hsl(43,75%,55%)]/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="text-[hsl(220,15%,20%)] font-semibold text-sm mb-1">Wellness Programs</h4>
                    <p className="text-[hsl(220,15%,45%)] text-xs leading-relaxed">
                      Mental health and resilience resources for the whole family.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Events Section ─── */
function EventsSection() {
  const events = [
    {
      date: 'May 29, 2026',
      label: 'Featured Event',
      title: 'Round Rock Fire Foundation Night at Dell Diamond',
      description:
        "An inaugural community-wide tribute to Central Texas firefighters and fire families. Round Rock Express vs. Salt Lake Bees — 7:05 p.m. first pitch at Dell Diamond (3400 E. Palm Valley Blvd.).",
      promoCode: 'FIRE26',
      bullets: [
        'Pre-game fire apparatus display (Touch-A-Truck)',
        'Pipes and Drums performance',
        'Honor Guard presentation of colors',
        'Ceremonial first pitch & fire family recognition',
        'Between-innings active-duty firefighter recognition',
        'Foundation information booths',
      ],
      links: [
        { label: 'Get Tickets', href: 'https://mlb.tickets.com/?orgId=58189&agency=MILB_MPV&eventId=27339' },
        { label: 'Event Details', href: '/events/fire-foundation-night' },
      ],
      variant: 'foundation' as const,
    },
    {
      date: 'October 10, 2026',
      label: 'Signature Fundraiser',
      title: 'Blazing Paddles Pickleball Tournament',
      description:
        'A community pickleball tournament at Tejas Pickleball Club in Georgetown, TX. Sponsors, players, volunteers, and fire families gather to raise support for RRFF programs. Tournament brackets include men\'s and women\'s doubles, singles, and first responders. Registration opens June 1.',
      links: [
        { label: 'Learn More', href: 'https://pickleball.roundrockfirefoundation.org' },
        { label: 'Sponsor', href: 'https://www.roundrockfirefoundation.org/pickleballsponsor' },
      ],
      notifyMe: true,
      variant: 'default' as const,
    },
    {
      date: 'November 6–8, 2026',
      label: 'Family Support',
      title: 'RRFF National Spouse Conference',
      description:
        'A weekend for firefighter couples at the Round Rock Public Safety Training Center (2801 N Mays St). Focused on connection, resilience, and lasting care. $700 per couple — includes hotel accommodations at Tru by Hilton. Train side-by-side in hands-on scenarios.',
      links: [
        { label: 'Register', href: 'https://forms.gle/VUuMEssGe3cqP4Ge8' },
        { label: 'Event Details', href: 'https://spouseconference.roundrockfirefoundation.org/' },
      ],
      variant: 'default' as const,
    },
  ]

  return (
    <section id="events" className="bg-[hsl(40,20%,94%)] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-12">
            <span className="text-xs tracking-[0.15em] text-[hsl(220,15%,50%)] uppercase mb-4 block">
              Community Calendar &middot; Save the Dates
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[hsl(220,15%,15%)] leading-tight max-w-xl">
              Gatherings that build lasting care.
            </h2>
            <p className="text-[hsl(220,15%,40%)] mt-4 max-w-2xl text-sm leading-relaxed">
              Each RRFF gathering is its own moment — neighbors, sponsors, volunteers, and fire
              families coming together in support of The 1884 Fund. More events will be added as
              the Foundation grows.
            </p>
          </div>
        </Reveal>

        <div className="space-y-6">
          {events.map((event, i) => (
            <Reveal key={event.title} delay={i * 100}>
              <div className={`rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6 group transition-colors ${
                event.variant === 'foundation'
                  ? 'bg-[hsl(0,0%,4%)] border-2 border-[hsl(43,75%,45%)] hover:bg-[hsl(0,0%,6%)]'
                  : 'bg-[hsl(0,0%,4%)] hover:bg-[hsl(0,0%,6%)]'
              }`}>
                <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                  <Calendar className={`w-5 h-5 text-gold`} />
                  <div>
                    <span className={`text-xs font-semibold ${event.variant === 'foundation' ? 'text-gold' : 'text-gold'}`}>{event.label}</span>
                    <p className={`text-xs ${event.variant === 'foundation' ? 'text-white/50' : 'text-white/50'}`}>{event.date}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl md:text-2xl font-light mb-2 transition-colors ${event.variant === 'foundation' ? 'text-white group-hover:text-gold' : 'text-white group-hover:text-gold'}`}>
                    {event.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-3 ${event.variant === 'foundation' ? 'text-white/50' : 'text-white/50'}`}>
                    {event.description}
                  </p>
                  {'promoCode' in event && event.promoCode && (
                    <div className="mb-4 inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2">
                      <span className="text-white/50 text-xs">Use code</span>
                      <span className="text-gold font-bold text-sm tracking-wider">{event.promoCode}</span>
                    </div>
                  )}
                  {'bullets' in event && event.bullets && (
                    <ul className="mb-4 space-y-1">
                      {event.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-white/50 text-sm">
                          <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div className="flex flex-wrap gap-3">
                    {event.links.map((link, li) =>
                      link.href.startsWith('http') ? (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm inline-flex items-center gap-1 transition-colors ${
                            event.variant === 'foundation' && li === 0
                              ? 'bg-gold text-[hsl(0,0%,8%)] px-5 py-2.5 rounded-full font-semibold hover:bg-[hsl(43,75%,65%)]'
                              : 'text-gold hover:underline'
                          }`}
                        >
                          {link.label} {event.variant !== 'foundation' || li !== 0 ? <ChevronRight className="w-4 h-4" /> : null}
                        </a>
                      ) : (
                        <Link
                          key={link.label}
                          to={link.href}
                          className={`text-sm inline-flex items-center gap-1 transition-colors ${
                            event.variant === 'foundation' && li === 0
                              ? 'bg-gold text-[hsl(0,0%,8%)] px-5 py-2.5 rounded-full font-semibold hover:bg-[hsl(43,75%,65%)]'
                              : 'text-gold hover:underline'
                          }`}
                        >
                          {link.label} {event.variant !== 'foundation' || li !== 0 ? <ChevronRight className="w-4 h-4" /> : null}
                        </Link>
                      )
                    )}
                  </div>
                  {'notifyMe' in event && event.notifyMe && (
                    <form
                      action="https://formspree.io/f/xkoezqpp"
                      method="POST"
                      className="mt-4 flex gap-2"
                    >
                      <input type="hidden" name="subject" value="Notify me when Blazing Paddles registration opens" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-3 py-2 text-white text-xs focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/30"
                      />
                      <button
                        type="submit"
                        className="bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-lg text-xs font-semibold hover:bg-gold/20 transition-colors whitespace-nowrap"
                      >
                        Notify Me
                      </button>
                    </form>
                  )}
                </div>
                <div className="flex-shrink-0">
                  <Ticket className={`w-8 h-8 transition-colors text-white/10 group-hover:text-gold/30`} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Legacy Circle Section ─── */
function LegacyCircleSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <span className="text-xs tracking-[0.15em] text-[hsl(220,15%,50%)] uppercase mb-4 block">
                How to Help &middot; Legacy Circle
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-[hsl(220,15%,15%)] leading-tight mb-6">
                Be one of the first to help build lasting care.
              </h2>
              <p className="text-[hsl(220,15%,35%)] text-sm leading-relaxed mb-8">
                The Legacy Circle is an invitation to become a Founding Legacy Donor — part of
                the first group of people, families, and businesses helping launch The 1884 Fund
                and the support system fire families can count on for years to come.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    num: '01',
                    title: 'Become part of the legacy.',
                    desc: 'The first supporters of The 1884 Fund are helping establish long-term care and support for Round Rock fire families.',
                  },
                  {
                    num: '02',
                    title: 'Dedicated and structured.',
                    desc: 'The 1884 Fund is designed as a dedicated emergency-relief fund — built so support is ready before a family ever has to ask.',
                  },
                  {
                    num: '03',
                    title: 'Trusted giving pathways.',
                    desc: 'Gifts to the Round Rock Fire Foundation are made through trusted giving pathways with Central Texas Community Foundation and Network for Good. Donors receive a tax-deductible receipt.',
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="text-gold text-xs font-semibold mt-1">{item.num}</span>
                    <div>
                      <h4 className="text-[hsl(220,15%,20%)] font-semibold text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[hsl(220,15%,45%)] text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-[hsl(220,15%,8%)] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[hsl(43,75%,65%)] transition-colors inline-flex items-center gap-1"
                >
                  Become a Founding Legacy Donor
                </a>
                <Link
                  to="/the-1884-fund"
                  className="text-[hsl(220,15%,40%)] text-sm inline-flex items-center gap-1 hover:text-[hsl(220,15%,20%)] transition-colors"
                >
                  See How Your Gift Is Used <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[hsl(40,15%,96%)] rounded-xl p-8 md:p-12">
              <span className="text-xs tracking-[0.15em] text-gold uppercase mb-4 block">
                Founding Season
              </span>
              <p className="text-[hsl(220,15%,30%)] text-sm leading-relaxed mb-6">
                RRFF was established in 2025. As the Foundation grows, Founding Legacy Donor
                recognition will begin as gifts are received — this page invites people into the
                circle rather than showing names that have not yet been recorded.
              </p>
              <blockquote className="border-l-2 border-gold pl-4">
                <p className="text-[hsl(220,15%,25%)] italic text-sm">
                  "Rooted in legacy. Driven by compassion. Powered by community."
                </p>
              </blockquote>
              <p className="text-[hsl(220,15%,50%)] text-xs mt-6">
                Legacy Circle, Founding gifts, pledge sponsorships, and corporate and employee
                giving conversations:{' '}
                <a
                  href="mailto:info@roundrockfirefoundation.org"
                  className="text-gold hover:underline"
                >
                  info@roundrockfirefoundation.org
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Chief's Letter Section ─── */
function ChiefLetterSection() {
  return (
    <section className="bg-[hsl(40,20%,94%)] py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center gap-2 mb-8">
              <span className="text-xs tracking-[0.15em] text-gold uppercase">
                A Letter From Fire Chief Shane Glaiser
              </span>
            </div>

            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              <div>
                <img
                  src="/images/chief-glaiser.jpg"
                  alt="Fire Chief Glaiser"
                  className="w-full h-auto rounded-lg object-cover aspect-[3/4]"
                />
                <p className="text-[hsl(220,15%,40%)] text-xs mt-3 text-center">
                  Fire Chief Shane Glaiser
                  <br />
                  <span className="text-gold">Round Rock Fire Department</span>
                </p>
              </div>

              <div>
                <blockquote className="text-2xl md:text-3xl font-light text-[hsl(220,15%,20%)] leading-tight mb-6">
                  "The Round Rock Fire Foundation represents the very best of our community —
                  neighbors taking care of neighbors."
                </blockquote>

                <p className="text-[hsl(220,15%,35%)] text-sm leading-relaxed mb-4">
                  The Foundation stands as a powerful example of what happens when a community
                  decides to take care of its own. Through support of our firefighters and their
                  families, RRFF helps ensure those who protect us are never left to face
                  challenges alone.
                </p>
                <p className="text-[hsl(220,15%,35%)] text-sm leading-relaxed mb-6">
                  Our families carry the weight of this work alongside every firefighter on shift.
                  Having a foundation built to walk that road with them — with care, consistency,
                  and for the long term — is something I am proud to stand behind.
                </p>

                <div className="border-t border-[hsl(40,15%,90%)] pt-4">
                  <p className="text-[hsl(220,15%,40%)] text-sm italic">With gratitude,</p>
                  <p className="text-gold text-xs uppercase tracking-wider mt-1">
                    Fire Chief Shane Glaiser, Round Rock Fire Department
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Giving Partners Section ─── */
function PartnersSection() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.15em] text-gold uppercase mb-4 block">
              Giving Partners
            </span>
            <p className="text-[hsl(220,15%,40%)] text-sm max-w-2xl mx-auto">
              Gifts to the Round Rock Fire Foundation are made through trusted giving pathways with
              Central Texas Community Foundation and Network for Good. Donors receive a tax-deductible
              receipt.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {['Central Texas Community Foundation', 'Network for Good'].map((name) => (
              <div
                key={name}
                className="bg-[hsl(40,15%,96%)] rounded-lg px-8 py-4 text-[hsl(220,15%,35%)] text-sm font-medium"
              >
                {name}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="text-center">
            <span className="text-xs tracking-[0.15em] text-[hsl(220,15%,50%)] uppercase mb-6 block">
              2025 Blazing Paddles Pickleball Tournament Sponsors
            </span>
            <div className="flex flex-wrap justify-center gap-4">
              {['Kalahari', 'Happy State Bank', 'Aday & Associates', 'Watkins Insurance'].map(
                (name) => (
                  <div
                    key={name}
                    className="border border-[hsl(40,15%,90%)] rounded-lg px-6 py-3 text-[hsl(220,15%,40%)] text-sm"
                  >
                    {name}
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Chap's Corner Section ─── */
function ChapsCornerSection() {
  return (
    <section className="bg-[hsl(40,20%,94%)] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="bg-white rounded-xl p-8 md:p-12">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-gold" />
                <span className="text-xs tracking-[0.15em] text-gold uppercase">
                  Linked Support Resource &middot; Chaplain-Led
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-[hsl(220,15%,15%)] mb-4">
                Chap's Corner.
              </h2>
              <p className="text-[hsl(220,15%,30%)] text-sm leading-relaxed mb-4">
                A chaplain-led blog and support resource for Round Rock fire families —
                encouragement, reflection, and care-centered guidance written by the Chaplain who
                walks with our firefighters and their loved ones.
              </p>
              <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed mb-6">
                Led by the Chaplain's pastoral voice, Chap's Corner offers encouragement,
                reflection, and care for fire families. RRFF is proud to connect families to
                this trusted source of support.
              </p>
              <a
                href="https://www.roundrockfirefoundation.org/firechaplain"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[hsl(220,15%,8%)] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[hsl(220,15%,15%)] transition-colors inline-flex items-center gap-2"
              >
                Visit Chap's Corner <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[hsl(220,15%,8%)] rounded-xl p-8 md:p-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-light mb-2">John Patterson, Fire Chaplain</h3>
                  <p className="text-white/50 text-sm leading-relaxed italic">
                    "With faith-centered care and intentional support, firefighters can finish
                    their careers stronger, healthier, and more connected than when they began."
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Main Home Page ─── */
export default function HomePage() {
  useEffect(() => {
    document.title = 'Round Rock Fire Foundation — Honoring Heroes, Supporting Fire Families'
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <FundSection />
        <EventsSection />
        <LegacyCircleSection />
        <ChiefLetterSection />
        <PartnersSection />
        <ChapsCornerSection />
      </main>
      <Footer />
    </div>
  )
}
