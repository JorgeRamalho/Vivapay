const features = [
  {
    icon: '📱',
    title: 'Interface intuitiva',
    desc: 'Design app-first inspirado nas melhores fintechs do Brasil. Navegação fluida e acessível.',
  },
  {
    icon: '🔄',
    title: 'Transferência de saldos',
    desc: 'Mova valores entre carteiras de refeição, alimentação e mobilidade em segundos.',
  },
  {
    icon: '📊',
    title: 'Extrato em tempo real',
    desc: 'Acompanhe cada transação com categorização automática e alertas personalizados.',
  },
  {
    icon: '🎯',
    title: 'Ofertas exclusivas',
    desc: 'Cashback, cupons e parcerias com restaurantes e lojas credenciadas.',
  },
]

const wallets = [
  { icon: '🍽️', name: 'Refeição', value: 'R$ 680,00' },
  { icon: '🛒', name: 'Alimentação', value: 'R$ 420,00' },
  { icon: '🚗', name: 'Mobilidade', value: 'R$ 150,00' },
  { icon: '💊', name: 'Saúde', value: 'R$ 200,00' },
]

export default function AppPreview() {
  return (
    <section className="section app-preview" id="app">
      <div className="container">
        <div className="app-content">
          <div className="app-features">
            <div className="section-header section-header--left reveal">
              <span className="section-tag">✦ App VivaPay</span>
              <h2 className="section-title">Benefícios na palma da mão</h2>
              <p className="section-subtitle">
                Experiência mobile premium com usabilidade de app bancário.
                Tudo que você precisa, onde e quando quiser.
              </p>
            </div>

            {features.map((f) => (
              <div className="app-feature reveal" key={f.title}>
                <div className="app-feature-icon" aria-hidden="true">{f.icon}</div>
                <div className="app-feature-text">
                  <h4>{f.title}</h4>
                  <p>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="phone-mockup reveal" aria-label="Preview do app VivaPay">
            <div className="phone-screen">
              <div className="phone-header">
                <div className="phone-greeting">Olá, Maria 👋</div>
                <div className="phone-balance-label">Saldo total disponível</div>
                <div className="phone-balance">R$ 1.450,00</div>
              </div>
              <div className="phone-wallets">
                {wallets.map((w) => (
                  <div className="phone-wallet" key={w.name}>
                    <span className="phone-wallet-icon" aria-hidden="true">{w.icon}</span>
                    <div className="phone-wallet-info">
                      <div className="phone-wallet-name">{w.name}</div>
                      <div className="phone-wallet-value">{w.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
