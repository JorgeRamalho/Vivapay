/**
 * VivaPay — JavaScript vanilla
 * Animações de scroll, interações e utilitários complementares ao React
 */

function bootApp() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
}

bootApp()

function init() {
  initScrollReveal()
  initSmoothAnchors()
  initParallaxOrbs()
  initCounterAnimation()
}

/** Revela elementos ao entrar no viewport */
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal')

  if (!reveals.length) {
    // React pode ainda não ter renderizado — observar o root
    const observer = new MutationObserver(() => {
      const items = document.querySelectorAll('.reveal')
      if (items.length) {
        observer.disconnect()
        observeReveals(items)
      }
    })
    observer.observe(document.getElementById('root'), { childList: true, subtree: true })
    return
  }

  observeReveals(reveals)
}

function observeReveals(elements) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  )

  elements.forEach((el, i) => {
    el.style.transitionDelay = `${(i % 4) * 0.1}s`
    io.observe(el)
  })
}

/** Scroll suave para âncoras internas */
function initSmoothAnchors() {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (!link) return

    const id = link.getAttribute('href')
    if (id === '#') return

    const target = document.querySelector(id)
    if (!target) return

    e.preventDefault()
    const headerOffset = 72
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset

    window.scrollTo({ top, behavior: 'smooth' })
  })
}

/** Parallax sutil nos orbs do hero */
function initParallaxOrbs() {
  const orbs = document.querySelectorAll('.hero-orb')
  if (!orbs.length) return

  let ticking = false

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scroll = window.scrollY
        orbs.forEach((orb, i) => {
          const speed = 0.05 + i * 0.03
          orb.style.transform = `translateY(${scroll * speed}px)`
        })
        ticking = false
      })
      ticking = true
    }
  }, { passive: true })
}

/** Anima contadores do hero quando visíveis */
function initCounterAnimation() {
  const stats = document.querySelectorAll('.hero-stat-value')
  if (!stats.length) return

  const targets = [
    { el: stats[0], end: 9, suffix: '+' },
    { el: stats[1], end: 500, suffix: 'k+' },
    { el: stats[2], end: 100, suffix: '%' },
  ]

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          targets.forEach(({ el, end, suffix }) => animateCounter(el, end, suffix))
          io.disconnect()
        }
      })
    },
    { threshold: 0.5 }
  )

  const hero = document.querySelector('.hero-stats')
  if (hero) io.observe(hero)
}

function animateCounter(el, end, suffix) {
  const duration = 2000
  const start = performance.now()

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    const current = Math.round(end * eased)
    el.textContent = `${current}${suffix}`
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

/** API pública para integração externa */
window.VivaPay = {
  getRegistrations() {
    return JSON.parse(localStorage.getItem('vivapay_registrations') || '[]')
  },
  clearRegistrations() {
    localStorage.removeItem('vivapay_registrations')
  },
}
