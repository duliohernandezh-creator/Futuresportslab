"use client"

import { useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

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
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3edf3171-a1c4-4b59-ab10-4f4812791ddc-Ed4mCd4Nx9ZIcsQUe3HLzO9HqGYCKE.mov"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="absolute top-8 left-8 z-10">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FUTURE%20SPORTS%20LAB%20LOGO1-16J4EHir1FkwjzimI6YaXTr1opnM6X.png"
          alt="Future Sports Lab"
          width={300}
          height={75}
          className="w-48 md:w-64 h-auto drop-shadow-2xl"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-8 max-w-5xl">
          <p
            className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto animate-fade-in-up text-balance leading-relaxed"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Hyper Sport: a new form of competition that fuses physical athletic performance with digital technology,
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
