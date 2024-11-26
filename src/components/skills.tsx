import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "Tailwind CSS", level: 85 },
];

export default function Skills() {
  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-purple-900 to-indigo-900">
      <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">
        Skills
      </h2>
      <div className="max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="mb-6"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between mb-2">
              <span className="text-lg">{skill.name}</span>
              <span className="text-lg">{skill.level}%</span>
            </div>
            <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
