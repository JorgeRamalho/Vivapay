export default function Logo({ className = '', light = false }) {
  return (
    <div className={`logo ${className}`}>
      <svg className="logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
        <text
          x="20"
          y="27"
          textAnchor="middle"
          fill="#fff"
          fontFamily="'Outfit', 'DM Sans', sans-serif"
          fontSize="17"
          fontWeight="800"
          letterSpacing="0.5"
        >
          VP
        </text>
        <circle cx="32" cy="8" r="4" fill="#facc15" />
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
