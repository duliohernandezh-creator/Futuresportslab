"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const titleVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const playVideo = async (video: HTMLVideoElement | null) => {
      if (!video) return

      try {
        await video.play()
      } catch (error) {
        const playOnInteraction = () => {
          video.play().catch(() => {})
          document.removeEventListener("click", playOnInteraction)
          document.removeEventListener("touchstart", playOnInteraction)
        }
        document.addEventListener("click", playOnInteraction)
        document.addEventListener("touchstart", playOnInteraction)
      }
    }

    if (videoRef.current) {
      playVideo(videoRef.current)
    }
    if (titleVideoRef.current) {
      playVideo(titleVideoRef.current)
    }
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F4BB29A9-354A-4142-BD50-435A0ACF9B81-qPMP6vNYZdNkrojJJBZSPGfB1RPBsE.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-5xl">
          <div className="space-y-6 animate-fade-in-up">
            <div className="relative inline-block">
              {/* Video behind text */}
              <div className="absolute inset-0 -inset-x-8 -inset-y-4 overflow-hidden">
                <video
                  ref={titleVideoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-50 scale-125 blur-[2px]"
                >
                  <source
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/F4BB29A9-354A-4142-BD50-435A0ACF9B81-qPMP6vNYZdNkrojJJBZSPGfB1RPBsE.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              <h1
                className="relative text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-balance px-8 py-4 drop-shadow-2xl"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Future Sports Lab
              </h1>
            </div>
          </div>

          <p
            className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto animate-fade-in-up text-balance leading-relaxed"
            style={{ animationDelay: "0.2s", fontFamily: "var(--font-inter)" }}
          >
            Supersport: a new form of competition that fuses physical athletic performance with digital technology,
            gaming mechanics, and interactive media.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  )
}
