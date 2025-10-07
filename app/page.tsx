import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { TractionSection } from "@/components/traction-section"
import { InvitationSection } from "@/components/invitation-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <MissionSection />
      <ArchitectureSection />
      <TractionSection />
      <InvitationSection />
    </main>
  )
}
