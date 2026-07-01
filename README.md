# VivaPay — Seu cartão de super benefícios

Site institucional de lançamento da **VivaPay**, empresa de cartão multibenefícios (refeição, alimentação, mobilidade, saúde e mais).

## Identidade visual

| Elemento | Definição |
|----------|-----------|
| **Nome** | VivaPay |
| **Slogan principal** | Seu cartão de super benefícios |
| **Slogan secundário** | Viva mais. Pague melhor. |
| **Paleta** | Teal/verde-esmeralda (confiança + alimentação) + coral/laranja (energia) |
| **Tipografia** | Outfit (títulos) + DM Sans (corpo) |
| **Logo** | SVG com pulso vital + detalhe laranja — em `src/components/Logo.jsx` |

## Estrutura de arquivos

```
Projeto-VivaPay/
├── index.html          # Ponto de entrada HTML
├── style.css           # Estilos globais e design system
├── js/
│   └── app.js          # JavaScript vanilla (scroll, animações, API)
├── src/
│   ├── main.jsx        # Bootstrap React
│   ├── App.jsx         # Composição das seções
│   └── components/     # Componentes React
├── public/
│   └── favicon.svg
└── package.json
```

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`

## Build para produção

```bash
npm run build
npm run preview
```

## Formulário de cadastro

O formulário de inauguração coleta: nome, data de nascimento, cidade, telefone, e-mail e endereço. Os dados são salvos em `localStorage` (desenvolvimento). Em produção, integre com sua API backend.

```js
// Consultar cadastros no console do navegador
VivaPay.getRegistrations()
```

## Seções do site

1. **Hero** — Slogan, CTAs, cartão animado 3D, estatísticas
2. **Trust Bar** — Selos de confiança
3. **Benefícios** — 6 carteiras multibenefícios
4. **Como Funciona** — 3 passos
5. **App Preview** — Mockup mobile app-like
6. **Cadastro** — Formulário completo com validação
7. **CTA Banner** — Chamada final
8. **Footer** — Links e redes sociais

## Responsividade

Layout totalmente responsivo com breakpoints em 1024px, 768px e 480px. Menu mobile com painel lateral.
