import React, { useState } from "react";

// import de react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import des pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AddProject from "./Pages/AddProject";
import Project from "./Pages/Project";
import NotFound from "./Pages/NotFound";

import "./App.css";

function App() {
  /*
   * useState set on false
   * pass the props handleAdmin in the component Login
   * then pass the props handle in the function login.jsx and in Axios
   * do it also in Web.jsx and set the ternary on the button
   */
  const [admin, setAdmin] = useState(false);
  const [logout, setLogout] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login handleAdmin={setAdmin} handleLogout={setLogout} />}
          />
          <Route path="/addproject" element={<AddProject />} />
          <Route
            path="/project"
            element={<Project admin={admin} logout={logout} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
