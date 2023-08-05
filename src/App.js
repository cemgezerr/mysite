import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Experience from "./Pages/Experience";
import Home from "./Pages/Home";
import Project from "./Pages/Project"; 
import Navbar from "./components/Navbar";
import './App.css'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
