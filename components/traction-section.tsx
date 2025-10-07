import Image from "next/image"

export function TractionSection() {
  const partners = [
    {
      name: "Claro Sports",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0186-0yvhimSbID5y7rRgv2ssoAUunycgdR.png",
      subtitle: "Foundational LATAM Partner",
    },
    {
      name: "Destination Toronto",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0187-2Yw82RiZlohv0ZtomtngfqZZm7RRD2.png",
      subtitle: "Foundational Canadian Partner",
    },
    {
      name: "Mind Sports Olympiad",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0188-FPlOfJeqwWKZHOGZVsHlXCqhZqgkDb.png",
      subtitle: "Foundational European Partner",
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
          {partners.map((partner) => (
            <div key={partner.name} className="flex flex-col items-center text-center space-y-6">
              <div className="relative w-full h-40 flex items-center justify-center p-4">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={280}
                  height={120}
                  className="object-contain max-h-full"
                />
              </div>
              <p className="text-sm font-semibold text-black/60 uppercase tracking-wider mt-4">{partner.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-light text-black/70" style={{ fontFamily: "var(--font-inter)" }}>
            Active demand from <span className="font-bold text-black">100+ U.S. Cities</span> &{" "}
            <span className="font-bold text-black">20+ Sports Leagues</span>
          </p>
        </div>
      </div>
    </section>
  )
}
