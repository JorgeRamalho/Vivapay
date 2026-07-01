const steps = [
  {
    number: '1',
    title: 'Cadastre-se gratuitamente',
    desc: 'Preencha o formulário de lançamento e garanta cupons exclusivos de inauguração com até 30% de desconto.',
  },
  {
    number: '2',
    title: 'Receba seu cartão virtual',
    desc: 'Ative instantaneamente pelo app VivaPay. Cartão físico chega em até 5 dias úteis, sem custo.',
  },
  {
    number: '3',
    title: 'Viva seus benefícios',
    desc: 'Gerencie saldos, transfira entre carteiras e acompanhe gastos em tempo real — como um app bancário.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section how-it-works" id="como-funciona">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">✦ Simples assim</span>
          <h2 className="section-title">Como funciona o VivaPay</h2>
          <p className="section-subtitle">
            Em três passos você já está aproveitando todos os seus super benefícios.
            Rápido, seguro e sem burocracia.
          </p>
        </div>

        <div className="steps">
          {steps.map((step) => (
            <div className="step reveal" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
