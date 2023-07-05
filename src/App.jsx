
import './styles/app.scss'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './components/about'
import { ThemeProvider } from './themeContext'

function App() {
  
  return (
    <ThemeProvider>
        <Nav />
        <Hero />
        <About />
    </ThemeProvider>
  )
}

export default App
