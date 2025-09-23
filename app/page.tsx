import LoadingScreen from './components/LoadingScreen'
import InteractiveBackground from './components/InteractiveBackground'
import ParticleSystem from './components/ParticleSystem'
import LandingBanner from './components/LandingBanner'
import EventHighlights from './components/EventHighlights'
import RegistrationSection from './components/RegistrationSection'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen overflow-x-hidden">
        <InteractiveBackground />
        <ParticleSystem />
        <LandingBanner />
        <EventHighlights />
        <div id="registration">
          <RegistrationSection />
        </div>
        <Footer />
        <FloatingActionButton />
      </main>
    </>
  )
}