"use client"

import { useEffect, useRef, useState } from "react"

export function TractionSection() {
  const pillars = [
    {
      title: "Platform",
      metric: "100+",
      subMetric: "U.S. Cities & 20+ Sports Leagues",
      subLabel: "An active pipeline of host cities and league partners ready to launch.",
    },
    {
      title: "Audience",
      metric: "100M+",
      subMetric: "",
      subLabel: "Projected organic reach via our network of media partners and content creators.",
    },
    {
      title: "Operation",
      metric: "5",
      subMetric: "Countries",
      subLabel: "With established corporate infrastructure and a network of national-level partners.",
    },
  ]

  return (
    <section className="relative min-h-screen bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Movement Has Begun
        </h2>

        <div className="grid md:grid-cols-3 gap-16 mt-20">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="flex flex-col items-center text-center space-y-4">
              <h3
                className="text-2xl font-bold uppercase tracking-wider text-black/80"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {pillar.title}
              </h3>
              <div className="my-6">
                <AnimatedMetric metric={pillar.metric} delay={index * 200} />
                {pillar.subMetric && (
                  <p className="text-lg font-semibold text-black/70 mt-2" style={{ fontFamily: "var(--font-inter)" }}>
                    {pillar.subMetric}
                  </p>
                )}
              </div>
              <p className="text-base text-black/60 max-w-xs" style={{ fontFamily: "var(--font-inter)" }}>
                {pillar.subLabel}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedMetric({ metric, delay = 0 }: { metric: string; delay?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Extract number from metric (e.g., "100+" -> 100, "100M+" -> 100)
  const targetNumber = Number.parseInt(metric.match(/\d+/)?.[0] || "0")
  const suffix = metric.replace(/\d+/, "")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = targetNumber / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= targetNumber) {
          setCount(targetNumber)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, targetNumber, delay])

  return (
    <div ref={ref} className="text-6xl md:text-7xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
      {count}
      {suffix}
    </div>
  )
}
