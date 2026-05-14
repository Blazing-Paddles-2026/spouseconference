import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Donate & Impact', path: isHome ? '#fund' : '/#fund', external: false },
    { label: 'Events', path: isHome ? '#events' : '/#events', external: false },
    { label: 'History', path: '/history' },
    { label: 'Press Room', path: '/press-room' },
    { label: 'Volunteer', href: 'https://www.roundrockfirefoundation.org/get-involved' },
    { label: "Chap's Corner", href: 'https://www.roundrockfirefoundation.org/firechaplain' },
  ]

  const handleNavClick = (link: typeof navLinks[0]) => {
    setMobileOpen(false)
    if (link.path?.startsWith('#') && isHome) {
      const el = document.querySelector(link.path)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[hsl(220,15%,8%)]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/rrff-logo-dark.jpg"
              alt="Round Rock Fire Foundation"
              className="h-12 w-auto rounded-sm group-hover:scale-105 transition-transform"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ) : link.path?.startsWith('#') ? (
                <Link
                  key={link.label}
                  to={isHome ? link.path : link.path.replace('#', '/#')}
                  onClick={() => handleNavClick(link)}
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  to={link.path || '/'}
                  className={`text-sm transition-colors ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-[hsl(220,15%,8%)] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[hsl(43,75%,65%)] transition-colors"
            >
              Donate
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[hsl(220,15%,8%)]/98 backdrop-blur-md border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) =>
              link.href ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-gold py-2 transition-colors"
                >
                  {link.label}
                </a>
              ) : link.path?.startsWith('#') ? (
                <Link
                  key={link.label}
                  to={isHome ? link.path : link.path.replace('#', '/')}
                  onClick={() => handleNavClick(link)}
                  className="block text-white/80 hover:text-gold py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  to={link.path || '/'}
                  className={`block py-2 transition-colors ${
                    location.pathname === link.path
                      ? 'text-gold'
                      : 'text-white/80 hover:text-gold'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href="https://ctxcf.networkforgood.com/projects/252774-the-round-rock-fire-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gold text-[hsl(220,15%,8%)] px-5 py-3 rounded-full text-sm font-semibold text-center mt-4"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
