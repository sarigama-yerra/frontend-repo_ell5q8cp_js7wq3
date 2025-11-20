import { useEffect, useState } from 'react'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const filters = ['All', 'Residential', 'Commercial', 'Renovation', 'Styling']

function Portfolio() {
  const [active, setActive] = useState('All')
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const url = active === 'All' ? `${BACKEND_URL}/api/projects` : `${BACKEND_URL}/api/projects?category=${encodeURIComponent(active)}`
      try {
        const res = await fetch(url)
        const data = await res.json()
        setProjects(data)
      } catch (e) {
        setProjects([])
      }
    }
    fetchData()
  }, [active])

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Portfolio</h2>
            <p className="mt-3 text-gray-600 max-w-2xl">Selected works across residential, commercial, and bespoke renovation projects.</p>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {filters.map((f) => (
              <button key={f} onClick={() => setActive(f)} className={`rounded-full px-4 py-2 text-sm border transition-colors ${active === f ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white'}`}>{f}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 md:hidden flex gap-2 overflow-auto no-scrollbar">
          {filters.map((f) => (
            <button key={f} onClick={() => setActive(f)} className={`rounded-full px-4 py-2 text-sm border whitespace-nowrap ${active === f ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-700'}`}>{f}</button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length === 0 && (
            <div className="col-span-full text-gray-500">No projects yet. Add projects in the database to see them here.</div>
          )}
          {projects.map((p) => (
            <a key={p.id} href={`/portfolio/${p.slug}`} className="group block overflow-hidden rounded-2xl border border-gray-200">
              <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                <img src={p.cover_image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">{p.title}</h3>
                  <span className="text-xs text-gray-600">{p.category}</span>
                </div>
                {p.location && <p className="text-sm text-gray-600 mt-1">{p.location}</p>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
