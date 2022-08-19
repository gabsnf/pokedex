import React from "react";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Specified } from "../components/Specified/Specified";
import "./container.css";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:id" element={<Specified />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
