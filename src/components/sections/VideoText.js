export default function VideoText({ 
  src, 
  children, 
  fontSize = 12, 
  fontWeight = 900,
  className = "",
  ...props 
}) {
  return (
    <div className={`relative inline-block ${className}`} {...props}>
      <svg
        className="w-full h-full"
        viewBox="0 0 800 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="videoPattern"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <foreignObject width="100%" height="100%">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ width: '800px', height: '200px' }}
              >
                <source src={src} type="video/mp4" />
              </video>
            </foreignObject>
          </pattern>
        </defs>
        
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={`${fontSize}vw`}
          fontWeight={fontWeight}
          fontFamily="Montserrat, sans-serif"
          fill="url(#videoPattern)"
          stroke="white"
          strokeWidth="2"
          className="select-none"
        >
          {children}
        </text>
      </svg>
    </div>
  )
}