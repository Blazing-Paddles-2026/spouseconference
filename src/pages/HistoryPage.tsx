import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  Flame,
  Shield,
  Users,
  Building2,
  Truck,
  Award,
  Clock,
  BookOpen,
  MapPin,
  ChevronRight,
} from 'lucide-react'

/* ─── Reveal Animation Hook ─── */
function useReveal() {
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
      className={`reveal-on-scroll ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ─── Timeline Data ─── */
const timelineEvents = [
  {
    year: '1846',
    title: 'Early Settlement',
    description:
      'Dr. W. I. Anderson, Levi Asher and Reverend Freeman Smalley arrived and built homes along Brushy Creek near the Round Rock.',
    image: null,
    source: '',
    icon: MapPin,
    side: 'left' as const,
  },
  {
    year: '1851–1854',
    title: 'Brushy Creek Becomes Round Rock',
    description:
      'In 1851 mail was being delivered to the settlement at the Brushy Creek Post Office. The name was changed from Brushy Creek to Round Rock on August 24, 1854.',
    image: null,
    source: '',
    icon: BookOpen,
    side: 'right' as const,
  },
  {
    year: '1876',
    title: 'The Railroad Arrives',
    description:
      'The International & Great Northern Railroad came to the area and "New Town" (current downtown) was formed to be closer to the rail line.',
    image: null,
    source: '',
    icon: Truck,
    side: 'left' as const,
  },
  {
    year: '1879',
    title: 'A Devastating Fire',
    description:
      'Fire destroyed 10 buildings in a block of New Town, causing $20,000 in damage. All new buildings thereafter had roofs slanted to the rear, with cisterns placed in alleys to collect rainwater for fire fighting.',
    image: null,
    source: '',
    icon: Flame,
    side: 'right' as const,
  },
  {
    year: '1883',
    title: 'Round Rock College Burns',
    description:
      'Round Rock College (Greenwood Masonic Academy) burned. A new building, the Round Rock Institute, was built only a short distance away, between Old and New Round Rock.',
    image: null,
    source: '',
    icon: Building2,
    side: 'left' as const,
  },
  {
    year: '1884',
    title: 'The Fire Department Is Established',
    description:
      'After a year of planning and fund-raising, the community established the Round Rock Fire Department. The Hose and Hand Pump Company was formed. Money for equipment was raised through donations, picnics, dances, box suppers, and other fund drives.',
    image: '/images/hand-pumper-real.jpg',
    icon: Shield,
    side: 'right' as const,
    source: 'The restored 1884 Hand Pumper — on display at the WCOSA Firehouse Museum, 3300 E. Palm Valley Blvd.',
  },
  {
    year: '1890',
    title: 'The Hand Pumper Arrives',
    description:
      'Round Rock bought a used Hand Pumper — believed to have come from the city of Austin. The Hand Pumper served until about 1923. The official history shows it in front of the Main Street Library.',
    image: '/images/hand-pumper-real.jpg',
    source: 'Restored 1884 Hand Pumper, Round Rock Fire Museum collection.',
    icon: Truck,
    side: 'left' as const,
  },
  {
    year: '1892',
    title: 'First Fire Station & First Chief',
    description:
      'The first building constructed for Round Rock\'s fire department was completed. Clarence Woodard served as the first Fire Chief — later becoming the first paid Fire Chief for the Austin Fire Department.',
    image: '/images/fire-station-real.jpg',
    source: 'The original Round Rock Fire Station.',
    icon: Building2,
    side: 'right' as const,
  },
  {
    year: '1938',
    title: 'First New Fire Engine',
    description:
      'Engine 1 — a 1938 Ford chassis bought from a local dealer — was converted into a fire truck. It served Round Rock until the early 1970s and still appears in parades and memorials today.',
    image: '/images/engine-1-real.jpg',
    source: 'Engine 1, restored — on display at the WCOSA Firehouse Museum.',
    icon: Truck,
    side: 'right' as const,
  },
  {
    year: '1941',
    title: 'The Ladies Pumper Team',
    description:
      'World War II drew men away from the fire department. The women of Round Rock stepped up — H.L. Stockbridge trained six athletes from the champion softball team in pumper racing. They debuted May 18, 1941 at the Central Texas Fire Convention in Taylor and continued as a team until 1971. Original team members: Artie Louise Ferrell, Lerlene Womble, Jean Jennings, Velda Ruth Hill, Marie Robertson, and Olene Stockbridge.',
    image: '/images/ladies-pumper-team-real.jpg',
    source: 'The original Ladies Pumper Team in front of the Round Rock Fire Department.',
    icon: Users,
    side: 'left' as const,
  },
  {
    year: '1943/1946',
    title: 'Engine 2 — Military Surplus',
    description:
      'Engine 2 began as a Military Fire Truck. Round Rock acquired it at auction in 1946. It served from 1946–1975 in Round Rock, then established the Jollyville Fire Company (1975–1980) and the Sam Bass Fire Company (1980–1988).',
    image: '/images/engine-2-real.jpg',
    source: 'Engine 2, restored — on display at the WCOSA Firehouse Museum.',
    icon: Truck,
    side: 'right' as const,
  },
  {
    year: '1975',
    title: 'Jollyville Fire Company',
    description:
      'The western section of the fire district saw a housing boom. The 1946 engine was dispatched to establish the Jollyville Company of the Round Rock Fire Department.',
    image: null,
    source: '',
    icon: Building2,
    side: 'left' as const,
  },
  {
    year: '1978',
    title: 'First Career Firefighter',
    description:
      'As Round Rock became a bedroom community, the first career firefighter was hired. Lynn Bizzell became Fire Chief and served until 2004. He is now Fire Chief in Fredericksburg, Texas.',
    image: null,
    source: '',
    icon: Award,
    side: 'right' as const,
  },
  {
    year: '1980',
    title: 'Sam Bass Fire Company',
    description:
      'The Brushy Creek housing development was growing. The 1946 Chevy established the Sam Bass Fire Company of the Round Rock Fire Department. The Main Street Library conversion was completed. The city had a Fire Chief, and the Volunteers had a Chief — each Volunteer Company had a Captain reporting to the RRVFD Chief.',
    image: null,
    source: '',
    icon: Building2,
    side: 'left' as const,
  },
  {
    year: '1991',
    title: '50th Anniversary',
    description:
      'The Round Rock Volunteer Fire Department celebrated 50 years of dedicated service to the growing community.',
    image: null,
    source: '',
    icon: Award,
    side: 'left' as const,
  },
  {
    year: '2001',
    title: 'Hand Pumper Restored',
    description:
      'The historic 1884 Hand Pumper was sent out for restoration — a two-year process that preserved this priceless piece of Round Rock history for future generations.',
    image: '/images/history-1884-pumper.jpg',
    icon: Clock,
    side: 'right' as const,
  },
  {
    year: '2007',
    title: 'End of an Era',
    description:
      'The city had grown to nearly 100,000. The area served by the volunteers was diminishing. In 2007, the volunteers turned their area over to the Round Rock Fire Department for coverage. The city had grown to the point that the career department could better serve the Round Rock area. 123 years of volunteer service — from 1884 to 2007.',
    image: null,
    source: '',
    icon: Shield,
    side: 'left' as const,
  },
  {
    year: 'Today',
    title: 'Modern Round Rock Fire Department',
    description:
      'The Round Rock Fire Department continues serving as a contract provider for Williamson County ESD No. 9. Multiple stations, modern apparatus, career and support staff — honoring the legacy of those who served while protecting one of Texas\' fastest-growing communities.',
    image: null,
    source: '',
    icon: Shield,
    side: 'right' as const,
  },
]

/* ─── Fire Chiefs ─── */
const chiefs = [
  { name: 'Clarence Woodard', years: '1892', note: 'Later became first paid Fire Chief for Austin FD' },
  { name: 'S. E. Loving', years: '—', note: '' },
  { name: 'O. A. Voight', years: '—', note: '' },
  { name: 'H. L. Stockbridge', years: '1898–1938', note: 'Organized the Ladies Pumper Team' },
  { name: 'C. D. Anderson', years: '1938–1939', note: '' },
  { name: 'H. L. Stockbridge', years: '1939–1943', note: 'Second term' },
  { name: 'Cody R. Adolphson', years: '1943–1975', note: '' },
  { name: 'Bernie T. Bustin', years: '1975–1981', note: '' },
  { name: 'Clarence McKenzie', years: '1981', note: '' },
  { name: 'Roy A. Krienke', years: '1981–1983', note: '' },
]

/* ─── Notable Fires ─── */
const notableFires = [
  { year: '1877', desc: 'A whole city block burned' },
  { year: 'April 27, 1883', desc: 'Round Rock College (Greenwood Masonic Academy) burned' },
  { year: '1913', desc: 'Two-story Public School burned' },
  { year: 'Early 1900s', desc: 'Euhl Hotel fire — the Department saved one story of the hotel' },
  { year: 'July 29, 1929', desc: 'Round Rock Motor Company fire' },
  { year: '1925', desc: 'Meat market and bakery on East Main St.' },
  { year: '1968', desc: 'Kelly Cleaners fire on north side of East Main' },
]

/* ─── Hero Section ─── */
function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[hsl(0,0%,4%)]">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/engine-1-alt-real.jpg"
          alt=""
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%)]/60 via-[hsl(0,0%,4%)]/80 to-[hsl(0,0%,4%)]" />
        {/* Warm fire glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(15,80%,30%)]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-[hsl(35,70%,25%)]/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-[hsl(15,70%,55%)] text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <Flame className="w-5 h-5 text-[hsl(15,70%,50%)]" />
            <span className="text-xs tracking-[0.25em] text-[hsl(15,70%,50%)] uppercase">
              1846 — Today
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-6">
            History of the
            <br />
            <span className="text-[hsl(15,70%,55%)]">Round Rock</span>
            <br />
            Fire Department
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            From hand pumpers to modern emergency response — over 140 years of service,
            sacrifice, and community. Born from necessity, forged by fire, sustained by people
            who refused to let their neighbors stand alone.
          </p>
          <p className="text-white/25 text-xs mt-4">
            Historical information and photographs courtesy of the{' '}
            <span className="text-white/40">City of Round Rock</span> and the{' '}
            <span className="text-white/40">Round Rock Fire Department</span>.
          </p>
        </Reveal>

        {/* Year badges */}
        <Reveal delay={300}>
          <div className="flex flex-wrap gap-6 mt-12">
            <div className="text-center">
              <span className="text-3xl font-light text-[hsl(15,70%,55%)]">1884</span>
              <p className="text-white/30 text-xs mt-1">Department Established</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span className="text-3xl font-light text-[hsl(15,70%,55%)]">2007</span>
              <p className="text-white/30 text-xs mt-1">Volunteer Era Ends</p>
            </div>
            <div className="w-px bg-white/10" />
            <div className="text-center">
              <span className="text-3xl font-light text-[hsl(15,70%,55%)]">140+</span>
              <p className="text-white/30 text-xs mt-1">Years of Service</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Historical Marker ─── */
function MarkerSection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div>
              <div className="relative">
                <img
                  src="/images/fire-station-real.jpg"
                  alt="The original Round Rock Fire Station"
                  className="rounded-lg w-full h-auto object-cover shadow-2xl shadow-black/50"
                />
                <div className="absolute inset-0 rounded-lg ring-1 ring-white/5" />
              </div>
              <p className="text-white/20 text-xs mt-2 text-center">
                Photo: Round Rock Fire Department / WCOSA Firehouse Museum
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <span className="text-xs tracking-[0.25em] text-[hsl(15,70%,50%)] uppercase mb-4 block">
                Texas Historical Commission
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                A Legacy Recognized
              </h2>
              <blockquote className="text-white/60 italic text-lg leading-relaxed mb-6 border-l-2 border-[hsl(15,70%,45%)] pl-6">
                "The Hose and Hand Pump Company was formed in 1884 as Round Rock's first organized
                fire department. Money for equipment was raised through donations, picnics, dances,
                box suppers, and other fund drives."
              </blockquote>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                The first building constructed for Round Rock's fire department was completed in
                1892. As one of Texas' oldest volunteer fire departments, it continues to provide
                significant service to the citizens of Round Rock.
              </p>
              <p className="text-white/20 text-xs mb-4">
                Marker #9332 &middot; 203 Commerce Blvd, Round Rock, TX 78664
              </p>
              <p className="text-white/20 text-xs">
                Photos by Keith Peterson (2013) and the Texas Historical Reclamation Project (2025) &middot;{' '}
                <a href="https://www.hmdb.org/m.asp?m=69256" target="_blank" rel="noopener noreferrer" className="text-[hsl(15,70%,50%)] hover:underline">
                  View on HMDB.org
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Timeline ─── */
function TimelineEvent({ event, index }: { event: (typeof timelineEvents)[0]; index: number }) {
  const isLeft = event.side === 'left'
  const Icon = event.icon

  return (
    <div className="relative mb-12 md:mb-0">
      {/* Desktop */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8 items-start">
        <div className={`${isLeft ? 'pr-12' : 'pr-12'}`}>
          {isLeft && (
            <Reveal delay={index * 60}>
              <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-6 hover:border-[hsl(15,70%,40%)]/30 transition-colors text-right">
                <div className="flex items-center gap-2 mb-3 justify-end">
                  <span className="text-[hsl(15,70%,50%)] text-xs font-bold tracking-wider uppercase">
                    {event.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[hsl(15,70%,45%)]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[hsl(15,70%,50%)]" />
                  </div>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{event.description}</p>
                {'source' in event && event.source && (
                  <p className="text-white/20 text-xs mt-3 border-t border-white/[0.04] pt-2">
                    {event.source}
                  </p>
                )}
              </div>
            </Reveal>
          )}
        </div>

        <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
          <div className="w-3.5 h-3.5 rounded-full bg-[hsl(15,70%,50%)] border-[3px] border-[hsl(0,0%,6%)] shadow-[0_0_12px_hsl(15,70%,50%)/0.4]" />
        </div>

        <div className={`${!isLeft ? 'pl-12' : 'pl-12'}`}>
          {!isLeft && (
            <Reveal delay={index * 60}>
              <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-6 hover:border-[hsl(15,70%,40%)]/30 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[hsl(15,70%,45%)]/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[hsl(15,70%,50%)]" />
                  </div>
                  <span className="text-[hsl(15,70%,50%)] text-xs font-bold tracking-wider uppercase">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">{event.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{event.description}</p>
                {'source' in event && event.source && (
                  <p className="text-white/20 text-xs mt-3 border-t border-white/[0.04] pt-2">
                    {event.source}
                  </p>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Reveal delay={index * 60}>
          <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-5 ml-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[hsl(15,70%,45%)]/10 flex items-center justify-center">
                <Icon className="w-4 h-4 text-[hsl(15,70%,50%)]" />
              </div>
              <span className="text-[hsl(15,70%,50%)] text-xs font-bold tracking-wider uppercase">
                {event.year}
              </span>
            </div>
            <h3 className="text-white text-base font-semibold mb-2">{event.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{event.description}</p>
            {'source' in event && event.source && (
              <p className="text-white/20 text-xs mt-3 border-t border-white/[0.04] pt-2">
                {event.source}
              </p>
            )}
          </div>
        </Reveal>
        <div className="absolute left-3 top-5">
          <div className="w-3 h-3 rounded-full bg-[hsl(15,70%,50%)] border-2 border-[hsl(0,0%,6%)]" />
        </div>
      </div>
    </div>
  )
}

function TimelineSection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.25em] text-[hsl(15,70%,50%)] uppercase mb-4 block">
              A Timeline of Service
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
              Forged by Fire, Sustained by Community
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              From bucket brigades to state-of-the-art emergency response — the story of Round
              Rock's firefighters is the story of the community itself.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="timeline-line-red" />
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, i) => (
              <TimelineEvent key={event.year + event.title} event={event} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Chiefs Section ─── */
function ChiefsSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] text-[hsl(15,70%,50%)] uppercase mb-4 block">
              Leadership Through the Years
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Recorded Fire Chiefs
            </h2>
            <p className="text-white/30 text-sm mt-3">Round Rock Volunteer Fire Department &middot; 1892–2007</p>
          <p className="text-white/20 text-xs mt-2">From historical records &amp; Texas Historical Commission Marker #9332</p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {chiefs.map((chief) => (
            <Reveal key={chief.name + chief.years}>
              <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-lg p-4 hover:border-[hsl(15,70%,40%)]/20 transition-colors">
                <h4 className="text-white text-sm font-semibold">{chief.name}</h4>
                <p className="text-[hsl(15,70%,50%)] text-xs mt-1">{chief.years}</p>
                {chief.note && <p className="text-white/30 text-xs mt-1">{chief.note}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Notable Fires ─── */
function FiresSection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] text-[hsl(15,70%,50%)] uppercase mb-4 block">
              Through the Years
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Notable Fires
            </h2>
            <p className="text-white/30 text-sm mt-3">The calls that shaped a department</p>
          <p className="text-white/20 text-xs mt-2">Compiled from local historical archives</p>
          </div>
        </Reveal>

        <div className="space-y-2 max-w-2xl mx-auto">
          {notableFires.map((fire) => (
            <Reveal key={fire.year + fire.desc}>
              <div className="flex gap-4 items-start bg-[hsl(0,0%,10%)] border border-white/[0.04] rounded-lg p-4">
                <Flame className="w-4 h-4 text-[hsl(15,70%,45%)]/60 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-[hsl(15,70%,50%)] text-sm font-semibold">{fire.year}</span>
                  <p className="text-white/40 text-sm">{fire.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Resources ─── */
function ResourcesSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] text-[hsl(15,70%,50%)] uppercase mb-4 block">
              Dig Deeper
            </span>
            <h2 className="text-3xl font-light text-white">Historical Resources</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: 'History of the Volunteer Fire Department, 1884–1984',
              author: 'Lerlene Womble Ward',
              href: 'https://texashistory.unt.edu/ark:/67531/metapth1121223/',
            },
            {
              title: 'Historical Marker #9332',
              author: 'Texas Historical Commission',
              href: 'https://www.hmdb.org/m.asp?m=69256',
            },
            {
              title: 'RRFD History Presentation',
              author: 'Round Rock Fire Department',
              href: 'https://www.roundrocktexas.gov/wp-content/uploads/2024/08/Round-Rock-Volunteer-Fire-Department-Hx-2-Presentation.pdf',
            },
          ].map((r) => (
            <Reveal key={r.title}>
              <a
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-6 hover:border-[hsl(15,70%,40%)]/30 transition-colors h-full"
              >
                <BookOpen className="w-5 h-5 text-[hsl(15,70%,50%)] mb-3" />
                <h4 className="text-white text-sm font-semibold mb-1 group-hover:text-[hsl(15,70%,55%)] transition-colors">
                  {r.title}
                </h4>
                <p className="text-white/30 text-xs">{r.author}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Sources & Credits ─── */
function CreditsSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-16 border-t border-white/[0.04]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-xs tracking-[0.25em] text-[hsl(15,70%,50%)] uppercase mb-4 block">
              Sources & Credits
            </span>
            <div className="space-y-3 text-white/30 text-sm leading-relaxed max-w-2xl mx-auto">
              <p>
                Historical timeline compiled from the official{' '}
                <span className="text-white/50">Round Rock Volunteer Fire Department History Presentation</span>,
                provided by the{' '}
                <span className="text-white/50">City of Round Rock</span> and the{' '}
                <span className="text-white/50">Round Rock Fire Department</span>.
              </p>
              <p>
                Photographs of the 1884 Hand Pumper, 1938 Ford Engine 1, 1943 Chevrolet Engine 2,
                the Ladies Pumper Team, and the original Round Rock Fire Station are from the{' '}
                <span className="text-white/50">WCOSA Firehouse Museum</span> collection,
                maintained by the Old Settlers Association and the Fraternal Order of the
                Round Rock Volunteer Fire Department.
              </p>
              <p>
                Texas Historical Marker #9332 photographed by{' '}
                <span className="text-white/50">Keith Peterson</span> and the{' '}
                <span className="text-white/50">Texas Historical Reclamation Project</span>.
                Historical paper by <span className="text-white/50">Lerlene Womble Ward</span>,
                courtesy of the Portal to Texas History, UNT Libraries.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="relative py-24 bg-[hsl(0,0%,6%)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(15,80%,30%)]/10 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
            The Legacy <span className="text-[hsl(15,70%,55%)]">Continues</span>
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            From the Hose and Hand Pump Company of 1884 to the modern Round Rock Fire Department
            of today, the mission has never changed: protect the community, stand with your
            neighbors, and never let a family face the fire alone.
          </p>
          <Link
            to="/press-room"
            className="inline-flex items-center gap-2 text-[hsl(15,70%,55%)] text-sm hover:underline"
          >
            Visit the Press Room <ChevronRight className="w-4 h-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Main Page ─── */
export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)]">
      <Navbar />
      <main>
        <Hero />
        <MarkerSection />
        <TimelineSection />
        <ChiefsSection />
        <FiresSection />
        <ResourcesSection />
        <CreditsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
