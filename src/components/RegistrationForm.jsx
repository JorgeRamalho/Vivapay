import { useState } from 'react'

const initialForm = {
  nome: '',
  dataNascimento: '',
  cidade: '',
  telefone: '',
  email: '',
  endereco: '',
}

const perks = [
  'Até 30% de desconto na primeira recarga',
  'Cashback exclusivo de inauguração',
  'Cartão virtual liberado na hora',
  'Frete grátis do cartão físico',
  'Acesso antecipado ao app VivaPay',
]

function validate(form) {
  const errors = {}

  if (!form.nome.trim() || form.nome.trim().length < 3) {
    errors.nome = 'Informe seu nome completo'
  }

  if (!form.dataNascimento) {
    errors.dataNascimento = 'Informe sua data de nascimento'
  } else {
    const birth = new Date(form.dataNascimento)
    const today = new Date()
    const age = today.getFullYear() - birth.getFullYear()
    if (age < 16 || age > 120) {
      errors.dataNascimento = 'Data de nascimento inválida'
    }
  }

  if (!form.cidade.trim()) {
    errors.cidade = 'Informe sua cidade'
  }

  if (!form.telefone.trim()) {
    errors.telefone = 'Informe seu telefone'
  } else if (!/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(form.telefone.replace(/\s/g, ''))) {
    errors.telefone = 'Telefone inválido. Ex: (11) 99999-9999'
  }

  if (!form.email.trim()) {
    errors.email = 'Informe seu e-mail'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'E-mail inválido'
  }

  if (!form.endereco.trim() || form.endereco.trim().length < 10) {
    errors.endereco = 'Informe seu endereço completo'
  }

  return errors
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ''
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

export default function RegistrationForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = name === 'telefone' ? formatPhone(value) : value
    setForm((prev) => ({ ...prev, [name]: next }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)

    // Simula envio — em produção, integrar com API/backend
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const registrations = JSON.parse(localStorage.getItem('vivapay_registrations') || '[]')
    registrations.push({ ...form, registeredAt: new Date().toISOString() })
    localStorage.setItem('vivapay_registrations', JSON.stringify(registrations))

    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="section registration" id="cadastro">
      <div className="container">
        <div className="registration-wrapper">
          <div className="registration-info reveal">
            <span className="section-tag">🎉 Lançamento</span>
            <h2 className="section-title">Garanta seus cupons de inauguração</h2>
            <p className="section-subtitle">
              Cadastre-se agora e seja um dos primeiros a experimentar o VivaPay.
              Cupons limitados para os primeiros 1.000 cadastros!
            </p>

            <div className="registration-perks">
              {perks.map((perk) => (
                <div className="registration-perk" key={perk}>
                  <span className="registration-perk-icon">✓</span>
                  {perk}
                </div>
              ))}
            </div>
          </div>

          <div className="form-card reveal">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon" aria-hidden="true">🎊</div>
                <h3>Cadastro realizado com sucesso!</h3>
                <p>
                  Parabéns, {form.nome.split(' ')[0]}! Seus cupons de inauguração
                  serão enviados para <strong>{form.email}</strong> em breve.
                </p>
              </div>
            ) : (
              <>
                <h3 className="form-title">Formulário de cadastro</h3>
                <p className="form-subtitle">
                  Preencha seus dados para receber cupons exclusivos de desconto.
                </p>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="nome">
                        Nome completo <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        className={`form-input ${errors.nome ? 'error' : ''}`}
                        placeholder="Seu nome completo"
                        value={form.nome}
                        onChange={handleChange}
                        autoComplete="name"
                      />
                      {errors.nome && <span className="form-error">{errors.nome}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="dataNascimento">
                        Data de nascimento <span className="required">*</span>
                      </label>
                      <input
                        type="date"
                        id="dataNascimento"
                        name="dataNascimento"
                        className={`form-input ${errors.dataNascimento ? 'error' : ''}`}
                        value={form.dataNascimento}
                        onChange={handleChange}
                      />
                      {errors.dataNascimento && (
                        <span className="form-error">{errors.dataNascimento}</span>
                      )}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cidade">
                        Cidade <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        className={`form-input ${errors.cidade ? 'error' : ''}`}
                        placeholder="Sua cidade"
                        value={form.cidade}
                        onChange={handleChange}
                      />
                      {errors.cidade && <span className="form-error">{errors.cidade}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="telefone">
                        Telefone <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        className={`form-input ${errors.telefone ? 'error' : ''}`}
                        placeholder="(11) 99999-9999"
                        value={form.telefone}
                        onChange={handleChange}
                        autoComplete="tel"
                      />
                      {errors.telefone && <span className="form-error">{errors.telefone}</span>}
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        E-mail <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>

                    <div className="form-group full-width">
                      <label className="form-label" htmlFor="endereco">
                        Endereço completo <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        className={`form-input ${errors.endereco ? 'error' : ''}`}
                        placeholder="Rua, número, bairro, CEP"
                        value={form.endereco}
                        onChange={handleChange}
                        autoComplete="street-address"
                      />
                      {errors.endereco && <span className="form-error">{errors.endereco}</span>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg form-submit"
                    disabled={loading}
                  >
                    {loading ? 'Enviando...' : '🎁 Quero meus cupons de desconto'}
                  </button>

                  <p className="form-privacy">
                    Ao cadastrar-se, você concorda com nossa Política de Privacidade.
                    Seus dados estão protegidos e não serão compartilhados com terceiros.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
