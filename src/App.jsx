
import './styles/app.scss'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import { ThemeProvider } from './themeContext'

function App() {
  
  return (
    <ThemeProvider>
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
    </ThemeProvider>
  )
}

export default App
