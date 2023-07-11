
import './styles/app.scss'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Features from './components/features'
import Contact from './components/contact'
import Footer from './components/footer'

import { ThemeProvider } from './themeContext'

function App() {
  
  return (
    <ThemeProvider>
      <Nav />
      <About />
      {/*
      <Hero />
      <Skills />
      <Projects />
      <Features />
      <Contact />
      <Footer />
      */}
    </ThemeProvider>
  )
}

export default App
