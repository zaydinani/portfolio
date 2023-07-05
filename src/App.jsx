
import './styles/app.scss'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import { ThemeProvider } from './themeContext'

function App() {
  
  return (
    <ThemeProvider>
        <Nav />
        <Hero />
        <About />
        <Skills />
    </ThemeProvider>
  )
}

export default App
