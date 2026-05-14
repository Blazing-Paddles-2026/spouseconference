import { Link } from 'react-router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {
  ArrowLeft,
  Heart,
  Shield,
  Users,
  Home,
  Stethoscope,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react'

/* ─── Hero ─── */
function Hero() {
  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[hsl(220,15%,8%)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,15%,8%)] via-[hsl(220,15%,10%)] to-[hsl(35,30%,15%)] opacity-80" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(35,25%,12%)]/30 to-transparent" />
      <div className="absolute bottom-8 right-4 md:right-12 select-none pointer-events-none">
        <span className="text-[12rem] md:text-[20rem] font-light text-white/[0.03] leading-none tracking-tighter">
          1884
        </span>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-white/40 hover:text-gold text-sm mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-gold" />
          <span className="text-xs tracking-[0.2em] text-gold uppercase font-semibold">
            Signature Fund
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-light text-white leading-[0.95] mb-6">
          The <span className="text-gold">1884</span> Fund
        </h1>
        <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
          Dedicated emergency relief for Round Rock fire families — built so support is ready
          before a family ever has to ask.
        </p>
      </div>
    </section>
  )
}

/* ─── What It Covers ─── */
function WhatItCovers() {
  const areas = [
    {
      icon: Stethoscope,
      title: 'Medical Travel',
      description:
        'Travel and lodging support for fire families facing out-of-area medical care, specialist visits, and treatment that takes them away from home.',
    },
    {
      icon: Home,
      title: 'Home Repairs',
      description:
        'Disaster recovery assistance for fire families whose homes are damaged by fire, storm, or other emergencies.',
    },
    {
      icon: Heart,
      title: 'Family Crisis Support',
      description:
        'Emergency financial assistance for families facing unexpected hardship — funeral costs, urgent bills, and other crises that hit when families are least prepared.',
    },
    {
      icon: Users,
      title: 'Wellness Programs',
      description:
        'Mental health and resilience resources for firefighters and their families — counseling, support groups, and wellness retreats.',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.15em] text-[hsl(220,15%,50%)] uppercase mb-4 block">
            What It Covers
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[hsl(220,15%,15%)] mb-4">
            Built for the moments that matter most.
          </h2>
          <p className="text-[hsl(220,15%,40%)] max-w-2xl mx-auto">
            The 1884 Fund is designed as a dedicated emergency-relief fund — structured so
            support is ready before a family ever has to ask.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {areas.map((area) => (
            <div
              key={area.title}
              className="bg-[hsl(40,15%,96%)] rounded-xl p-8 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                <area.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-[hsl(220,15%,20%)] text-lg font-semibold mb-2">
                {area.title}
              </h3>
              <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How It Works ─── */
function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'A need arises.',
      desc: 'A fire family faces medical travel, home repairs after disaster, a family crisis, or financial hardship.',
    },
    {
      num: '02',
      title: 'The Foundation responds.',
      desc: 'RRFF activates The 1884 Fund to provide structured, timely support — with care and discretion.',
    },
    {
      num: '03',
      title: 'The family is supported.',
      desc: 'Help arrives: travel covered, repairs funded, crisis assistance delivered, wellness resources connected.',
    },
  ]

  return (
    <section className="bg-[hsl(40,20%,94%)] py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.15em] text-gold uppercase mb-4 block">
            How It Works
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[hsl(220,15%,15%)] mb-4">
            Support that shows up when it matters.
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-xl p-6 md:p-8 flex gap-6 items-start"
            >
              <span className="text-gold text-2xl font-bold">{step.num}</span>
              <div>
                <h3 className="text-[hsl(220,15%,20%)] text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-[hsl(220,15%,40%)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── How Gifts Are Used ─── */
function GiftUsage() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.15em] text-[hsl(220,15%,50%)] uppercase mb-4 block">
            Transparency
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-[hsl(220,15%,15%)] mb-4">
            How your gift is used.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-[hsl(220,15%,20%)] text-lg font-semibold mb-4">
              Every dollar goes toward fire family support.
            </h3>
            {[
              'Emergency medical travel and lodging',
              'Home repair and disaster recovery',
              'Family crisis financial assistance',
              'Mental health and wellness programs',
              'Firefighter spouse and family support',
              'Community events that build resilience',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-[hsl(220,15%,35%)] text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-[hsl(40,15%,96%)] rounded-xl p-8">
            <h3 className="text-[hsl(220,15%,20%)] text-lg font-semibold mb-4">
              Trusted giving pathways.
            </h3>
            <p className="text-[hsl(220,15%,35%)] text-sm leading-relaxed mb-4">
              Gifts to the Round Rock Fire Foundation are made through trusted giving pathways
              with Central Texas Community Foundation and Network for Good. Donors receive a
              tax-deductible receipt.
            </p>
            <div className="space-y-2">
              {['Central Texas Community Foundation', 'Network for Good'].map((name) => (
                <div
                  key={name}
                  className="bg-white rounded-lg px-4 py-3 text-[hsl(220,15%,35%)] text-sm font-medium border border-[hsl(40,15%,90%)]"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="bg-[hsl(220,15%,8%)] py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[hsl(35,30%,20%)]/10 rounded-full blur-[150px]" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
          Help launch <span className="text-gold">The 1884 Fund</span>.
        </h2>
        <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
          Founding Legacy Donors and community partners help establish long-term care and
          support for Round Rock fire families. Your gift helps build a safety net that is
          ready before a family ever has to ask.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-[hsl(220,15%,8%)] px-8 py-4 rounded-full text-base font-bold hover:bg-[hsl(43,75%,65%)] transition-colors inline-flex items-center gap-2"
          >
            Become a Founding Legacy Donor <ExternalLink className="w-5 h-5" />
          </a>
          <Link
            to="/"
            className="border border-white/20 text-white px-6 py-4 rounded-full text-sm font-medium hover:border-white/40 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ─── Main Page ─── */
export default function Fund1884Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhatItCovers />
        <HowItWorks />
        <GiftUsage />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
