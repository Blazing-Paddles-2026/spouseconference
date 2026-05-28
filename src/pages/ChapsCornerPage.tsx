import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft, BookOpen, Heart, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('revealed'); obs.unobserve(el) }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return <div ref={ref} className={`reveal-on-scroll ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

export default function ChapsCornerPage() {
  useEffect(() => { document.title = "Chap's Corner — Round Rock Fire Foundation" }, [])

  return (
    <div className="min-h-screen bg-[hsl(0,0%,4%)]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,4%)] via-[hsl(0,0%,6%)] to-[hsl(35,30%,15%)] opacity-80" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[hsl(15,80%,30%)]/15 rounded-full blur-[120px]" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 w-full">
            <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-gold" />
              <span className="text-xs tracking-[0.25em] text-gold uppercase">Chaplain-Led Support</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white leading-[0.95] mb-4">
              Chap's <span className="text-gold">Corner</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              A chaplain-led blog and support resource for Round Rock fire families — encouragement, reflection, and care-centered guidance written by the Chaplain who walks with our firefighters and their loved ones.
            </p>
          </div>
        </section>

        {/* About John Patterson */}
        <section className="bg-[hsl(0,0%,6%)] py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="bg-[hsl(0,0%,10%)] border border-white/[0.06] rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-2 mb-6">
                  <Heart className="w-5 h-5 text-gold" />
                  <span className="text-xs tracking-[0.25em] text-gold uppercase font-semibold">From the Chaplain</span>
                </div>
                <blockquote className="text-white/60 text-xl md:text-2xl font-light leading-relaxed mb-6 italic">
                  "With faith-centered care and intentional support, firefighters can finish their careers stronger, healthier, and more connected than when they began."
                </blockquote>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  John Patterson has served the Round Rock Fire Department as Fire Chaplain since 2019, offering consistent spiritual leadership, care, and support to firefighters and their families.
                </p>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  His connection to the fire service is deeply personal — his son serves as a firefighter with the McKinney Fire Department. John is passionate about ensuring that firefighters are supported as whole people — spiritually, emotionally, relationally, and physically — throughout their careers.
                </p>
                <p className="text-white/30 text-xs mt-6">
                  — John Patterson, Fire Chaplain, Round Rock Fire Department
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Blog Link */}
        <section className="bg-[hsl(0,0%,4%)] py-24">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-5 h-5 text-gold" />
                <span className="text-xs tracking-[0.25em] text-gold uppercase font-semibold">Visit the Blog</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                Read the Latest From <span className="text-gold">Chap's Corner</span>
              </h2>
              <p className="text-white/40 text-sm mb-8 max-w-xl mx-auto">
                encouragement, reflection, and care-centered guidance written by the Chaplain who walks with our firefighters and their loved ones.
              </p>
              <a
                href="https://www.roundrockfirefoundation.org/firechaplain"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gold text-[hsl(0,0%,8%)] px-8 py-4 rounded-full text-base font-bold hover:bg-[hsl(43,75%,65%)] transition-colors"
              >
                Visit Chap's Corner Blog
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
