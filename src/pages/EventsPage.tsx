import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  ChevronRight,
  Music,
  Shield,
  Users,
  Info,
  Heart,
} from 'lucide-react'
import { useEffect, useRef } from 'react'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          obs.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[45vh] flex items-center overflow-hidden bg-[hsl(0,0%,4%)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,6%)] to-[hsl(35,30%,15%)] opacity-80" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(15,80%,30%)]/15 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="w-5 h-5 text-gold" />
          <span className="text-xs tracking-[0.25em] text-gold uppercase">Community Calendar</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-[0.95] mb-4">
          Upcoming <span className="text-gold">Events</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
          Gatherings that build lasting care. Each event supports The 1884 Fund and the
          Round Rock fire families who keep our community safe.
        </p>
      </div>
    </section>
  )
}

/* ─── Events ─── */
const events = [
  {
    date: 'May 29, 2026',
    time: '7:05 PM',
    label: 'Featured Event',
    title: 'Round Rock Fire Foundation Night at Dell Diamond',
    venue: 'Dell Diamond — 3400 E. Palm Valley Blvd, Round Rock, TX 78665',
    description:
      'An inaugural community-wide tribute to Central Texas firefighters and fire families. Round Rock Express vs. Salt Lake Bees. Touch-A-Truck at 6:00 PM. Ceremonial first pitch by Assistant Chief Wylie Brownell with fire family recognition. Between-innings firefighter recognition.',
    image: '/images/express-appreciation-night-flyer.jpg',
    cta: { label: 'Get Tickets (Use Code FIRE26)', href: 'https://mlb.tickets.com/?orgId=58189&agency=MILB_MPV&eventId=27339', external: true },
    highlights: [
      { icon: Shield, text: 'Pre-Game Fire Apparatus Display' },
      { icon: Music, text: 'Pipes and Drums Performance' },
      { icon: Users, text: 'Fire Family Ceremonial First Pitch' },
      { icon: Info, text: 'Between-Innings Firefighter Recognition' },
    ],
  },
  {
    date: 'October 18, 2026',
    time: '10:00 AM – 6:00 PM',
    label: 'Signature Fundraiser',
    title: 'Blazing Paddles Pickleball Tournament',
    venue: 'Cedar Ridge High School — 2801 Gattis School Rd, Round Rock, TX',
    description:
      'A community pickleball tournament where sponsors, players, volunteers, and fire families gather to raise support for RRFF programs. Entry fee $65. Tournament brackets include men\'s and women\'s doubles, singles, and first responders.',
    image: '/images/blazing-paddles-logo-light.jpg',
    cta: { label: 'Learn More', href: 'https://pickleball.roundrockfirefoundation.org', external: true },
    secondaryCta: { label: 'Sponsor', href: 'https://www.roundrockfirefoundation.org/pickleballsponsor', external: true },
    highlights: [
      { icon: Users, text: 'Men\'s & Women\'s Doubles' },
      { icon: Users, text: 'Singles & First Responder Brackets' },
      { icon: Calendar, text: 'Registration Opens June 1' },
    ],
  },
  {
    date: 'November 6–8, 2026',
    time: 'All Weekend',
    label: 'Family Support',
    title: 'RRFF National Spouse Conference',
    venue: 'Tru by Hilton — Round Rock, TX',
    description:
      'A weekend for firefighter couples focused on connection, resilience, and the lasting care that helps fire families thrive together. $700 per couple — includes hotel accommodations. Train side-by-side in hands-on scenarios.',
    image: null,
    cta: { label: 'Register', href: 'https://spouseconference.roundrockfirefoundation.org/', external: true },
    secondaryCta: { label: 'See Schedule', href: 'https://spouseconference.roundrockfirefoundation.org/schedule', external: true },
    highlights: [
      { icon: Users, text: 'Couples Training Side-by-Side' },
      { icon: Shield, text: 'Hands-On Scenarios' },
      { icon: Heart, text: 'Connection & Resilience Workshops' },
    ],
  },
]

/* ─── Event Card ─── */
function EventCard({ event, index }: { event: (typeof events)[0]; index: number }) {
  return (
    <Reveal delay={index * 150}>
      <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl overflow-hidden hover:border-gold/20 transition-colors mb-8">
        {/* Image */}
        {event.image && (
          <div className="relative">
            <img src={event.image} alt={event.title} className="w-full h-56 md:h-72 object-cover" />
            <div className="absolute top-4 left-4">
              <span className="bg-gold text-[hsl(0,0%,8%)] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {event.label}
              </span>
            </div>
          </div>
        )}

        <div className="p-6 md:p-8">
          {/* Date & Time */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2 text-gold text-sm">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-2 text-white/40 text-sm">
              <Clock className="w-4 h-4" />
              <span>{event.time}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-white text-2xl md:text-3xl font-light mb-2">{event.title}</h3>

          {/* Venue */}
          <div className="flex items-center gap-2 text-white/40 text-sm mb-4">
            <MapPin className="w-4 h-4" />
            <span>{event.venue}</span>
          </div>

          {/* Description */}
          <p className="text-white/50 text-sm leading-relaxed mb-6">{event.description}</p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {event.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                <h.icon className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="text-white/40 text-xs">{h.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href={event.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-[hsl(0,0%,8%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(43,75%,65%)] transition-colors inline-flex items-center gap-2"
            >
              {event.cta.label} <ExternalLink className="w-4 h-4" />
            </a>
            {event.secondaryCta && (
              <a
                href={event.secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-6 py-3 rounded-full font-medium text-sm hover:border-white/40 transition-colors inline-flex items-center gap-2"
              >
                {event.secondaryCta.label} <ChevronRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Main ─── */
export default function EventsPage() {
  useEffect(() => {
    document.title = 'Upcoming Events — Round Rock Fire Foundation'
  }, [])

  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)]">
      <Navbar />
      <main>
        <Hero />
        <section className="bg-[hsl(0,0%,6%)] py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {events.map((event, i) => (
                <EventCard key={event.title} event={event} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
