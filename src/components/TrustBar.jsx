const trustItems = [
  { icon: '🔒', text: 'Dados protegidos com criptografia' },
  { icon: '✅', text: 'Conformidade com legislação trabalhista' },
  { icon: '🏆', text: 'Rede credenciada nacional' },
  { icon: '⚡', text: 'Ativação instantânea via app' },
]

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-items">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.text}>
              <span className="trust-icon" aria-hidden="true">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
