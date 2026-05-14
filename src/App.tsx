import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Reviews from './components/Reviews'
import About from './components/About'
import Location from './components/Location'
import Reservations from './components/Reservations'
import Contact from './components/Contact'
import FloatingButtons from './components/FloatingButtons'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <About />
        <Location />
        <Reservations />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
