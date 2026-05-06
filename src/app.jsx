import Scene from "./components/Scene";
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <Scene />

      <div className="min-h-screen flex flex-col items-center justify-center text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold"
        >
          Shreyas JM
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-xl"
        >
          AI & FinTech Engineer
        </motion.p>

        <a href="#projects" className="mt-6 px-6 py-2 bg-cyan-400 text-black rounded">
          View Projects
        </a>
      </div>

      {/* Projects */}
      <section id="projects" className="py-20 text-center">
        <h2 className="text-3xl mb-10">Projects</h2>

        <div className="flex flex-wrap justify-center gap-6">

          <div className="p-6 border border-cyan-400 rounded w-72 hover:scale-105 transition">
            <h3>AI Financial Analyst</h3>
            <p>ML-based stock prediction system</p>
          </div>

          <div className="p-6 border border-cyan-400 rounded w-72 hover:scale-105 transition">
            <h3>Stock Predictor</h3>
            <p>Time-series forecasting</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="py-20 text-center">
        <h2>Contact</h2>
        <p>jmshreyas882000@gmail.com</p>
      </section>
    </>
  );
}
export default function App() {
  return (
    <>
      <Scene />

      <div className="absolute top-0 left-0 w-full p-6 flex justify-between">
        <h1 className="text-xl font-bold text-cyan-400">AI SYSTEM</h1>
        <p className="text-green-400">● ACTIVE</p>
      </div>

      <div className="grid grid-cols-3 gap-6 p-10 mt-20">

        {/* LEFT PANEL */}
        <div className="glass p-6">
          <h2>AI Controls</h2>
          <button className="btn">Run Analysis</button>
          <button className="btn">Predict Stock</button>
        </div>

        {/* CENTER (EMPTY FOR ROBOT) */}
        <div></div>

        {/* RIGHT PANEL */}
        <div className="glass p-6">
          <h2>System Info</h2>
          <p>Model: FinTech AI v1</p>
          <p>Status: Running</p>
        </div>

      </div>

      {/* BOTTOM PANEL */}
      <div className="glass m-10 p-6">
        <h2>AI Output</h2>
        <p>Waiting for input...</p>
      </div>
    </>
  );
}
