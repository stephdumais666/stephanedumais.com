import CuriculumVitae from "./curiculumvitae.js";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CuriculumVitae />} />
          {/*<Route
            path="/contact"
            element={<Contact />}
          />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
