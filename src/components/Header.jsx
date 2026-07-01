import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#app', label: 'App' },
  { href: '#cadastro', label: 'Cupons' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container nav">
          <a href="#" aria-label="VivaPay — Página inicial">
            <Logo />
          </a>

          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">{link.label}</a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#cadastro" className="btn btn-secondary btn-sm">Quero cupons</a>
            <a href="#cadastro" className="btn btn-primary btn-sm">Cadastre-se</a>
            <button
              className="menu-toggle"
              aria-label="Abrir menu"
              onClick={() => setMobileOpen(true)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} onClick={closeMobile}>
        <div className="mobile-nav-panel" onClick={(e) => e.stopPropagation()}>
          <button className="mobile-nav-close" onClick={closeMobile} aria-label="Fechar menu">✕</button>
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMobile}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-actions">
            <a href="#cadastro" className="btn btn-primary" onClick={closeMobile}>Garantir meus cupons</a>
          </div>
        </div>
      </div>
    </>
  )
}
