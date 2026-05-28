import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  Heart,
  Users,
  Calendar,
  HandHeart,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight,
  Flame,
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
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[hsl(0,0%,4%)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,6%)] to-[hsl(35,30%,15%)] opacity-80" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(15,80%,30%)]/15 rounded-full blur-[120px]" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-gold" />
          <span className="text-xs tracking-[0.25em] text-gold uppercase">Join Us</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-[0.95] mb-4">
          Get <span className="text-gold">Involved</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
          There are many ways to stand with Round Rock firefighters and their families.
          Whether you give, volunteer, sponsor, or spread the word — every action matters.
        </p>
      </div>
    </section>
  )
}

/* ─── Ways to Help ─── */
const ways = [
  {
    icon: Heart,
    title: 'Donate',
    description:
      'Your gift directly supports Round Rock fire families through The 1884 Fund. Every dollar goes toward emergency relief, wellness programs, and lasting care for those who protect our community.',
    cta: 'Give Now',
    href: 'https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation',
    external: true,
  },
  {
    icon: Calendar,
    title: 'Sponsor an Event',
    description:
      'Partner with us as a corporate or individual sponsor for Blazing Paddles, the Fire Foundation Night at Dell Diamond, or the National Spouse Conference. Great visibility for a great cause.',
    cta: 'Learn About Sponsorship',
    href: '/get-involved',
  },
  {
    icon: HandHeart,
    title: 'Legacy Circle',
    description:
      'Become a Founding Legacy Donor and help establish the long-term support system fire families can count on for years to come. Structured, lasting, meaningful care.',
    cta: 'Join the Legacy Circle',
    href: 'https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation',
    external: true,
  },
]

function WaysSection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">How You Can Help</span>
            <h2 className="text-3xl md:text-5xl font-light text-white mb-4">Stand With Fire Families</h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              Every contribution of time, resources, or advocacy strengthens the safety net for those who keep our community safe.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {ways.map((way, i) => (
            <Reveal key={way.title} delay={i * 100}>
              <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 hover:border-gold/20 transition-colors h-full flex flex-col">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <way.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-white text-xl font-semibold mb-3">{way.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-6 flex-1">{way.description}</p>
                {way.external ? (
                  <a
                    href={way.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    {way.cta} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link to={way.href} className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:underline">
                    {way.cta} <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Sponsorship Form ─── */
function SponsorshipFormSection() {
  return (
    <section id="sponsor-form" className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Sponsor an Event</h2>
            <p className="text-white/40 text-sm">
              Partner with the Round Rock Fire Foundation and gain visibility while supporting a meaningful cause.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            action="https://formspree.io/f/mjgzoaln"
            method="POST"
            className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 space-y-6"
          >
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/60 text-sm mb-2">First Name <span className="text-gold">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Last Name <span className="text-gold">*</span></label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>

            {/* Organization */}
            <div>
              <label className="block text-white/60 text-sm mb-2">Organization / Company</label>
              <input
                type="text"
                name="organization"
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white/60 text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Email <span className="text-gold">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Event Interest */}
            <div>
              <label className="block text-white/60 text-sm mb-3">Which event are you interested in sponsoring? <span className="text-gold">*</span></label>
              <div className="space-y-2">
                {[
                  { value: 'blazing-paddles', label: 'Blazing Paddles Pickleball Tournament (October 18, 2026)' },
                  { value: 'fire-foundation-night', label: 'Fire Foundation Night at Dell Diamond (May 29, 2026)' },
                  { value: 'spouse-conference', label: 'National Spouse Conference (November 6-8, 2026)' },
                  { value: 'multiple', label: 'Multiple Events / General Partnership' },
                ].map((option) => (
                  <label key={option.value} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="events"
                      value={option.value}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-[hsl(0,0%,14%)] text-gold focus:ring-gold/50"
                    />
                    <span className="text-white/70 text-sm">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Sponsorship Level */}
            <div>
              <label className="block text-white/60 text-sm mb-3">Interested sponsorship level</label>
              <select
                name="sponsorshipLevel"
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
              >
                <option value="">Select a level...</option>
                <option value="title">Title Sponsor ($5,000+)</option>
                <option value="presenting">Presenting Sponsor ($2,500+)</option>
                <option value="gold">Gold Sponsor ($1,000+)</option>
                <option value="silver">Silver Sponsor ($500+)</option>
                <option value="friend">Friend of the Foundation ($250+)</option>
                <option value="custom">Custom Partnership</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-white/60 text-sm mb-2">Questions or Comments</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about your organization and what you're looking for in a partnership..."
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/20 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gold text-[hsl(0,0%,8%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(43,75%,65%)] transition-colors"
            >
              Submit Sponsorship Inquiry
            </button>

            <p className="text-white/20 text-xs text-center">
              We'll be in touch within 2 business days.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Volunteer Form ─── */
function VolunteerFormSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">Join Our Crew</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">Volunteer With Us</h2>
            <p className="text-white/40 text-sm">
              We're thrilled that you want to make a difference! Fill out the form below to sign up as a volunteer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            action="https://formspree.io/f/xkoezqpp"
            method="POST"
            className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 space-y-6"
          >
            {/* Name */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/60 text-sm mb-2">First Name <span className="text-gold">*</span></label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/60 text-sm mb-2">Last Name <span className="text-gold">*</span></label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white/60 text-sm mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Email <span className="text-gold">*</span>{' '}
                <span className="text-white/30 text-xs">(for volunteer updates)</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors"
              />
            </div>

            {/* How would you like to help */}
            <div>
              <label className="block text-white/60 text-sm mb-3">How would you like to help? <span className="text-gold">*</span></label>
              <div className="space-y-2">
                {[
                  { value: 'event-coordination', label: 'Event Coordination', desc: 'Help with logistics, registration, setup, and overall event coordination.' },
                  { value: 'fundraising', label: 'Fundraising Support', desc: 'Assist with organizing and supporting fundraising events.' },
                  { value: 'community-outreach', label: 'Community Outreach', desc: 'Help with logistics, registration, setup, and event coordination.' },
                  { value: 'ambassador', label: 'Volunteer Ambassador', desc: 'Act as a spokesperson for the foundation, encouraging others to get involved.' },
                ].map((option) => (
                  <label key={option.value} className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="interests"
                      value={option.value}
                      className="mt-1 w-4 h-4 rounded border-white/20 bg-[hsl(0,0%,14%)] text-gold focus:ring-gold/50"
                    />
                    <div>
                      <span className="text-white/70 text-sm">{option.label}</span>
                      <p className="text-white/30 text-xs">{option.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Special skills */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Special Skills & Expertise <span className="text-white/30 text-xs">(optional)</span>
              </label>
              <textarea
                name="skills"
                rows={3}
                placeholder="Please list any skills or expertise that may benefit the Round Rock Fire Foundation"
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors placeholder:text-white/20 resize-none"
              />
            </div>

            {/* Comments */}
            <div>
              <label className="block text-white/60 text-sm mb-2">
                Questions or Comments <span className="text-white/30 text-xs">(optional)</span>
              </label>
              <textarea
                name="comments"
                rows={3}
                className="w-full bg-[hsl(0,0%,14%)] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-gold text-[hsl(0,0%,8%)] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[hsl(43,75%,65%)] transition-colors"
            >
              Sign Up to Volunteer
            </button>

            <p className="text-white/20 text-xs text-center">
              We'll be in touch with volunteer opportunities soon.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Upcoming Opportunities ─── */
function OpportunitiesSection() {
  return (
    <section className="bg-[hsl(0,0%,4%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.25em] text-gold uppercase mb-4 block">Upcoming</span>
            <h2 className="text-3xl md:text-4xl font-light text-white">Ways to Participate</h2>
          </div>
        </Reveal>

        <div className="space-y-4 max-w-3xl mx-auto">
          <Reveal>
            <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-gold/20 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">May 29, 2026</span>
                </div>
                <h4 className="text-white text-lg font-semibold">Fire Foundation Night at Dell Diamond</h4>
                <p className="text-white/40 text-sm">Round Rock Express vs. Salt Lake Bees — a community-wide tribute to firefighters.</p>
              </div>
              <Link
                to="/events/fire-foundation-night"
                className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:underline flex-shrink-0"
              >
                Event Details <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-gold/20 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">October 18, 2026</span>
                </div>
                <h4 className="text-white text-lg font-semibold">Blazing Paddles Pickleball Tournament</h4>
                <p className="text-white/40 text-sm">Community tournament raising support for RRFF programs. Entry $65.</p>
              </div>
              <a
                href="https://www.roundrockfirefoundation.org/pickleball"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:underline flex-shrink-0"
              >
                Learn More <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 hover:border-gold/20 transition-colors">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">November 6–8, 2026</span>
                </div>
                <h4 className="text-white text-lg font-semibold">National Spouse Conference</h4>
                <p className="text-white/40 text-sm">A weekend for firefighter couples focused on connection and resilience. $700/couple.</p>
              </div>
              <a
                href="https://spouseconference.roundrockfirefoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold text-sm font-medium inline-flex items-center gap-1 hover:underline flex-shrink-0"
              >
                Register <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─── Contact ─── */
function ContactSection() {
  return (
    <section className="bg-[hsl(0,0%,6%)] py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 md:p-12 text-center">
            <Heart className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-light text-white mb-4">Not Sure How to Help?</h2>
            <p className="text-white/40 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Reach out and let us know what you're interested in. We'll find the right way for you to get involved — whether it's a one-time gift, a volunteer shift, or a long-term partnership.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-white/40 text-sm inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" /> 797 Sam Bass Rd #204, Round Rock, TX 78681
              </span>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a
                href="mailto:info@roundrockfirefoundation.org"
                className="text-gold text-sm inline-flex items-center gap-2 hover:underline"
              >
                <Mail className="w-4 h-4" /> info@roundrockfirefoundation.org
              </a>
              <span className="text-white/20 hidden sm:inline">|</span>
              <a
                href="tel:5129671007"
                className="text-white/50 text-sm inline-flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" /> (512) 967-1007
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─── Main ─── */
export default function GetInvolvedPage() {
  useEffect(() => {
    document.title = 'Get Involved — Round Rock Fire Foundation'
  }, [])

  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)]">
      <Navbar />
      <main>
        <Hero />
        <WaysSection />
        <SponsorshipFormSection />
        <VolunteerFormSection />
        <OpportunitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
