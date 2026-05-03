import { Routes, Route, useNavigate } from "react-router-dom";
import CV from "./assets/CV.jsx";
import Home from "./App.jsx";

export function Footer() {
  return (
    <footer className="bg-gray-400 text-slate-300 mt-20">
      © 2026 @TsiamDev. All rights reserved. Built with <a className="hover:text-white text-orange-200" href="https://react.dev/" rel="noopener noreferrer">React</a> + <a className="hover:text-white text-orange-200" href="https://tailwindcss.com/" rel="noopener noreferrer">Tailwind CSS</a>
    </footer>
  );
}



export function Carousel() {
  const navigate = useNavigate();

  const images = [
    { src: "src/assets/work_experience.jpg", label: "Work Experience", link: "/Work-Experience" },
    { src: "src/assets/CV.jpg", label: "Resume", link: "/CV" },
  ];

  const handleClick = (label) => {
    console.log("Clicked:", label);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex justify-center overflow-x-auto gap-6 py-4">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => img.link && navigate(img.link)}
          className="flex flex-col items-center focus:outline-none"
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-40 h-40 object-cover rounded-md border border-slate-300 hover:opacity-80 transition"
          />
          <span className="text-xs">
            {img.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export function PersonalPortfolioCarousel() {
  const navigate = useNavigate();

  const images = [
    { src: "src/assets/ecology_project.jpg", label: "Ecology-Project", link: "/Ecology-Project" },
  ];

  const handleClick = (label) => {
    console.log("Clicked:", label);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full flex justify-center overflow-x-auto gap-6 py-4">
      {images.map((img, i) => (
        <button
          key={i}
          onClick={() => img.link && navigate(img.link)}
          className="flex flex-col items-center focus:outline-none"
        >
          <img
            src={img.src}
            alt={img.label}
            className="w-40 h-40 flex flex-col-3 object-cover rounded-md border border-slate-300 hover:opacity-80 transition"
          />
          <span className="text-s">
            {img.label}
          </span>
        </button>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (

    <section
      className=" 
      text-center 
      text-white
      rounded-lg 
      border-5
      border-cyan-100
      mx-auto 
      bg-center 
      bg-repeat
      "
      style={{ backgroundImage: "url('src/assets/bg9.jpg')" }}
    >
      <div className=" text-white !text-white text-4xl font-bold mt-4">
        <div className="relative">
          {/* Full-size overlay */}
          <div className="absolute  inset-0 bg-black/60"></div>

          {/* Text above overlay */}
          <h1 className="relative z-10 text-white !text-white text-4xl font-bold drop-shadow-lg p-3">
            Kostas Tsiamitros
          </h1>
          <h2 className="relative z-10 text-white !text-white text-4xl font-bold drop-shadow-lg p-3">
            Electronics Engineer
          </h2>
          <h2 className="text-white !text-white text-4xl font-bold drop-shadow-lg p-3">
            Information Processing and Machine Intelligence
          </h2>
        </div>
      </div>

      <div className="flex items-center justify-center h-64">
        <img
          src="src/assets/icon_me.jpg"
          alt="example"
          className="w-50 h-50 rounded-full object-cover border-4 border-gray-300 shadow-lg"
        />
      </div>

      <div className=" text-white !text-white text-4xl font-bold mt-4">
        <div className="relative border border-brand rounded-xl p-6">
          {/* Full-size overlay */}
          <div className="absolute  inset-0 bg-black/60"></div>
          <div className="relative rounded-xl p-6 border border-slate-300">
            <h1 className="relative text-white !text-white text-lg font-bold">About Me</h1>
            <p className="text-left text-m font-normal text-white !text-white mt-4">
              Hi, I am Kostas.
              <br />
              <br />
              I'm someone who loves <strong className="text-xlg text-cyan-600">understanding how things work</strong> — and how they can work better <strong className="text-xlg text-cyan-600">for people</strong>.
              Whether I'm <strong className="text-xlg text-cyan-600">building something new</strong> or improving what already exists, I focus on <strong className="text-xlg text-cyan-600">clarity
              </strong>, <strong className="text-xlg text-cyan-600">empathy</strong> and <strong className="text-xlg text-cyan-600">purposeful efficient design</strong>.
              <br />
              <br />
              I enjoy <strong className="text-xlg text-cyan-600">working with others</strong>, asking to-the-point questions, and <strong className="text-xlg text-cyan-600">creating</strong> solutions that feel intuitive and grounded.
              My goal is always to make a <strong className="text-xlg text-cyan-600">positive impact</strong> through thoughtful work and continuous learning.
              <br />
              <br />
              I spend my free time exercising outdoors and going on road trips.
            </p>
          </div>
        </div>
      </div>

      <div className=" text-white !text-white text-4xl font-bold mt-4">
        <div className="relative border border-brand rounded-xl p-6">
          {/* Full-size overlay */}
          <div className="absolute  inset-0 bg-black/60"></div>
          <h1 className="relative z-10 text-white !text-white text-4xl font-bold drop-shadow-lg p-3">
            CV
          </h1>
          <div className="relative flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/kostas-tsiamitros"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-slate-400 rounded-md hover:bg-slate-100 transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/TsiamDev"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-slate-400 rounded-md hover:bg-slate-100 transition"
            >
              GitHub
            </a>
          </div>

          <Carousel></Carousel>

          <div className=" text-white !text-white text-4xl font-bold mt-4">
            <div className="relative">
              {/* Text above overlay */}
              <h1 className="relative z-10 text-white !text-white text-4xl font-bold drop-shadow-lg p-3">
                Personal Portfolio
              </h1>

              <PersonalPortfolioCarousel />
            </div>
          </div>

        </div>
      </div>

      <Footer />

    </section>
  );
}