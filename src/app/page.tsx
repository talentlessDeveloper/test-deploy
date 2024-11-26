"use client";

import { motion } from "framer-motion";
import About from "~/components/about";
import Contact from "~/components/contact";
import Hero from "~/components/hero";
import Projects from "~/components/projects";
import Skills from "~/components/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-black" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}
