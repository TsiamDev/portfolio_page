import { Routes, Route } from "react-router";
import Home from "./home.jsx";
import CV from "./assets/CV.jsx";
import Work_Experience from "./assets/work_experience.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CV" element={<CV />} />
        <Route path="/Work-Experience" element={<Work_Experience />} />
      </Routes>
    </div>
  );
}
