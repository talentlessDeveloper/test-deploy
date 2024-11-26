import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 px-4 md:px-20 bg-gradient-to-r from-gray-900 to-black">
      <h2 className="text-4xl font-bold mb-12 text-center text-purple-400">
        Get in Touch
      </h2>
      <motion.form
        className="max-w-lg mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2 text-purple-400"
          >
            Name
          </label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-purple-400"
          >
            Email
          </label>
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            id="email"
            name="email"
            className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-purple-400"
          >
            Message
          </label>
          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            id="message"
            name="message"
            rows={4}
            className="w-full px-3 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            required
          ></motion.textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(167, 139, 250, 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
