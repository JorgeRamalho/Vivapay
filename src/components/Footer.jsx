import Logo from './Logo'

const footerLinks = {
  Produtos: ['Vale-Refeição', 'Vale-Alimentação', 'Vale Café & Lanche', 'Vale Extra', 'Mobilidade', 'Multibenefícios'],
  Empresa: ['Sobre nós', 'Carreiras', 'Imprensa', 'Blog'],
  Suporte: ['Central de ajuda', 'Fale conosco', 'Ouvidoria', 'FAQ'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              VivaPay — Seu cartão de super benefícios.
              Tecnologia, flexibilidade e confiança para transformar
              a experiência de benefícios corporativos no Brasil.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="YouTube">▶️</a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-col" key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map((link) => (
                  <li key={link}><a href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>© 2026 VivaPay Benefícios Ltda. Todos os direitos reservados.</span>
          <span>CNPJ 00.000.000/0001-00 · Política de Privacidade · Termos de Uso</span>
        </div>
      </div>
    </footer>
  )
}
