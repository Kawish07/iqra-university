import { motion } from 'framer-motion';

const Hero = () => (
  <section className="relative bg-blue-900 text-white h-[60vh] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    <motion.div
      className="relative z-10 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Iqra University</h1>
      <p className="text-lg md:text-2xl mb-6">Empowering the next generation of leaders and innovators.</p>
      <a href="#programs" className="inline-block bg-white text-blue-900 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition">Explore Programs</a>
    </motion.div>
  </section>
);

export default Hero;
