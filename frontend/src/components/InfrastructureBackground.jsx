import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";

const InfrastructureBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = useMemo(() => ({
    fullScreen: { enable: false }, // Important to keep it inside the hero container
    fpsLimit: 60,
    particles: {
      color: { value: "#45A29E" },
      links: {
        color: "#45A29E",
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: { enable: true, speed: 0.4 },
      number: { value: 60 },
      opacity: { value: 0.3 },
      size: { value: { min: 1, max: 2 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 200 } },
    },
  }), []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-void">
      {/* 1. Subtle Structural Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#C5C6C7_1px,transparent_1px),linear-gradient(to_bottom,#C5C6C7_1px,transparent_1px)] bg-[size:4rem_4rem]"
      />

      {/* 2. Particle Connectivity (Identity Layer) */}
      {init && (
        <Particles 
          id="tsparticles" 
          options={particlesOptions} 
          className="absolute inset-0 h-full w-full"
        />
      )}

      {/* 3. Radial Gradient "Glow" for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(69,162,158,0.1)_0%,rgba(11,12,16,0)_70%)]" />
    </div>
  );
};

export default InfrastructureBackground;