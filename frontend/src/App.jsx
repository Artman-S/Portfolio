import React from "react";
// import de react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
// import Nav from "./components/NavBar/Nav";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Web from "./components/CardWeb/Web";
import Admin from "./Pages/Admin";
// import Contact from "./components/Contact/ContactForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Web />} />
          <Route path="/admin" element={<Admin />} />
          {/* <Route path="/Contact" element={<Contact />} /> */}
        </Routes>
        <Web />
        {/* <Contact /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
