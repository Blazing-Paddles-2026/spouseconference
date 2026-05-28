import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  Shield,
  Users,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

/* ─── Reveal Wrapper ─── */
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

/* ─── Board Data ─── */
const boardMembers = [
  {
    name: 'Diedra Brownell',
    role: 'Executive Director',
    org: 'Round Rock Fire Foundation',
    bio: 'Executive Director of the Round Rock Fire Foundation. A passionate advocate for fire families and the driving force behind the Foundation\'s mission to build lasting, structured support for the Round Rock fire community.',
    image: '/images/diedra-brownell.jpg',
  },
  {
    name: 'Wylie Brownell',
    role: 'Assistant Fire Chief',
    org: 'Round Rock Fire Department',
    bio: 'Assistant Fire Chief of the Round Rock Fire Department and Founder of the Round Rock Fire Foundation. His personal experience with loss and the community\'s response inspired the creation of RRFF and The 1884 Fund.',
    image: '/images/board-wylie.jpg',
  },
  {
    name: 'Will Peckham, CIC | CRM',
    role: 'Board Member',
    org: 'Watkins Insurance',
    bio: 'Community leader and dedicated advocate serving with Watkins Insurance. Brings expertise in risk management and community outreach to the Foundation\'s mission.',
    image: '/images/board-peckham.jpg',
  },
  {
    name: 'Jeff Paull',
    role: 'Board Member',
    org: 'Primerica',
    bio: 'Regional Vice President at Primerica. Brings financial acumen and strategic planning expertise to the Foundation\'s growth and sustainability efforts.',
    image: '/images/board-paull-square.jpg',
  },
  {
    name: 'Hunter Leatherman',
    role: 'Board Member',
    org: 'Frontier Bank of Texas',
    bio: 'Vice President of Business and Community Banking at Frontier Bank of Texas. Connects the Foundation with local business partnerships and sponsorship opportunities.',
    image: '/images/board-leatherman.jpg',
  },
  {
    name: 'Trevor Burwick',
    role: 'Board Member',
    org: 'Happy State Bank',
    bio: 'Market President for Round Rock at Happy State Bank. Supports the Foundation\'s financial stewardship and community engagement initiatives.',
    image: '/images/board-burwick.jpg',
  },
  {
    name: 'John Patterson',
    role: 'Chaplain',
    org: 'Round Rock Fire Department',
    bio: 'Chaplain for the Round Rock Fire Department. Provides spiritual and emotional support to firefighters and their families, and guides the Foundation\'s wellness and resilience programs.',
    image: '/images/board-patterson.jpg',
  },
]

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[hsl(0,0%,4%)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,6%)] to-[hsl(35,30%,15%)] opacity-80" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(15,80%,30%)]/15 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-gold" />
          <span className="text-xs tracking-[0.25em] text-gold uppercase">Leadership</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-[0.95] mb-4">
          Board of <span className="text-gold">Directors</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
          The Round Rock Fire Foundation is guided by a dedicated board of community leaders,
          fire family members, and local professionals committed to supporting those who serve.
        </p>
      </div>
    </section>
  )
}

/* ─── Featured Member (Diedra) ─── */
function FeaturedMember() {
  const member = boardMembers[0]
  return (
    <Reveal>
      <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl overflow-hidden hover:border-gold/20 transition-colors mb-8 max-w-3xl mx-auto">
        <div className="grid md:grid-cols-[240px_1fr]">
          <div className="bg-[hsl(0,0%,8%)] p-6 flex items-start justify-center pt-8">
            <img
              src={member.image}
              alt={member.name}
              className="w-44 h-52 rounded-lg object-cover object-top"
            />
          </div>
          <div className="p-8">
            <span className="text-gold text-xs font-semibold uppercase tracking-wider">{member.role}</span>
            <h3 className="text-white text-2xl font-semibold mt-1 mb-1">{member.name}</h3>
            <p className="text-white/30 text-sm mb-4">{member.org}</p>
            <p className="text-white/40 text-sm leading-relaxed">{member.bio}</p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

/* ─── Board Grid ─── */
function BoardGrid() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">Our Leadership</span>
            <h2 className="text-3xl md:text-4xl font-light text-white">Foundation Board</h2>
            <p className="text-white/40 text-sm mt-3 max-w-xl mx-auto">
              Seven dedicated leaders guiding the Foundation's mission to support Round Rock fire families.
            </p>
          </div>
        </Reveal>

        {/* Featured: Diedra */}
        <FeaturedMember />

        {/* Other 6 members */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {boardMembers.slice(1).map((member, i) => (
            <Reveal key={member.name} delay={i * 80}>
              <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-6 hover:border-gold/20 transition-colors text-center">
                <div className="flex justify-center mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gold/20"
                  />
                </div>
                <span className="text-gold text-xs font-semibold uppercase tracking-wider">{member.role}</span>
                <h4 className="text-white text-base font-semibold mt-1">{member.name}</h4>
                <p className="text-white/30 text-xs mb-3">{member.org}</p>
                <p className="text-white/40 text-xs leading-relaxed">{member.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Governance ─── */
function GovernanceSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-gold" />
              <span className="text-xs tracking-[0.25em] text-gold uppercase font-semibold">About Our Board</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              The Round Rock Fire Foundation Board of Directors is responsible for guiding the strategic direction,
              financial stewardship, and programmatic impact of the Foundation. Board members bring expertise in
              fire service, nonprofit management, community organizing, business leadership, and family advocacy.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              The Board meets regularly to review programs, approve budgets, and ensure that every dollar donated
              to the Foundation is used effectively to support Round Rock fire families.
            </p>
            <p className="text-white/30 text-xs">
              Interested in serving on the Board? Contact us at{' '}
              <a href="mailto:info@roundrockfirefoundation.org" className="text-gold hover:underline">
                info@roundrockfirefoundation.org
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function ContactSection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-gold" />
            <span className="text-xs tracking-[0.25em] text-gold uppercase font-semibold">Contact the Board</span>
          </div>
          <p className="text-white/40 text-sm mb-6">
            For board-related inquiries, partnership proposals, or media requests, please reach out.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-white/40 text-sm inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> 797 Sam Bass Rd #204, Round Rock, TX 78681
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="mailto:info@roundrockfirefoundation.org" className="text-gold text-sm inline-flex items-center gap-2 hover:underline">
              <Mail className="w-4 h-4" /> info@roundrockfirefoundation.org
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a href="tel:5129671007" className="text-white/50 text-sm inline-flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="w-4 h-4" /> (512) 967-1007
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Main ─── */
export default function BoardPage() {
  useEffect(() => {
    document.title = 'Board of Directors — Round Rock Fire Foundation'
  }, [])

  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)]">
      <Navbar />
      <main>
        <Hero />
        <BoardGrid />
        <GovernanceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
