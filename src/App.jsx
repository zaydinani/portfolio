
import './styles/app.scss'
import Nav from './components/nav'
import Main from './pages/main'
import Footer from './components/footer'

import { ThemeProvider } from './util/themeContext'

function App() {
  
  return (
    <ThemeProvider>
      <Nav />
      <Main />
      <Footer />
    </ThemeProvider>
  )
}

export default App
