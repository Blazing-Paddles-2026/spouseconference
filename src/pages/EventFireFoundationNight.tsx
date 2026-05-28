import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Ticket,
  ExternalLink,
  Flame,
  Music,
  Shield,
  Users,
  Info,
} from 'lucide-react'

export default function EventFireFoundationNight() {
  useEffect(() => {
    document.title = 'Fire Foundation Night at Dell Diamond — May 29, 2026'
  }, [])

  return (
    <div className="min-h-screen bg-[hsl(220,35%,12%)]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/express-appreciation-night-flyer.jpg"
              alt=""
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,35%,12%)]/70 via-[hsl(220,35%,12%)]/90 to-[hsl(220,35%,12%)]" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(43,60%,30%)]/15 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[hsl(40,20%,70%)] hover:text-gold text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span className="text-xs tracking-[0.2em] text-gold uppercase font-semibold">
                Featured Event &middot; May 29, 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-[hsl(40,20%,95%)] leading-[0.95] mb-4">
              Round Rock Fire
              <br />
              Foundation <span className="text-gold">Appreciation</span>
              <br />
              Night
            </h1>
            <p className="text-[hsl(40,20%,70%)] text-lg max-w-xl">
              Honoring Round Rock Firefighters &amp; Their Families
            </p>
          </div>
        </section>

        {/* Flyer + Details */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Flyer */}
              <div>
                <img
                  src="/images/express-appreciation-night-flyer.jpg"
                  alt="Round Rock Fire Foundation Appreciation Night at Dell Diamond - Friday May 29, 2026"
                  className="rounded-xl shadow-2xl shadow-black/50 w-full"
                />
              </div>

              {/* Details */}
              <div className="space-y-8">
                {/* Quick Info */}
                <div className="bg-[hsl(220,30%,18%)] border border-white/[0.06] rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-[hsl(40,20%,95%)] text-sm font-semibold">Friday, May 29, 2026</p>
                        <p className="text-[hsl(40,20%,60%)] text-sm">First pitch at 7:05 PM</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-[hsl(40,20%,95%)] text-sm font-semibold">Dell Diamond</p>
                        <p className="text-[hsl(40,20%,60%)] text-sm">3400 Palm Valley Blvd., Round Rock, TX 78665</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Ticket className="w-5 h-5 text-gold mt-0.5" />
                      <div>
                        <p className="text-[hsl(40,20%,95%)] text-sm font-semibold">Reserved: $20 &middot; Lawn: $12</p>
                        <p className="text-[hsl(40,20%,60%)] text-sm">A portion of proceeds benefits the Round Rock Fire Foundation</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ticket CTA */}
                <div className="bg-gold rounded-xl p-6 text-center">
                  <p className="text-[hsl(220,35%,12%)] font-semibold text-sm mb-1">Use Coupon Code</p>
                  <p className="text-[hsl(220,35%,12%)] text-3xl font-bold tracking-wider mb-3">FIRE26</p>
                  <a
                    href="https://mlb.tickets.com/?orgId=58189&agency=MILB_MPV&eventId=27339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[hsl(220,35%,12%)] text-[hsl(40,20%,95%)] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[hsl(220,35%,20%)] transition-colors"
                  >
                    Get Tickets Now <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Event Highlights */}
                <div>
                  <h3 className="text-xs tracking-[0.2em] text-gold uppercase mb-4 font-semibold">
                    Evening Highlights
                  </h3>
                  <div className="space-y-3">
                    {[
                      {
                        icon: Shield,
                        title: 'Pre-Game Fire Apparatus Display',
                        desc: 'Round Rock Fire Department trucks and equipment on display outside Dell Diamond prior to gates opening.',
                      },
                      {
                        icon: Music,
                        title: 'Pipes and Drums Performance',
                        desc: 'The Round Rock Fire Department Pipes and Drums Band performs in the main concourse before the game.',
                      },
                      {
                        icon: Flame,
                        title: 'Presentation of Colors',
                        desc: 'The RRFD Honor Guard presents the colors during the National Anthem, performed by a Round Rock fire family member.',
                      },
                      {
                        icon: Users,
                        title: 'Ceremonial First Pitch & Fire Family Recognition',
                        desc: 'Round Rock Fire Assistant Chief Wylie Brownell throws out the ceremonial first pitch, with recognition of fire families who have faced loss.',
                      },
                      {
                        icon: Info,
                        title: 'Between-Innings Firefighter Recognition',
                        desc: 'On-field moments recognizing active-duty firefighters serving the Round Rock community.',
                      },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-3 bg-[hsl(220,30%,18%)] border border-white/[0.06] rounded-lg p-4"
                      >
                        <item.icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-[hsl(40,20%,95%)] text-sm font-semibold">{item.title}</h4>
                          <p className="text-[hsl(40,20%,55%)] text-xs leading-relaxed mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Game Info */}
                <div className="bg-[hsl(220,30%,18%)] border border-white/[0.06] rounded-xl p-6">
                  <h3 className="text-xs tracking-[0.2em] text-gold uppercase mb-3 font-semibold">
                    Game Details
                  </h3>
                  <p className="text-[hsl(40,20%,95%)] text-sm mb-1">Round Rock Express vs. Salt Lake Bees</p>
                  <p className="text-[hsl(40,20%,55%)] text-sm">Friday, May 29, 2026 &middot; 7:05 PM First Pitch</p>
                  <p className="text-[hsl(40,20%,55%)] text-sm">Dell Diamond, 3400 E. Palm Valley Blvd., Round Rock, TX 78665</p>
                </div>

                {/* Media */}
                <div className="bg-[hsl(220,30%,18%)] border border-white/[0.06] rounded-xl p-6">
                  <h3 className="text-xs tracking-[0.2em] text-gold uppercase mb-3 font-semibold">
                    Media Availability
                  </h3>
                  <p className="text-[hsl(40,20%,60%)] text-sm leading-relaxed">
                    Foundation leaders, fire families, and active-duty firefighters are available for
                    pre-game interviews. Members of the media may request interviews by contacting
                    the Round Rock Fire Foundation.
                  </p>
                  <p className="text-[hsl(40,20%,40%)] text-xs mt-3">
                    Contact: Diedra Brownell, Executive Director &middot; (512) 967-1007 &middot; info@roundrockfirefoundation.org
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[hsl(43,60%,30%)]/10 rounded-full blur-[150px]" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-[hsl(40,20%,95%)] mb-4">
              Baseball, <span className="text-gold">Fireworks</span> &amp; Gratitude
            </h2>
            <p className="text-[hsl(40,20%,55%)] text-sm mb-8">
              Let's Celebrate Round Rock's Firefighters
            </p>
            <a
              href="https://mlb.tickets.com/?orgId=58189&agency=MILB_MPV&eventId=27339"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-[hsl(220,35%,12%)] px-8 py-4 rounded-full text-base font-bold hover:bg-[hsl(43,75%,65%)] transition-colors"
            >
              Get Tickets — Code FIRE26 <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
