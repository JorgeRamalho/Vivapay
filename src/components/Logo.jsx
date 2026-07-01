export default function Logo({ className = '', light = false }) {
  return (
    <div className={`logo ${className}`}>
      <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
        <path
          d="M10 25 L15 15 L20 22 L25 12 L30 25"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="30" cy="10" r="4" fill="#facc15" />
        <rect x="8" y="28" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.3)" />
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
            <stop stopColor="#facc15" />
            <stop offset="1" stopColor="#dc2626" />
          </linearGradient>
        </defs>
      </svg>
      <span className="logo-text" style={light ? {} : undefined}>
        Viva<span>Pay</span>
      </span>
    </div>
  )
}
