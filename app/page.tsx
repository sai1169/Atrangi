import LoadingScreen from './components/LoadingScreen'
import InteractiveBackground from './components/InteractiveBackground'
import ParticleSystem from './components/ParticleSystem'
import LandingBanner from './components/LandingBanner'
import CountdownTimer from './components/CountdownTimer'
import EventHighlights from './components/EventHighlights'
import FestivalGuide from './components/FestivalGuide'
import RegistrationSection from './components/RegistrationSection'
import Footer from './components/Footer'
import FloatingActionButton from './components/FloatingActionButton'
import ConfettiButton from './components/ConfettiButton'

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative min-h-screen overflow-x-hidden">
        <InteractiveBackground />
        <ParticleSystem />
        <LandingBanner />
        <CountdownTimer />
        <EventHighlights />
        <FestivalGuide />
        <div id="registration">
          <RegistrationSection />
        </div>
        <Footer />
        <FloatingActionButton />
        <ConfettiButton />
      </main>
    </>
  )
}