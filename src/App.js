// import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
// import { BrowserRouter as Router } from "react-router-dom"
// Pages
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"

import Navbar from "./components/Navbar"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
