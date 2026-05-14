import { useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  speed?: number       // seconds for one full loop
  gap?: number         // gap in px between items
  pauseOnHover?: boolean
}

export function InfiniteSlider({ children, speed = 40, gap = 80, pauseOnHover = true }: Props) {
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <div
        ref={trackRef}
        className="flex w-max animate-infinite-scroll"
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? 'paused' : 'running',
          gap: `${gap}px`,
        }}
      >
        {/* original + duplicate for seamless loop */}
        <div className="flex items-center" style={{ gap: `${gap}px` }}>
          {children}
        </div>
        <div className="flex items-center" aria-hidden style={{ gap: `${gap}px` }}>
          {children}
        </div>
      </div>
    </div>
  )
}
