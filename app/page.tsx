import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Disciplines } from "@/components/disciplines"
import { Categories } from "@/components/categories"
import { Schedules } from "@/components/schedules"
import { Programs } from "@/components/programs"
import { ClubSection } from "@/components/club-section"
import { CoachesAccordion } from "@/components/coaches-accordion"
import { Events } from "@/components/events"
import { JoinCta } from "@/components/join-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <SiteHeader />
      <main>
        <Hero />
        <Disciplines />
        <Categories />
        <Schedules />
        <Programs />
        <ClubSection />
        <CoachesAccordion />
        <Events />
        <JoinCta />
      </main>
      <SiteFooter />
    </div>
  )
}
