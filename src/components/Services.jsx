import { Home, Building2, Ruler, Cube, Brush } from 'lucide-react'

const services = [
  { icon: Home, title: 'Interior Architecture', desc: 'Structural planning, material specification, and spatial refinement for high-end residences and boutique spaces.' },
  { icon: Building2, title: 'Full Home Design', desc: 'Concept to completion. Cohesive design language across every room and detail.' },
  { icon: Ruler, title: 'Space Planning', desc: 'Efficient layouts that enhance flow, light, and comfort while maximizing utility.' },
  { icon: Cube, title: '3D Visualization', desc: 'Photo-realistic renders to preview forms, palettes, and materials before execution.' },
  { icon: Brush, title: 'Styling & Décor', desc: 'Curated furnishings, art direction, and finishing touches for a refined aesthetic.' }
]

function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Services</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Design that blends functionality, elegance, and comfort. Tailored for discerning clients and contemporary lifestyles.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl border border-gray-200 hover:shadow-sm transition-shadow">
              <Icon className="text-gray-900" />
              <h3 className="mt-4 font-medium text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
