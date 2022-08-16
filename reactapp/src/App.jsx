import React from "react";
import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Specified } from "./components/Specified/Specified";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Specified />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
