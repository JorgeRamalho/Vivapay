export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" />
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />
      <div className="hero-grid" />

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span className="hero-badge-text hero-badge-text--full">Lançamento exclusivo — Cupons de inauguração</span>
            <span className="hero-badge-text hero-badge-text--short">Cupons de inauguração</span>
          </div>

          <h1 className="hero-title">
            Seu cartão de <span className="highlight">super benefícios</span>
          </h1>

          <p className="hero-slogan">
            Viva mais. Pague melhor. Benefícios que transformam seu dia.
          </p>

          <p className="hero-description">
            Refeição, alimentação, mobilidade, saúde e cultura em um único cartão inteligente.
            Tecnologia de ponta com a simplicidade de um app — porque você merece viver plenamente.
          </p>

          <div className="hero-actions">
            <a href="#cadastro" className="btn btn-primary btn-lg">
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
              Garantir cupons de desconto
            </a>
            <a href="#beneficios" className="btn btn-ghost btn-lg">
              Conhecer benefícios
            </a>
            <a href="#app" className="btn btn-outline-light btn-lg">
              Ver o app
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-value">9+</div>
              <div className="hero-stat-label">Carteiras de benefícios</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">500k+</div>
              <div className="hero-stat-label">Estabelecimentos</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">100%</div>
              <div className="hero-stat-label">Digital e seguro</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="card-float card-float-1">
            <span className="card-float-icon">🍽️</span>
            Vale-refeição ativo
          </div>
          <div className="card-float card-float-2">
            <span className="card-float-icon">✨</span>
            +15% cashback
          </div>

          <div className="card-mockup" aria-label="Cartão VivaPay">
            <div className="card-chip" />
            <div className="card-logo-small">VivaPay</div>
            <div className="card-number">•••• •••• •••• 4829</div>
            <div className="card-footer">
              <div>
                <div className="card-holder">Titular</div>
                <div className="card-holder-name">SEU NOME AQUI</div>
              </div>
              <div className="card-brand">VISA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
