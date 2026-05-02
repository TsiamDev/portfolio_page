import { Routes, Route, useNavigate  } from "react-router-dom";
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
    { src: "src/assets/CV.jpg", label: "CV", link: "/CV" },
    { src: "src/assets/personal_portfolio.jpg", label: "Personal Portfolio" },
  ];

  const handleClick = (label) => {
    console.log("Clicked:", label);
  };

  return (
    <div className="w-full flex justify-center overflow-x-auto gap-6 py-4">
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
          <span className="text-xs text-slate-600 mt-1">
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
      p-10 text-center 
      rounded-lg 
      shadow-md 
      border-20
      border-width-5
      border-gray-400 
      mt-10 
      mx-auto 
      max-w-4xl"

      >
      <div>
        <h1 className="leading-tight">
          Electronics Engineer
        </h1>
        <h2 className="text-lg text-slate-600 mt-0.5">
          Information Processing and Machine Intelligence
        </h2>
      </div>

      <div className="flex items-center justify-center h-64">
        <img
          src="src/assets/icon_me.jpg"
          alt="example"
          className="w-50 h-50 rounded-full object-cover border-4 border-gray-300 shadow-lg"
        />
      </div>

<div className="flex gap-4 justify-center">
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

      
      <div className="bg-brand-light rounded-xl shadow-md p-6 border border-brand">
        <h2 className="text-xl font-bold text-brand-dark">About Me</h2>
        <p className="text-brand-dark/80 mt-2 w-full text-left">
          Hi, I am Kostas. 
          <br/>
          <br/>
          I'm someone who loves <strong>understanding how things work</strong> — and how they can work better <strong>for people</strong>. 
          Whether I'm <strong>building something new</strong> or improving what already exists, I focus on <strong>clarity</strong>, <strong>empathy</strong>, and purposeful <strong>efficient design</strong>.
          <br/>
          <br/>
          I enjoy <strong>working with others</strong>, asking to-the-point questions, and <strong>creating</strong> solutions that feel intuitive and grounded. 
          My goal is always to make a <strong>positive impact</strong> through thoughtful work and continuous learning.
          <br/>
          <br/>
          In my free time, I enjoy exercising outdoors and going on road trips.
        </p>
      </div>

{/*
      <div className="bg-brand-light rounded-xl shadow-md p-6 border border-brand">
        <h2 className="text-xl font-bold text-brand-dark">Theme Card</h2>
        <p className="text-brand-dark/80 mt-2">
          This card uses your custom theme colors.
        </p>
      </div>

      <div className="bg-gradient-to-r from-brand to-brand-dark text-white rounded-xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold">Gradient Card</h2>
        <p className="mt-2 opacity-90">A more modern card style.</p>
      </div>
      <div className="bg-white rounded-xl shadow overflow-hidden">
      <img src="/image.jpg" className="w-full h-40 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold">Card Title</h3>
        <p className="text-gray-600 mt-2">Description goes here.</p>
      </div>
      <div className="border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold">Minimal Card</h3>
        <p className="text-gray-600 mt-2">Clean and simple.</p>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          A soft, human‑friendly card design using neutral tones and smooth rounding.
        </p>
      </div>
      </div>
*/}

    <Footer />

    </section>
    
  );
}