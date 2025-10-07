import { Button } from "@/components/ui/button"

export function InvitationSection() {
  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-6 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-5xl md:text-7xl font-bold mb-8" style={{ fontFamily: "var(--font-montserrat)" }}>
          Become a Strategic Ally
        </h2>

        <p
          className="text-xl md:text-2xl font-light text-white/80 leading-relaxed"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          We are building the next global sports category and are seeking visionary investors and foundational brand
          partners to join us in shaping the future of competition.
        </p>

        <div className="pt-8">
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            <a href="mailto:david@pcs.gg">Contact for Partnership Inquiries</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
