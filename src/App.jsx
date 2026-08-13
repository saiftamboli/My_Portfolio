import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Capabilities from './components/Capabilities'
import OffTheClock from './components/OffTheClock'
import Contact from './components/Contact'
import ScrollProgress from './components/ui/ScrollProgress'

function App() {
  return (
    <>
      <ScrollProgress />
      <main className="grain">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Capabilities />
        <OffTheClock />
        <Contact />
      </main>
    </>
  )
}

export default App
