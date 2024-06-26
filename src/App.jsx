import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Instructions from "./Pages/Instructions.jsx";
import Start from "./Pages/Start.jsx";
import GameBoardPage from "./Components/GameBoardComponents/GameBoardPage.jsx";
import { AppProvider } from "./AppContext.jsx";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/start/categories" element={<Start />} />
          <Route path="/start/names" element={<Start />} />
          <Route path="/game" element={<GameBoardPage />} Component={GameBoardPage}/>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App
