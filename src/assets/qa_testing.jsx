import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Choose a visually appealing theme (e.g., vscDarkPlus, dracula, oneDark, atomDark)
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// Vite reads these files at build time and converts them into plain text strings
import orderProcessorCode from '../assets/code/OrderProcessor.cs?raw';
import metricIngestorCode from '../assets/code/MetricIngestor.cs?raw';


export default function QA_Testing() {
    const img = { src: "src/assets/qa_testing_output.png", label: "qa_testing_output" };
    return (
        <section
            className="text-center text-white rounded-lg border-5
        border-cyan-100 mx-auto bg-center bg-repeat"
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
                QA Testing
            </h2>

            <img src="src/assets/qa_testing_logo.png" alt="QA Testing" style={{ display: 'block', margin: '0 auto' }} className="thumbnail w-100 h-auto rounded-full border-3 border-gray-300" />

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
                        Summary
                    </h2>
                </div>
                <div>

                    <p className="relative z-10 text-white !text-white text-m font-bold drop-shadow-lg p-3"
                        style={{
                            textAlign: 'justify',
                            backgroundColor: '#1e293b'
                        }}>
                        Over the past few days, I <strong className="text-xl text-cyan-600">designed and developed a Quality Assurance (QA) testing pipeline</strong> focused on <strong className="text-xl text-cyan-600">monitoring the quality
                            of AI-Assistant generated code</strong> using a <strong className="text-xl text-cyan-600">modular</strong> and <strong className="text-xl text-cyan-600">automated</strong> testing pipeline.
                        <br />
                        This automated pipeline allows me to easily <strong className="text-xl text-cyan-600">scan</strong> at near real-time speeds, C# class files for very common code smells.
                        Using these utility functions will allow for<strong className="text-xl text-cyan-600">faster quality control</strong> of the auto-generated code which will<strong className="text-xl text-cyan-600">help
                            produce better quality software</strong> solutions. By combining consistent testing, human-in-the-loop design, and AI-Assistant's high keystroke count <strong className="text-xl text-cyan-600">
                            scripting productivity and efficiency is expected to rise</strong> in the future.                         <br />
                        This work demonstrates how simple testing tools can provide <strong className="text-xl text-cyan-600">meaningful insights</strong> around the detection of code smells.
                        <br />
                        <br />
                        The categorization of code smells that I followed is available <a href="https://refactoring.guru/refactoring/smells" className="text-green-600">here</a>.

                    </p>
                </div>
                <h2 style={{
                    backgroundColor: '#1e293b', // Dark slate background
                    border: '2px solid #38bdf8',  // Light blue border
                    borderRadius: '6px',          // Slightly rounded corners
                    color: '#f8fafc',             // White text color
                    padding: '12px 20px',         // Space between text and the border
                    margin: '10px 0',             // Space outside the border
                    fontFamily: 'sans-serif'
                }}>
                    Use Case - Bloated Method & Renamed Clone
                </h2>

                <div style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '24px',
                    width: '100%',
                    boxSizing: 'border-box',
                    background: '#0f172a', // Sleek dark mode background
                }}>

                    {/* 2. Flex Wrapper: Holds both code panels side-by-side */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row', // Side-by-side layout
                        gap: '20px',          // Space between the two blocks
                        width: '100%',
                        maxWidth: '1400px',   // Prevents it from stretching too wide on giant monitors
                        pointerEvents: 'auto',// Ensures code text remains interactable
                    }}>

                        {/* === CODE BLOCK 1 === */}
                        <div style={{ flex: 1, minWidth: 0, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)' }}>
                            <div style={{ backgroundColor: '#1e1e1e', padding: '10px 16px', color: '#aaa', fontSize: '12px', fontFamily: 'monospace', borderBottom: '1px solid #333' }}>
                                UserProfile.cs file
                            </div>
                            <SyntaxHighlighter
                                language="csharp"
                                style={vscDarkPlus}
                                showLineNumbers={true}
                                wrapLines={true}
                                lineProps={{ style: { display: 'flex', width: '100%' } }}
                                customStyle={{ margin: 0, padding: '20px', fontSize: '14px', fontFamily: '"Fira Code", monospace', display: 'block', width: '100%', textAlign: 'left' }}
                            >
                                {orderProcessorCode}
                            </SyntaxHighlighter>
                        </div>

                        {/* === CODE BLOCK 2 === */}
                        <div style={{ flex: 1, minWidth: 0, borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.3)' }}>
                            <div style={{ backgroundColor: '#1e1e1e', padding: '10px 16px', color: '#aaa', fontSize: '12px', fontFamily: 'monospace', borderBottom: '1px solid #333' }}>
                                AdminProfile.cs file
                            </div>
                            <SyntaxHighlighter
                                language="csharp"
                                style={vscDarkPlus}
                                showLineNumbers={true}
                                wrapLines={true}
                                lineProps={{ style: { display: 'flex', width: '100%' } }}
                                customStyle={{ margin: 0, padding: '20px', fontSize: '14px', fontFamily: '"Fira Code", monospace', display: 'block', width: '100%', textAlign: 'left' }}
                            >
                                {metricIngestorCode}
                            </SyntaxHighlighter>
                        </div>
                    </div>
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
                        QA Testing Pipeline - Tool Output
                    </h2>
                    <img
                        src={img.src}
                        alt={img.label}

                    />
                </div>
            </div>
        </section>
    );
}