import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Potofolio from "./Components/Potofolio";
import Contact from "./Components/Contact";

import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/potofolio" element={<Potofolio/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
