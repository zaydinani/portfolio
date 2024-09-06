import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.scss";
import Nav from "./components/nav";
import Main from "./pages/main";
import Blog from "./pages/blogPage";
import Footer from "./components/footer";
import Projects from "./pages/projectsPage";
import { ThemeProvider } from "./util/themeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/project/:name" element={<Projects />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
