import { Route, Routes } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-400 text-slate-300 mt-20">
        © 2026 @TsiamDev. All rights reserved. Built with <a className="hover:text-white text-orange-200" href="https://react.dev/" rel="noopener noreferrer">React</a> + <a className="hover:text-white text-orange-200" href="https://tailwindcss.com/" rel="noopener noreferrer">Tailwind CSS</a>
    </footer>
  );
}

export default function Work_Experience() {
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
          Past Work Experience
        </h1>
      </div>

        <div className="bg-brand-light rounded-xl shadow-md p-6 border border-brand">
            <h2 className="text-xl font-bold text-brand-dark">Metamind Innovations</h2>
            <img
            src="src/assets/minds_logo.png"
            alt="example"
            className="w-50 h-25 border-4 border-gray-300 shadow-lg"
            />
            <p className="text-brand-dark/80 mt-2 w-full text-left">
                I worked extensively with sensors, integrating them into embedded systems for real-time data acquisition and monitoring. 
                I developed an AI/ML classifier to process and extract meaningful insights from data analytics, enabling intelligent and 
                adaptive system behavior. Using Arduino and Raspberry Pi platforms, I built and prototyped end-to-end IoT solutions, bridging 
                low-level hardware with higher-level applications. I also designed and tested custom PCBs to optimize performance, 
                reliability, and system integration. This combination of hardware and software development allowed me to create efficient, 
                scalable, and data-driven embedded systems.
            </p>
        </div>
            <div className="bg-brand-light rounded-xl shadow-md p-6 border border-brand">
            <h2 className="text-xl font-bold text-brand-dark">International School of Algorithmics</h2>
            <img
            src="src/assets/algorithmics_logo.png"
            alt="example"
            className="w-50 h-25 object-cover border-4 border-gray-300 shadow-lg"
            />
            <p className="text-brand-dark/80 mt-2 w-full text-left">
                At the International School of Algorithmics, I taught school students the fundamentals of programming using Python and Unity.
                I introduced core concepts such as variables, control flow, and problem-solving in a way that was engaging and accessible. 
                Through Unity, students explored game development, learning how programming concepts translate into interactive experiences. 
                I adapted my teaching approach to different age groups and skill levels, ensuring an effective and inclusive learning environment. This experience strengthened my ability to communicate complex technical ideas in a clear and practical way.
            </p>
        </div>
            <div className="bg-brand-light rounded-xl shadow-md p-6 border border-brand">
            <h2 className="text-xl font-bold text-brand-dark">Applied Mechanics Laboratory</h2>
            <img
            src="src/assets/AML_UoP_logo.png"
            alt="example"
            className="w-50 h-20 object-cover border-4 border-gray-300 shadow-lg"
            />
            <p className="text-brand-dark/80 mt-2 w-full text-left">
                At the Applied Mechanics Laboratory, I conducted research on UAV systems, focusing on simulation and control. I used C++ 
                along with Gazebo and ROS to develop and test realistic drone models in simulated environments. My work involved 
                implementing algorithms for navigation, stability, and system integration within robotics frameworks. I contributed to 
                a Horizon 2020 (H2020) project, supporting research and development activities within a multidisciplinary team. This 
                experience strengthened my skills in robotics, simulation, and research-driven software development.
            </p>
        </div>

        <Footer/>

    </section>
  );
}