import Image from "next/image"

export function MissionSection() {
  return (
    <section className="relative min-h-screen bg-white text-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: "var(--font-montserrat)" }}>
              Our Mission
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-black/80" style={{ fontFamily: "var(--font-inter)" }}>
              We build new categories at the intersection of human performance, technology, and spectacle. Our thesis:
              the most valuable experiences today are those that fuse the physical and digital to combat passivity and
              unlock human potential. Future Sports Lab is architecting the platforms where elite performance is the
              ultimate currency.
            </p>
          </div>

          {/* Right: Image */}
          <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0785-RlDITdinCTuPQBb0WwCnZ6DzREqwez.jpeg"
              alt="Athlete and gamer focused"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
