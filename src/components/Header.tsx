import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-[1000] bg-dark transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_4px_24px_rgba(26,26,46,0.4)]' : ''
      }`}
    >
      <div className="max-w-content mx-auto px-6 h-[72px] flex items-center justify-between">
        <a href="#" className="font-display text-[1.6rem] font-bold text-white">
          Stellar<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[rgba(255,255,255,0.75)] hover:text-white text-[0.9rem] font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-accent text-dark px-6 py-2.5 rounded-lg font-bold text-[0.9rem] hover:bg-accent-hover hover:-translate-y-px transition-all duration-200"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
          <span className="block w-6 h-[2px] bg-white" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-dark border-t border-[rgba(255,255,255,0.08)] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[rgba(255,255,255,0.75)] hover:text-white text-[0.9rem] font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-dark px-6 py-2.5 rounded-lg font-bold text-[0.9rem] text-center hover:bg-accent-hover transition-colors duration-200"
          >
            Get Started
          </a>
        </nav>
      )}
    </header>
  )
}
