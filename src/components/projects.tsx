import { motion } from "framer-motion";

const projects = [
  {
    name: "Neon Dreams E-commerce",
    description: "A vibrant online store with neon-inspired design",
  },
  {
    name: "Quantum Task Manager",
    description: "A futuristic task manager with particle effects",
  },
  {
    name: "Cyberpunk Weather",
    description: "Weather app with a dystopian cyberpunk interface",
  },
  {
    name: "Digital Nomad Hub",
    description:
      "A community platform for remote workers with sleek animations",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-4 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-lg shadow-lg border border-purple-500"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
            }}
          >
            <h3 className="text-2xl font-semibold mb-2 text-purple-400">
              {project.name}
            </h3>
            <p className="text-gray-300">{project.description}</p>
            <motion.button
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
