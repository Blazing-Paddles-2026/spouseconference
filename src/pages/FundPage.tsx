import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  Heart,
  Shield,
  HandHeart,
  Users,
  Clock,
  Flame,
  ChevronRight,
  ExternalLink,
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

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[hsl(0,0%,4%)]">
      <div className="absolute inset-0">
        <img
          src="/images/1884-page-photo.jpg"
          alt="Historic 1884 Hand Pumper from the Round Rock Volunteer Fire Department"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0,0%,4%)]/60 via-[hsl(0,0%,4%)]/80 to-[hsl(0,0%,4%)]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(15,80%,30%)]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <span className="text-[12rem] md:text-[18rem] font-extralight text-white/[0.04] leading-none absolute -top-8 right-4 md:right-12 select-none pointer-events-none">
            1884
          </span>
        </div>

        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Flame className="w-5 h-5 text-gold" />
            <span className="text-xs tracking-[0.25em] text-gold uppercase">Signature Fund</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[0.95] mb-4">
            The <span className="text-gold">1884</span> Fund
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            Dedicated emergency relief for Round Rock fire families — built so support is ready
            before a family ever has to ask. Named in honor of the year the Round Rock Fire
            Department was founded.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-[hsl(0,0%,8%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(43,75%,65%)] transition-colors inline-flex items-center gap-2"
            >
              Support the Fund <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/history"
              className="text-gold text-sm inline-flex items-center gap-1 hover:underline"
            >
              Explore the history <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Why 1884 ─── */
function WhySection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">Why 1884</span>
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
                From hand pumpers to high-rise rescue —
                <br />
                <span className="text-gold">the mission never changed.</span>
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                In 1884, the Hose and Hand Pump Company was formed as Round Rock's first organized
                fire department. Money for equipment was raised through donations, picnics, dances,
                box suppers, and other fund drives. The community came together to support those
                who would stand between their neighbors and the fire.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                140 years later, the Round Rock Fire Foundation carries that same spirit. The 1884 Fund
                is our commitment to the firefighters and fire families who continue that legacy —
                ensuring they never face hardship alone.
              </p>
              <blockquote className="border-l-2 border-gold pl-6 py-2 mt-6">
                <p className="text-white/60 italic text-sm leading-relaxed">
                  "The Hose and Hand Pump Company was formed in 1884 as Round Rock's first organized
                  fire department."
                </p>
                <cite className="text-white/30 text-xs not-italic mt-2 block">
                  — Texas Historical Commission, Marker #9332
                </cite>
              </blockquote>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="relative">
              <img
                src="/images/1884-page-photo.jpg"
                alt="Historic 1884 hand pumper fire engine"
                className="rounded-xl w-full h-auto object-cover shadow-2xl shadow-black/50"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/5" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── How the Fund Works ─── */
const supportAreas = [
  {
    icon: HandHeart,
    title: 'Medical Travel',
    description:
      'Travel and lodging support for out-of-area medical care when fire families need treatment far from home.',
  },
  {
    icon: Shield,
    title: 'Home Repairs',
    description:
      'Disaster recovery assistance for fire families whose homes are damaged or destroyed.',
  },
  {
    icon: Heart,
    title: 'Family Crisis Support',
    description:
      'Emergency assistance for families facing unexpected hardship, loss, or financial difficulty.',
  },
  {
    icon: Users,
    title: 'Wellness Programs',
    description:
      'Mental health and resilience resources for firefighters and their loved ones.',
  },
]

function HowItWorksSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">How It Works</span>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">What the Fund Provides</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              The 1884 Fund supports Round Rock fire families facing medical travel, care needs,
              home repairs after disaster, financial hardship, and family crises — with structure,
              care, and long-term purpose.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {supportAreas.map((area, i) => (
            <Reveal key={area.title} delay={i * 100}>
              <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 hover:border-gold/20 transition-colors h-full">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <area.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{area.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Why It Matters ─── */
function WhyItMattersSection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-2 mb-6">
              <Heart className="w-5 h-5 text-gold" />
              <span className="text-xs tracking-[0.25em] text-gold uppercase font-semibold">Why It Matters</span>
            </div>

            <blockquote className="text-white/70 text-xl md:text-2xl font-light leading-relaxed mb-6">
              "When we lost our daughter, Bailey, the love and support from our fire family and
              our community helped us through the most difficult time in our lives."
            </blockquote>

            <p className="text-white/40 text-sm leading-relaxed mb-4">
              Wylie Brownell, Assistant Chief of the Round Rock Fire Department, knows firsthand what
              it means to have a community show up. The 1884 Fund exists to ensure that every fire
              family in Round Rock has that same support — not by chance, but by design.
            </p>

            <p className="text-white/40 text-sm leading-relaxed">
              This foundation exists to ensure that fire families always have the resources they
              need, no matter the situation. It is about supporting one another and building a
              community that stands together.
            </p>

            <div className="border-t border-white/[0.06] pt-6 mt-8">
              <p className="text-white/30 text-xs italic">
                — Wylie Brownell, Assistant Chief, Round Rock Fire Department
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Legacy Circle ─── */
function LegacyCircleSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">Legacy Circle</span>
              <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
                Be one of the first to build lasting care.
              </h2>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                The Legacy Circle is an invitation to become a Founding Legacy Donor — part of
                the first group of people, families, and businesses helping launch The 1884 Fund
                and the support system fire families can count on for years to come.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { num: '01', title: 'Become part of the legacy.', desc: 'The first supporters of The 1884 Fund are helping establish long-term care and support for Round Rock fire families.' },
                  { num: '02', title: 'Dedicated and structured.', desc: 'The 1884 Fund is designed as a dedicated emergency-relief fund — built so support is ready before a family ever has to ask.' },
                  { num: '03', title: 'Trusted giving pathways.', desc: 'Gifts to the Round Rock Fire Foundation are made through trusted giving pathways with Central Texas Community Foundation and Network for Good. Donors receive a tax-deductible receipt.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4">
                    <span className="text-gold text-xs font-semibold mt-1">{item.num}</span>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-1">{item.title}</h4>
                      <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold text-[hsl(0,0%,8%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(43,75%,65%)] transition-colors inline-flex items-center gap-1"
              >
                Become a Founding Legacy Donor <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-xs tracking-[0.15em] text-gold uppercase">Founding Season</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed mb-6">
                RRFF was established in 2025. As the Foundation grows, Founding Legacy Donor
                recognition will begin as gifts are received — this page invites people into the
                circle rather than showing names that have not yet been recorded.
              </p>
              <blockquote className="border-l-2 border-gold pl-4">
                <p className="text-white/60 italic text-sm">
                  "Rooted in legacy. Driven by compassion. Powered by community."
                </p>
              </blockquote>
              <p className="text-white/30 text-xs mt-6">
                Legacy Circle, Founding gifts, pledge sponsorships, and corporate and employee
                giving conversations:{' '}
                <a href="mailto:info@roundrockfirefoundation.org" className="text-gold hover:underline">
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

/* ─── Donate CTA ─── */
function DonateSection() {
  return (
    <section className="relative py-24 bg-[hsl(0,0%,6%)] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(15,80%,30%)]/10 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
            Help build support <span className="text-gold">before</span> it is needed.
          </h2>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            Every gift to The 1884 Fund helps ensure that Round Rock fire families have a safety
            net they can count on — for medical travel, home repairs, crisis support, and wellness.
            Your donation is tax-deductible and made through trusted giving partners.
          </p>
          <a
            href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-[hsl(0,0%,8%)] px-8 py-4 rounded-full text-base font-bold hover:bg-[hsl(43,75%,65%)] transition-colors"
          >
            Give to The 1884 Fund <ExternalLink className="w-5 h-5" />
          </a>
          <p className="text-white/20 text-xs mt-4">
            Gifts made through Central Texas Community Foundation & Network for Good
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Main ─── */
export default function FundPage() {
  useEffect(() => {
    document.title = 'The 1884 Fund — Emergency Relief for Round Rock Fire Families'
  }, [])

  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)]">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <HowItWorksSection />
        <WhyItMattersSection />
        <LegacyCircleSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  )
}
