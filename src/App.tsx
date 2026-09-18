
import Navbar from './components/Navbar/Navbar'
import Hero from './sections/Hero/Hero'
import Clients from './sections/Clients/clients'
import Work from './sections/Work/Work'
import Results from './sections/Results/Results'
import Services from './sections/Services/Services'
import SmoothScroll from './components/SmoothScroll/SmoothScroll'
import Statement from './sections/Statement/Statement'
import Process from './sections/Process/Process'
import Testimonials from './sections/Testimonials/Testimonials'
import Journal from './sections/Journal/Journal'
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <SmoothScroll>
      <main className="min-h-screen">
        <div className="w-full px-3 md:px-5 lg:px-6">
          <Navbar />
          <Hero />
          <Clients />
          <Work />
          <Results />
          <Services />
          <Statement />
          <Process />
          <Testimonials />
          <Journal />
          <Contact />
          <Footer />
        </div>
      </main>
    </SmoothScroll>
  )
}

export default App
