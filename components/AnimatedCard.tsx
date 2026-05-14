'use client'

import React from 'react'
import { ReactNode, useRef, useEffect } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function AnimatedCard({ children, delay = 0, className = '' }: AnimatedCardProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = React.useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        observer.unobserve(element)
      }
    }, {
      threshold: 0.1,
    })

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${className} ${
        isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}