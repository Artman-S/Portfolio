import React from "react";
// import de react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddProject from "./Pages/AddProject";
import Project from "./Pages/Project";
// import Contact from "./components/Contact/ContactForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addproject" element={<AddProject />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        {/* <Contact /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
