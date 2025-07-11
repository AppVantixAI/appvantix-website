export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 40" {...props}>
      {/* 3D Cube Icon */}
      <g transform="translate(0, 8)">
        <path
          d="M12 2 L20 6 L20 18 L12 22 L4 18 L4 6 Z"
          fill="#EA580C"
          stroke="#EA580C"
          strokeWidth="0.5"
        />
        <path
          d="M12 2 L20 6 L12 10 L4 6 Z"
          fill="#FB923C"
        />
        <path
          d="M12 10 L12 22 L20 18 L20 6 Z"
          fill="#F97316"
        />
      </g>
      
      {/* AppVantix Text */}
      <g transform="translate(32, 0)">
        <text
          x="0"
          y="16"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#0F172A"
        >
          App
        </text>
        <text
          x="35"
          y="16"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="16"
          fontWeight="700"
          fill="#EA580C"
        >
          Vantix
        </text>
        <text
          x="95"
          y="16"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="12"
          fontWeight="400"
          fill="#64748B"
        >
          LLC
        </text>
      </g>
    </svg>
  )
}
