import React from "react";
import Home from "../Home/Home";
import { Pokemon } from "../components/Pokemon/Pokemon";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Specified } from "../components/Specified/Specified";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<Specified />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
