import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  ExternalLink,
  Newspaper,
  Radio,
  Calendar,
  FileText,
  Play,
  ArrowRight,
} from 'lucide-react'

/* ─── Featured Coverage Data ─── */
const featuredCoverage = [
  {
    title: 'Round Rock nonprofit launches to support firefighters',
    outlet: 'KXAN',
    date: 'August 9, 2025',
    description:
      'The Round Rock Fire Foundation offers a new model of fire-family support, combining wellness, crisis relief, and community integration to uplift firefighters and their loved ones. According to Assistant Chief Wylie Brownell, the foundation is setting a new standard in caring for fire families.',
    image: '/images/press-kxan-real.jpg',
    href: 'https://www.kxan.com/video/round-rock-nonprofit-launches-to-support-firefighters/10968718/',
    articleHref: 'https://www.kxan.com/news/local/round-rock/round-rock-nonprofit-launches-to-support-firefighters/',
    type: 'video' as const,
  },
  {
    title: 'New nonprofit to hold first fundraising event supporting Round Rock firefighters',
    outlet: 'Community Impact',
    date: 'November 4, 2025',
    description:
      'The Round Rock Fire Foundation will hold its first fundraising event Nov. 8 to raise money for the health, wellness and resilience of fire fighters and their families. The foundation will hold the Blazing Paddles Pickleball Tournament 10 a.m.–6 p.m. Nov. 8, at Cedar Ridge High School, 2801 Gattis School Road, Round Rock.',
    image: '/images/blazing-paddles-logo-light.jpg',
    href: 'https://communityimpact.com/austin/round-rock/nonprofit/2025/11/03/new-nonprofit-to-hold-first-fundraising-event-supporting-round-rock-firefighters/',
    type: 'article' as const,
  },
]

/* ─── Foundation News Data ─── */
const foundationNews = [
  {
    title: 'Exploring Life & Business with Diedra Brownell of Round Rock Fire Foundation',
    outlet: 'Voyage Austin',
    date: '2025',
    description:
      'An in-depth interview with RRFF Executive Director Diedra Brownell about the Foundation\'s mission, her personal story, and the vision for supporting fire families in Round Rock.',
    image: '/images/diedra-brownell.jpg',
    href: 'https://voyageaustin.com/interview/exploring-life-business-with-diedra-brownell-of-round-rock-fire-foundation',
    type: 'article' as const,
  },
]

/* ─── Press Release Data ─── */
const pressReleases = [
  {
    title: 'Round Rock Express and Round Rock Fire Foundation Unite for Inaugural "Round Rock Fire Foundation Night" at Dell Diamond',
    date: 'May 29, 2026',
    excerpt:
      'The Round Rock Express and the Round Rock Fire Foundation (RRFF) are partnering for the inaugural Round Rock Fire Foundation Night at Dell Diamond on Thursday, May 29, when the Express host the Salt Lake Bees with a 7:05 p.m. first pitch. The special evening transforms a night at the ballpark into a community-wide tribute to the firefighters and fire families of Central Texas. Pre-Game Fire Apparatus Display, ceremonial first pitch by a Round Rock fire family, between-innings tributes honoring fire families who have faced unimaginable loss, and Foundation information booths. "When we lost our daughter, Bailey, the love and support from our fire family and our community helped us through the most difficult time in our lives," said Wylie Brownell, Assistant Chief of the Round Rock Fire Department. 6:00 p.m. Touch-A-Truck, 7:05 p.m. First Pitch at Dell Diamond, 3400 E. Palm Valley Blvd., Round Rock, TX 78665. Tickets at milb.com/round-rock/tickets with coupon code FIRE26.',
    contact: 'Diedra Brownell, Executive Director — (512) 967-1007 — info@roundrockfirefoundation.org',
  },
]

/* ─── Media Contact Card ─── */
function MediaContactCard() {
  return (
    <div className="bg-[hsl(220,15%,8%)] rounded-xl p-8">
      <div className="flex items-center gap-2 mb-4">
        <Newspaper className="w-5 h-5 text-gold" />
        <span className="text-xs tracking-[0.15em] text-gold uppercase">
          Media Inquiries
        </span>
      </div>
      <h3 className="text-white text-xl font-light mb-4">
        For press and media requests
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">
        We welcome opportunities to share our story. For interview requests, press
        kit materials, or additional information about the Round Rock Fire
        Foundation, please reach out.
      </p>
      <div className="space-y-3">
        <a
          href="mailto:info@roundrockfirefoundation.org"
          className="text-gold text-sm hover:underline flex items-center gap-2"
        >
          <FileText className="w-4 h-4" />
          info@roundrockfirefoundation.org
        </a>
        <a
          href="tel:5129671007"
          className="text-white/50 text-sm hover:text-white flex items-center gap-2 transition-colors"
        >
          <Radio className="w-4 h-4" />
          (512) 967-1007
        </a>
      </div>
    </div>
  )
}

/* ─── Featured Coverage Card ─── */
function FeaturedCard({
  item,
}: {
  item: (typeof featuredCoverage)[0]
}) {
  return (
    <div className="press-card bg-white rounded-xl overflow-hidden border border-[hsl(40,15%,90%)]">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-56 object-contain bg-[hsl(40,15%,96%)]"
        />
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors cursor-pointer">
              <Play className="w-6 h-6 text-[hsl(220,15%,20%)] ml-1" />
            </div>
          </div>
        )}
        <div className="absolute top-4 left-4 bg-gold text-[hsl(220,15%,8%)] text-xs font-semibold px-3 py-1 rounded-full">
          {item.type === 'video' ? 'Video' : 'Article'}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gold text-xs font-semibold">{item.outlet}</span>
          <span className="text-[hsl(220,15%,60%)] text-xs">&mdash;</span>
          <span className="text-[hsl(220,15%,60%)] text-xs">{item.date}</span>
        </div>
        <h3 className="text-[hsl(220,15%,20%)] text-lg font-semibold mb-3 leading-tight">
          &ldquo;{item.title}&rdquo;
        </h3>
        <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed mb-4">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-3">
          {item.type === 'video' && (
            <>
              {'articleHref' in item && item.articleHref && (
                <a
                  href={item.articleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-sm inline-flex items-center gap-1 hover:underline font-medium"
                >
                  Read Article <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(220,15%,50%)] text-sm inline-flex items-center gap-1 hover:text-gold transition-colors"
              >
                Watch Video <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </>
          )}
          {item.type !== 'video' && item.href && item.href !== '#' && (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold text-sm inline-flex items-center gap-1 hover:underline font-medium"
            >
              Read Article <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── Foundation News Card ─── */
function NewsCard({
  item,
}: {
  item: (typeof foundationNews)[0]
}) {
  return (
    <div className="press-card bg-white rounded-xl overflow-hidden border border-[hsl(40,15%,90%)] flex flex-col">
      {item.image && (
        <div className="relative">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-56 object-contain bg-[hsl(40,15%,96%)]"
          />
        </div>
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-gold text-xs font-semibold">{item.outlet}</span>
          {item.date && (
            <>
              <span className="text-[hsl(220,15%,60%)] text-xs">&mdash;</span>
              <span className="text-[hsl(220,15%,60%)] text-xs">{item.date}</span>
            </>
          )}
        </div>
        <h3 className="text-[hsl(220,15%,20%)] text-base font-semibold mb-2 leading-tight">
          {item.title}
        </h3>
        <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed mb-4 flex-1">
          {item.description}
        </p>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold text-sm inline-flex items-center gap-1 hover:underline font-medium"
        >
          Read More <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  )
}

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center bg-[hsl(220,15%,8%)] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/press-hero.jpg"
          alt="Firefighter gear"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220,15%,8%)] via-[hsl(220,15%,8%)]/70 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <h1 className="text-5xl md:text-7xl font-light text-white mb-4">
          Press Room
        </h1>
        <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
          The Round Rock Fire Foundation is proud to share our story with the
          community and the press. In this section, you'll find our latest news
          releases, recent media features, and resources for anyone wanting to learn
          more about our mission.
        </p>
      </div>
    </section>
  )
}

/* ─── Featured Coverage Section ─── */
function FeaturedSection() {
  return (
    <section className="bg-[hsl(40,20%,94%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Radio className="w-5 h-5 text-gold" />
          <span className="text-xs tracking-[0.15em] text-gold uppercase font-semibold">
            Featured Coverage
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredCoverage.map((item) => (
            <FeaturedCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Foundation News Section ─── */
function FoundationNewsSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-12">
          <Newspaper className="w-5 h-5 text-gold" />
          <span className="text-xs tracking-[0.15em] text-gold uppercase font-semibold">
            Foundation News
          </span>
        </div>

        <div className="max-w-md mx-auto">
          {foundationNews.map((item) => (
            <NewsCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Press Releases Section ─── */
function PressReleasesSection() {
  return (
    <section className="bg-[hsl(40,20%,94%)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Press Releases */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-5 h-5 text-gold" />
              <span className="text-xs tracking-[0.15em] text-gold uppercase font-semibold">
                Press Releases
              </span>
            </div>

            <div className="space-y-6">
              {pressReleases.map((release) => (
                <div
                  key={release.title}
                  className="bg-white rounded-xl p-6 border border-[hsl(40,15%,90%)] hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-gold text-xs font-semibold">{release.date}</span>
                  </div>
                  <h3 className="text-[hsl(220,15%,20%)] text-lg font-semibold mb-2">
                    {release.title}
                  </h3>
                  <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed mb-4">
                    {release.excerpt}
                  </p>
                  {'contact' in release && release.contact && (
                    <p className="text-[hsl(220,15%,50%)] text-xs border-t border-[hsl(40,15%,90%)] pt-3 mt-3">
                      Media Contact: {release.contact}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <MediaContactCard />

              {/* Quick Facts */}
              <div className="bg-white rounded-xl p-6 border border-[hsl(40,15%,90%)]">
                <h4 className="text-[hsl(220,15%,20%)] font-semibold text-sm mb-4">
                  Quick Facts
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span className="text-[hsl(220,15%,40%)] text-xs">
                      Established in 2025
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span className="text-[hsl(220,15%,40%)] text-xs">
                      Named in honor of the 1884 founding of the Round Rock Fire Department
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span className="text-[hsl(220,15%,40%)] text-xs">
                      Supports Round Rock Fire Department families through crisis relief,
                      wellness, and community programs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                    <span className="text-[hsl(220,15%,40%)] text-xs">
                      A 501(c)(3) nonprofit organization
                    </span>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-xl p-6 border border-[hsl(40,15%,90%)]">
                <h4 className="text-[hsl(220,15%,20%)] font-semibold text-sm mb-4">
                  Follow Us
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://www.facebook.com/roundrockfirefoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(220,15%,40%)] text-sm hover:text-gold flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/roundrockfirefoundation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(220,15%,40%)] text-sm hover:text-gold flex items-center gap-2 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Brand Statement ─── */
function BrandStatement() {
  return (
    <section className="bg-[hsl(220,15%,8%)] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-white/40 text-sm leading-relaxed mb-4">
          Rooted in a proud tradition of service, the Round Rock Fire Foundation is dedicated
          to standing beside our firefighters, their families, and the community of Round Rock.
        </p>
        <p className="text-white/60 text-lg italic mb-2">
          Our family mission is to show up for those who show up for our community.
        </p>
        <p className="text-gold text-xs uppercase tracking-wider">
          Supporting Round Rock Fire Department Families
        </p>
      </div>
    </section>
  )
}

/* ─── Main Press Room Page ─── */
export default function PressRoomPage() {
  useEffect(() => {
    document.title = 'Press Room — Round Rock Fire Foundation'
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSection />
        <FoundationNewsSection />
        <PressReleasesSection />
        <BrandStatement />
      </main>
      <Footer />
    </div>
  )
}
