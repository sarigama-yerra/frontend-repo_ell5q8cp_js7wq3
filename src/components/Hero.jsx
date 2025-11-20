import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0"><Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} /></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl text-gray-900 max-w-3xl tracking-tight"
        >
          Crafting Timeless, Modern Interiors
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 text-gray-700 text-base md:text-lg max-w-xl"
        >
          Scandinavian restraint. Urban sophistication. Spaces that breathe luxury without shouting.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 flex items-center gap-3"
        >
          <a href="#portfolio" className="inline-flex rounded-full bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">Explore Portfolio</a>
          <a href="/contact" className="inline-flex rounded-full border border-gray-900 text-gray-900 px-6 py-3 text-sm hover:bg-gray-900 hover:text-white transition-colors">Book a Consultation</a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
