import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Check, Mail, Star, CreditCard, Building2,
} from 'lucide-react';

function FadeIn({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay }} className={className}>
      {children}
    </motion.div>
  );
}

const tiers = [
  {
    name: 'Chief',
    subtitle: 'National Leadership Partner',
    price: '$5,000',
    featured: true,
    benefits: [
      'Top billing: largest logo placement across conference materials (slides, banners, event signage)',
      'Company logo displayed at our booth at FDIC',
      'Featured sponsor story (dedicated post) shared on event social channels',
      'Priority placement of promotional materials in welcome packets / swag bags',
      'Premier recognition during the event',
    ],
  },
  {
    name: 'Captain',
    subtitle: 'Conference Partner',
    price: '$2,500',
    featured: false,
    benefits: [
      'Logo placement on conference slideshow and event T-shirts',
      'Sponsor spotlight shared on event social media',
      'Included in post-event thank-you email',
      'Promotional materials included in welcome packets or swag',
    ],
  },
  {
    name: 'Lieutenant',
    subtitle: 'Supporting Partner',
    price: '$1,200',
    featured: false,
    benefits: [
      'Enhanced recognition: name + small logo placement on the event slideshow (logo provided by sponsor)',
      'Listed as a supporting sponsor on the event website',
      'Promotional materials included in welcome packets',
    ],
  },
  {
    name: 'Firefighter',
    subtitle: 'Community Supporter',
    price: '$700',
    featured: false,
    benefits: [
      'Name recognition on event slideshow and social media',
      'Option to provide a swag bag item, flyer, or branded item at registration',
    ],
  },
];

/* ─── Sponsor Form Component ─── */
function SponsorFormSection() {
  const [tier, setTier] = useState('');
  const [payment, setPayment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (payment === 'card') {
      const tierLabel = tier === 'chief' ? 'Chief-5000' : tier === 'captain' ? 'Captain-2500' : tier === 'lieutenant' ? 'Lieutenant-1200' : 'Firefighter-700';
      window.open(`https://roundrockfirefoundation.org/donate?tier=${tierLabel}&name=${encodeURIComponent(String(data.name))}&org=${encodeURIComponent(String(data.organization))}`, '_blank');
      setSubmitted(true);
    } else {
      const tierName = tier === 'chief' ? 'Chief ($5,000)' : tier === 'captain' ? 'Captain ($2,500)' : tier === 'lieutenant' ? 'Lieutenant ($1,200)' : 'Firefighter ($700)';
      const subject = `Sponsorship Inquiry - ${tierName} - ${data.name}`;
      const payMethod = payment === 'check' ? 'check' : 'ACH/bank transfer';
      const body = `Sponsorship Inquiry for 2026 National Spouse Conference%0A%0ATier: ${tierName}%0AName: ${data.name}%0AOrganization: ${data.organization || 'N/A'}%0AEmail: ${data.email}%0APhone: ${data.phone || 'N/A'}%0A%0AI would like to pay by ${payMethod}.%0A%0APlease send me the payment instructions.%0A%0AMailing Address for Checks:%0ARound Rock Fire Foundation%0A797 Sam Bass Road, Suite 204%0ARound Rock, TX 78681`;
      window.location.href = `mailto:info@roundrockfirefoundation.org?cc=info@roundrockfirefoundation.org&subject=${encodeURIComponent(subject)}&body=${body}`;
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="py-14 bg-white text-black">
        <FadeIn className="max-w-md mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-black mb-2">
            {payment === 'card' ? "You're Almost Done!" : "Thank You!"}
          </h2>
          <p className="text-black/50 text-sm mb-4">
            {payment === 'card'
              ? "A secure donation page has opened in a new tab. Please complete your payment there. We'll email a confirmation within 24 hours."
              : "Your email has been created with your details and our mailing address (797 Sam Bass Road, Suite 204, Round Rock, TX 78681). Hit send and we'll follow up within 24 hours."}
          </p>
          <p className="text-orange-500 text-sm font-medium">Questions? info@roundrockfirefoundation.org</p>
        </FadeIn>
      </section>
    );
  }

  return (
    <section className="py-14 bg-white text-black">
      <div className="max-w-lg mx-auto px-4">
        <FadeIn className="text-center mb-8">
          <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Partner With Us</p>
          <h2 className="text-2xl font-bold text-black mb-3">Sponsorship Form</h2>
          <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
          <p className="text-black/45 text-xs">Fill out the form below and choose your payment method.</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-black text-xs font-semibold mb-1.5 block">Full Name *</Label>
              <Input id="name" name="name" required className="border-black/15 text-black text-sm rounded-lg h-10" placeholder="Your name" />
            </div>

            {/* Organization */}
            <div>
              <Label htmlFor="organization" className="text-black text-xs font-semibold mb-1.5 block">Organization / Company *</Label>
              <Input id="organization" name="organization" required className="border-black/15 text-black text-sm rounded-lg h-10" placeholder="Company or organization name" />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-black text-xs font-semibold mb-1.5 block">Email Address *</Label>
              <Input id="email" name="email" type="email" required className="border-black/15 text-black text-sm rounded-lg h-10" placeholder="you@company.com" />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-black text-xs font-semibold mb-1.5 block">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" className="border-black/15 text-black text-sm rounded-lg h-10" placeholder="(555) 123-4567" />
            </div>

            {/* Tier Selection */}
            <div>
              <Label className="text-black text-xs font-semibold mb-2 block">Partnership Tier *</Label>
              <RadioGroup value={tier} onValueChange={setTier} className="grid grid-cols-2 gap-2" required>
                <div className={`border rounded-lg p-3 cursor-pointer transition-colors ${tier === 'chief' ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-black/20'}`}>
                  <RadioGroupItem value="chief" id="chief" className="sr-only" />
                  <Label htmlFor="chief" className="cursor-pointer">
                    <p className="font-bold text-black text-sm">Chief</p>
                    <p className="text-orange-500 text-xs font-semibold">$5,000</p>
                  </Label>
                </div>
                <div className={`border rounded-lg p-3 cursor-pointer transition-colors ${tier === 'captain' ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-black/20'}`}>
                  <RadioGroupItem value="captain" id="captain" className="sr-only" />
                  <Label htmlFor="captain" className="cursor-pointer">
                    <p className="font-bold text-black text-sm">Captain</p>
                    <p className="text-orange-500 text-xs font-semibold">$2,500</p>
                  </Label>
                </div>
                <div className={`border rounded-lg p-3 cursor-pointer transition-colors ${tier === 'lieutenant' ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-black/20'}`}>
                  <RadioGroupItem value="lieutenant" id="lieutenant" className="sr-only" />
                  <Label htmlFor="lieutenant" className="cursor-pointer">
                    <p className="font-bold text-black text-sm">Lieutenant</p>
                    <p className="text-orange-500 text-xs font-semibold">$1,200</p>
                  </Label>
                </div>
                <div className={`border rounded-lg p-3 cursor-pointer transition-colors ${tier === 'firefighter' ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-black/20'}`}>
                  <RadioGroupItem value="firefighter" id="firefighter" className="sr-only" />
                  <Label htmlFor="firefighter" className="cursor-pointer">
                    <p className="font-bold text-black text-sm">Firefighter</p>
                    <p className="text-orange-500 text-xs font-semibold">$700</p>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method */}
            {tier && (
              <div>
                <Label className="text-black text-xs font-semibold mb-2 block">Payment Method *</Label>
                <RadioGroup value={payment} onValueChange={setPayment} className="space-y-2" required>
                  <div className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${payment === 'card' ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-black/20'}`}>
                    <RadioGroupItem value="card" id="card" className="sr-only" />
                    <CreditCard className="h-5 w-5 text-orange-500 shrink-0" />
                    <Label htmlFor="card" className="cursor-pointer text-sm text-black">
                      Pay with Credit Card
                      <p className="text-black/50 text-xs">Secure payment via donation page</p>
                    </Label>
                  </div>
                  <div className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${payment === 'check' ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-black/20'}`}>
                    <RadioGroupItem value="check" id="check" className="sr-only" />
                    <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                    <Label htmlFor="check" className="cursor-pointer text-sm text-black">
                      Pay by Check
                      <p className="text-black/50 text-xs">We'll send you payment instructions</p>
                    </Label>
                  </div>
                  <div className={`flex items-center gap-3 border rounded-lg p-3 cursor-pointer transition-colors ${payment === 'ach' ? 'border-orange-500 bg-orange-50' : 'border-black/10 hover:border-black/20'}`}>
                    <RadioGroupItem value="ach" id="ach" className="sr-only" />
                    <Building2 className="h-5 w-5 text-orange-500 shrink-0" />
                    <Label htmlFor="ach" className="cursor-pointer text-sm text-black">
                      ACH / Bank Transfer
                      <p className="text-black/50 text-xs">We'll send you wiring instructions</p>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={!tier || !payment}
              className="w-full bg-orange-500 hover:bg-orange-400 disabled:bg-black/20 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-full text-sm transition-colors"
            >
              {payment === 'card' ? 'Continue to Payment' : 'Submit Sponsorship Inquiry'}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

export default function SponsorshipPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    document.title = 'Sponsorship | 2026 RRFF National Spouse Conference';
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.title = prevTitle;
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#/" className="flex items-center gap-3">
            <img src="/images/nsc-logo-white.png" alt="NSC Logo" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="font-bold text-xs text-white tracking-wide hidden sm:inline">NATIONAL SPOUSE CONFERENCE</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#/" className="text-white/60 text-xs hover:text-orange-500 transition-colors">Back to Conference</a>
            <a href="https://www.roundrockfirefoundation.org/" className="hidden sm:block text-white/60 text-xs hover:text-orange-500 transition-colors">RRFF Home</a>
            <a href="https://forms.gle/VUuMEssGe3cqP4Ge8" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-400 text-white font-semibold px-4 py-2 h-8 text-xs rounded-full">Register</Button>
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/nsc-hero-website.png)' }}>
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-20">
          <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-4">Sponsorship Opportunities</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Partner With Purpose
          </h1>
          <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-4" />
          <p className="text-sm sm:text-base text-white/50 max-w-lg mx-auto leading-relaxed">
            Join us in strengthening fire service families nationwide. Your partnership makes this life-changing conference possible.
          </p>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section className="py-14 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Why Partner</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">Make a Lasting Impact</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-black/45 text-sm max-w-md mx-auto">Your support directly funds programming that strengthens firefighter marriages and builds resilient fire families.</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { title: 'Brand Visibility', desc: 'Your logo and story featured across conference materials, social media, and event signage.' },
                { title: 'Community Connection', desc: 'Connect with fire service families and demonstrate your commitment to first responders.' },
                { title: 'Tax Deductible', desc: 'The Round Rock Fire Foundation is a 501(c)(3) nonprofit. All contributions are tax-deductible.' },
              ].map((item, i) => (
                <div key={i} className="border border-black/10 rounded-2xl p-6 text-center">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-3">
                    <Star className="h-4 w-4 text-orange-500" />
                  </div>
                  <h3 className="font-bold text-black text-sm mb-2">{item.title}</h3>
                  <p className="text-black/40 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TIERS */}
      <section className="py-14 bg-black">
        <div className="max-w-5xl mx-auto px-4">
          <FadeIn className="text-center mb-10">
            <p className="text-orange-500 font-semibold text-xs tracking-[0.2em] uppercase mb-2">Partnership Tiers</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Choose Your Level of Support</h2>
            <div className="w-10 h-0.5 bg-orange-500 mx-auto mb-3" />
            <p className="text-white/45 text-sm max-w-md mx-auto">Four partnership levels designed to fit every budget and goal.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 gap-4">
            {tiers.map((tier, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className={`relative border rounded-2xl p-6 h-full ${tier.featured ? 'border-orange-500/50 bg-orange-500/[0.03]' : 'border-white/10'}`}>
                  {tier.featured && (
                    <span className="absolute -top-2 left-6 px-3 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider">
                      Most Impact
                    </span>
                  )}
                  <div className="flex items-baseline gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="text-white/35 text-xs">{tier.subtitle}</p>
                  </div>
                  <p className="text-3xl font-bold text-orange-500 mb-5">{tier.price}</p>
                  <ul className="space-y-3">
                    {tier.benefits.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-white/55 text-xs leading-relaxed">
                        <Check className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORSHIP FORM */}
      <SponsorFormSection />

      {/* FOOTER */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-sm mx-auto px-4 text-center">
          <a href="#/" className="text-white/30 text-xs hover:text-orange-500 transition-colors">
            &larr; Back to National Spouse Conference
          </a>
        </div>
      </footer>
    </div>
  );
}
