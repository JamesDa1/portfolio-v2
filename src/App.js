// import logo from "./logo.svg"
import "./App.css"
import { Route, Routes } from "react-router-dom"
// Pages
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"
import { Pomodoro } from "./components/Pomodoro"

import { Navbar } from "./components/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
