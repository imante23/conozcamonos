import "./App.css"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
/* import Navbar from "./components/Navbar.jsx" */
import Home from "../src/views/Home/Home.jsx"
import Legal from "./views/Legal/Legal.jsx"
import Preregistro from "./views/Legal/Preregistro.jsx"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/terms" element={<Preregistro/>} />
        </Routes>
    </Router>
  )
}

export default App
