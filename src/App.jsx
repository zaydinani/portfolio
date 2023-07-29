
import './styles/app.scss'
import Nav from './components/nav'
import Main from './pages/main'
import Footer from './components/footer'
import Projects from './pages/projects'
import { ThemeProvider } from './util/themeContext'

function App() {
  
  return (
    <ThemeProvider>
      <Nav />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}

export default App
