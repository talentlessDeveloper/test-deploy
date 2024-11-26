import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 px-4 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold mb-8 text-center text-purple-400">
          About Me
        </h2>
        <motion.p
          className="text-lg text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Hi, I&apos;m talentlessDeveloper, a passionate frontend developer with
          a flair for creating bold and engaging web applications. My username
          might be humble, but my ambitions are not. I push the boundaries of
          web design and user experience, turning simple ideas into captivating
          digital realities.
        </motion.p>
      </motion.div>
    </section>
  );
}
