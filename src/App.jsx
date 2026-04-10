import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AboutPersona from './components/About/AboutPersona'
import AboutStructure from './components/About/AboutStructure'
import Academics from './components/Academics/Academics'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <>
      <Header />
      <main className="scroll-container">
        <Hero />
        <AboutPersona />
        <Academics />
        <AboutStructure />
        <Projects />
        <Contact />
      </main>
      <Navigation />
    </>
  )
}

export default App
