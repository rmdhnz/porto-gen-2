import React from "react";
import Project from "./Project";
import Homepage from "./Homepage";
import Eval from "./Eval";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function MainContent() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="project/" element={<Project />} />
          <Route path="evaluasi/" element={<Eval />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
