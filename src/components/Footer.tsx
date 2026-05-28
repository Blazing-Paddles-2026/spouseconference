import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,4%)] border-t border-white/5">
      {/* Newsletter CTA */}
      <div className="bg-[hsl(0,0%,6%)] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-light text-white mb-4">
            Help build support before it is needed.
          </h3>
          <p className="text-white/60 text-sm mb-6">
            Stories, events, and one annual ask — sent only when there is something worth saying. To join the list while the signup is being set up, email{' '}
            <a
              href="mailto:info@roundrockfirefoundation.org"
              className="text-gold hover:underline"
            >
              info@roundrockfirefoundation.org
            </a>{' '}
            and we'll add you.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/rrff-logo-transparent.png"
                alt="Round Rock Fire Foundation"
                className="h-16 w-auto rounded-sm"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Honoring heroes. Supporting firefighters. Strengthening our community.
            </p>
            <p className="text-white/30 text-xs mt-4">
              RRFF is a nonpartisan nonprofit and is not associated with any political group, PAC, candidate committee, or advocacy organization.
            </p>
          </div>

          {/* Visit */}
          <div>
            <h4 className="text-xs tracking-[0.15em] text-gold uppercase mb-4">Visit</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.roundrockfirefoundation.org/" className="text-white/60 hover:text-white text-sm transition-colors">
                  RRFF Home
                </a>
              </li>
              <li>
                <a href="https://www.roundrockfirefoundation.org/#/history" className="text-white/60 hover:text-white text-sm transition-colors">
                  History
                </a>
              </li>
              <li>
                <a href="https://www.roundrockfirefoundation.org/#/press-room" className="text-white/60 hover:text-white text-sm transition-colors">
                  Press Room
                </a>
              </li>
              <li>
                <a href="https://www.roundrockfirefoundation.org/#/get-involved" className="text-white/60 hover:text-white text-sm transition-colors">
                  Get Involved
                </a>
              </li>
              <li>
                <a href="https://www.roundrockfirefoundation.org/board/" className="text-white/60 hover:text-white text-sm transition-colors">
                  Board Members
                </a>
              </li>
              <li>
                <a href="https://chap.roundrockfirefoundation.org/firechaplain" className="text-white/60 hover:text-white text-sm transition-colors">
                  Chap's Corner
                </a>
              </li>
            </ul>
          </div>

          {/* Act */}
          <div>
            <h4 className="text-xs tracking-[0.15em] text-gold uppercase mb-4">Act</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <a href="https://www.roundrockfirefoundation.org/sponsor/" className="text-white/60 hover:text-white text-sm transition-colors">
                  Sponsor an event
                </a>
              </li>
              <li>
                <a href="https://www.roundrockfirefoundation.org/volunteer/" className="text-white/60 hover:text-white text-sm transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <span className="text-white/60 text-sm">Legacy donor circle</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs tracking-[0.15em] text-gold uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/40 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">797 Sam Bass Rd #204 &middot; Round Rock, TX 78681</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a
                  href="mailto:info@roundrockfirefoundation.org"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  info@roundrockfirefoundation.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/40 flex-shrink-0" />
                <a
                  href="tel:5129671007"
                  className="text-white/60 hover:text-gold text-sm transition-colors"
                >
                  (512) 967-1007
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/roundrockfirefoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/roundrockfirefoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-gold transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center sm:text-left">
            &copy; 2025 Round Rock Fire Foundation &middot; Gifts made through trusted giving partners
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.roundrockfirefoundation.org/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.roundrockfirefoundation.org/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 text-xs transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
