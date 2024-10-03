import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Exam from "./pages/Exam";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exam" element={<Exam />} />
    </Routes>
  );
}

export default App;
