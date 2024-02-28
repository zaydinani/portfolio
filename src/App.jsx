
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './styles/App.scss'
import Nav from './components/nav'
import Main from './pages/main'
import Footer from './components/footer'
import Projects from './pages/projectsPage'
import { ThemeProvider } from './util/themeContext'
import Article from './pages/new/articleContent.jsx'
import Blog from './pages/new/blogPage.jsx'
import Auth from './pages/new/auth.jsx'

function App() {
  
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/project/:name" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
