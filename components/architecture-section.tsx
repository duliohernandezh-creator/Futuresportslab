export function ArchitectureSection() {
  const pillars = [
    {
      number: "01",
      title: "Convergence Events",
      description:
        'Global "tentpole" experiences that fuse sport, simulation, and live spectacle. Each event is a cultural phenomenon where brands, athletes, and audiences collide to redefine competition.',
    },
    {
      number: "02",
      title: "Open Leagues",
      description:
        "Scalable hybrid tournaments that bridge grassroots energy with elite performance, designed to discover the next generation of global champions.",
    },
    {
      number: "03",
      title: "Intelligence & Media",
      description:
        "A proprietary data and storytelling platform transforming performance into narrative. Analytics, rankings, and content that feed global audiences and power the evolution of the sport itself.",
    },
  ]

  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          The Architecture of the Future of Sport
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-6xl font-bold text-white/20 mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                {pillar.number}
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-montserrat)" }}>
                {pillar.title}
              </h3>
              <p className="text-white/70 leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
