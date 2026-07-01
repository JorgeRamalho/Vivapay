import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import AppPreview from './components/AppPreview'
import RegistrationForm from './components/RegistrationForm'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Benefits />
        <HowItWorks />
        <AppPreview />
        <RegistrationForm />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
