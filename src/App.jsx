import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router";
import Home from "./home.jsx";
import CV from "./assets/CV.jsx";
import Work_Experience from "./assets/work_experience.jsx";
import Ecology_Project from "./assets/ecology_project.jsx";
import QA_Testing from "./assets/qa_testing.jsx";

export default function App() {
  return (
    <div>

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Work-Experience" element={<Work_Experience />} />
        <Route path="/Ecology-Project" element={<Ecology_Project />} />
        <Route path="/QA-Testing" element={<QA_Testing />} />
      </Routes>
    </div>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}