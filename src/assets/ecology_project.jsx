import { useNavigate } from "react-router-dom";

export default function Ecology_Project() {
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
      style={{ backgroundImage: "url('src/assets/bg9.webp')" }}
    >
      <h2 style={{
        backgroundColor: '#1e293b', // Dark slate background
        border: '2px solid #38bdf8',  // Light blue border
        borderRadius: '6px',          // Slightly rounded corners
        color: '#f8fafc',             // White text color
        padding: '12px 20px',         // Space between text and the border
        margin: '10px 0',             // Space outside the border
        fontFamily: 'sans-serif'
      }}>
        Ecology Project
      </h2>

      <img src="src/assets/ecology_project.webp" alt="Ecology Project" style={{ display: 'block', margin: '0 auto' }} className="thumbnail w-100 h-auto rounded-full border-3 border-gray-300" />


      <h2 style={{
        backgroundColor: '#1e293b', // Dark slate background
        border: '2px solid #38bdf8',  // Light blue border
        borderRadius: '6px',          // Slightly rounded corners
        color: '#f8fafc',             // White text color
        padding: '12px 20px',         // Space between text and the border
        margin: '10px 0',             // Space outside the border
        fontFamily: 'sans-serif'
      }}>
        Summary
      </h2>
      <div className=" text-white !text-white text-s font-bold mt-4">
        <div className="relative">
          {/* Full-size overlay */}


          <a
            href="https://github.com/TsiamDev/Ecology_Project"
            rel="noopener noreferrer"
            className="relative z-10 px-4 py-2 border border-slate-400 rounded-md hover:bg-slate-100 transition"
            style={{
              backgroundColor: '#1e293b', // Dark slate background
              border: '2px solid #38bdf8',  // Light blue border
              borderRadius: '6px',          // Slightly rounded corners
              color: '#f8fafc',             // White text color
              padding: '12px 20px',         // Space between text and the border
              margin: '10px 0',             // Space outside the border
              fontFamily: 'sans-serif'
            }}
          >
            View Project on GitHub
          </a>

          <p style={{
            backgroundColor: '#1e293b', // Dark slate background
            color: '#f8fafc',             // White text color
            padding: '12px 20px',         // Space between text and the border
            margin: '10px 0',             // Space outside the border
            fontFamily: 'sans-serif',
            textAlign: 'justify'
          }} className="relative z-10 text-white !text-white text-m font-bold drop-shadow-lg p-3">
            Over the course of a few days, I <strong className="text-xl text-cyan-600">designed and developed an ecology project</strong> focused on monitoring the <strong className="text-xl text-cyan-600">growth
              and health of a Sansevieria plant</strong> using a <strong className="text-xl text-cyan-600">RGB camera</strong> system.
            <br />
            The setup allowed me to <strong className="text-xl text-cyan-600">capture high-resolution images</strong> at regular intervals, allowing for the <strong className="text-xl text-cyan-600">observation of subtle
              changes</strong> in leaf coloration, structure, and <strong className="text-xl text-cyan-600">overall the plant's vitality</strong>. By combining consistent imaging with controlled
            environmental conditions, the project <strong className="text-xl text-cyan-600">generated a visual dataset</strong> that can support future <strong className="text-xl text-cyan-600">analysis on plant stress responses</strong>,
            growth patterns, and ecological interactions.
            <br />
            This work demonstrates how simple optical tools can provide <strong className="text-xl text-cyan-600">meaningful insights</strong> into plant behavior and environmental interactions.
          </p>

          <h2 style={{
            backgroundColor: '#1e293b', // Dark slate background
            border: '2px solid #38bdf8',  // Light blue border
            borderRadius: '6px',          // Slightly rounded corners
            color: '#f8fafc',             // White text color
            padding: '12px 20px',         // Space between text and the border
            margin: '10px 0',             // Space outside the border
            fontFamily: 'sans-serif'
          }}>
            Technical Description
          </h2>

          <p className="relative z-10 text-white !text-white flex content-center text-m font-bold drop-shadow-lg p-3" style={{
            textAlign: 'justify',
            backgroundColor: '#1e293b'
          }}>
            The project's analytical framework combines foundational image processing techniques with emerging AI-driven methods to extract meaningful ecological
            insights from the captured RGB imagery. Each frame enters a processing pipeline built with OpenCV, where it undergoes resizing, color-space normalization,
            and extraction of per-channel histograms. These histograms quantify shifts in brightness and color distribution, enabling early detection of subtle
            changes in leaf pigmentation that may signal stress or growth variation.
            <br />
            Following preprocessing, the dataset is segmented using an unsupervised k-means clustering algorithm. By grouping pixels based on color similarity, k-means
            effectively isolates the plant from the background and highlights internal leaf regions with distinct chromatic or textural characteristics. This
            segmentation supports more precise tracking of morphological changes over time and provides a structured foundation for downstream analysis.
            <br />
            Looking ahead, the computational pipeline can be strengthened by expanding the AI component. While k-means offers reliable baseline segmentation, future
            iterations may incorporate deep learning models, such as convolutional neural networks, to classify stress states, detect anomalies, or predict growth
            trajectories based on temporal patterns. Training these models on the current dataset—augmented with additional labeled samples—would enable more automated,
            accurate, and scalable ecological assessments, ultimately transforming the system into a predictive tool rather than a purely observational one.
          </p>
        </div>
      </div>

      <div className=" text-white !text-white text-s font-bold mt-4">
        <div className="relative">
          {/* Full-size overlay */}

          <h2 style={{
            backgroundColor: '#1e293b', // Dark slate background
            border: '2px solid #38bdf8',  // Light blue border
            borderRadius: '6px',          // Slightly rounded corners
            color: '#f8fafc',             // White text color
            padding: '12px 20px',         // Space between text and the border
            margin: '10px 0',             // Space outside the border
            fontFamily: 'sans-serif'
          }}>
            Captured Images Samples
          </h2>
          <PersonalPortfolioCarousel />
        </div>
      </div>



    </section>
  );
}

export function PersonalPortfolioCarousel() {
  const navigate = useNavigate();

  const images = [
    { src: "src/assets/plant_isolated_01.webp", label: "sample_image_01" },
    { src: "src/assets/plant_isolated_02.webp", label: "sample_image_02" },
    { src: "src/assets/plant_isolated_03.webp", label: "sample_image_03" },
    { src: "src/assets/plant_isolated_11.webp", label: "sample_image_11" },
    { src: "src/assets/plant_isolated_12.webp", label: "sample_image_12" },
    { src: "src/assets/plant_isolated_13.webp", label: "sample_image_13" },
  ];

  /*
  const handleClick = (label) => {
  console.log("Clicked:", label);
  window.scrollTo({ top: 0, behavior: "smooth" });
  };
  */
  return (
    <div className="relative w-full flex justify-center overflow-x-auto gap-6 py-4"
      style={{
        backgroundColor: '#1e293b', // Dark slate background
        color: '#f8fafc',             // White text color
        padding: '12px 20px',         // Space between text and the border
        margin: '10px 0',             // Space outside the border
        fontFamily: 'sans-serif'
      }}>
      {images.map((img, i) => (
        <div
          key={i}
          //onClick={() => img.link && navigate(img.link)}
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
        </div>
      ))}
    </div>
  );
}