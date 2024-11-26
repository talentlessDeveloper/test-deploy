import { motion } from "framer-motion";

export default function Hero() {
  const letters = "talentlessDeveloper".split("");

  return (
    <section className="h-screen flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4 overflow-hidden">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="text-2xl text-purple-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Crafting bold web experiences
        </motion.p>
      </motion.div>
    </section>
  );
}
