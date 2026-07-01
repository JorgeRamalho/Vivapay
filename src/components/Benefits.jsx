const benefits = [
  {
    icon: '🍽️',
    title: 'Vale-Refeição',
    desc: 'Almoço e jantar nos melhores restaurantes, lanchonetes e delivery credenciados em todo o Brasil.',
    accent: 'linear-gradient(90deg, #f97316, #fb923c)',
  },
  {
    icon: '🛒',
    title: 'Vale-Alimentação',
    desc: 'Compras em supermercados, mercearias e hortifrútis. Alimentação saudável para toda a família.',
    accent: 'linear-gradient(90deg, #facc15, #ef4444)',
  },
  {
    icon: '☕',
    title: 'Vale Café & Lanche',
    desc: 'Cafés, padarias, lanchonetes e snacks ao longo do dia. Energia para suas pausas com praticidade e sabor.',
    accent: 'linear-gradient(90deg, #92400e, #f59e0b)',
  },
  {
    icon: '🚗',
    title: 'Mobilidade',
    desc: 'Transporte, combustível, estacionamento e aplicativos de mobilidade urbana integrados.',
    accent: 'linear-gradient(90deg, #6366f1, #818cf8)',
  },
  {
    icon: '💊',
    title: 'Saúde & Bem-estar',
    desc: 'Farmácias, academias, planos de saúde complementar e telemedicina em uma carteira dedicada.',
    accent: 'linear-gradient(90deg, #ec4899, #f472b6)',
  },
  {
    icon: '🎭',
    title: 'Cultura & Educação',
    desc: 'Cinema, teatro, museus, cursos e livros. Invista no seu desenvolvimento pessoal.',
    accent: 'linear-gradient(90deg, #8b5cf6, #a78bfa)',
  },
  {
    icon: '🎁',
    title: 'Benefícios Flexíveis',
    desc: 'Transfira saldos entre carteiras com um toque. Flexibilidade total como Caju e Flash.',
    accent: 'linear-gradient(90deg, #dc2626, #facc15)',
  },
  {
    icon: '✨',
    title: 'Vale Extra',
    desc: 'Crédito adicional para necessidades do dia a dia: presentes, emergências e gastos pessoais com total liberdade.',
    accent: 'linear-gradient(90deg, #ea580c, #facc15)',
  },
]

export default function Benefits() {
  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">✦ Multibenefícios</span>
          <h2 className="section-title">Tudo o que você precisa em um só cartão</h2>
          <p className="section-subtitle">
            Inspirado nas melhores soluções do mercado — Pluxee, Caju, Flash e Alelo —
            o VivaPay reúne até 9 carteiras virtuais com gestão 100% digital.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b) => (
            <article
              className="benefit-card reveal"
              key={b.title}
              style={{ '--card-accent': b.accent }}
            >
              <div className="benefit-icon" aria-hidden="true">{b.icon}</div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
