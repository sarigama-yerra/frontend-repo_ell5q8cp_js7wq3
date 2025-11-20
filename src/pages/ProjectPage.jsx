import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ProjectPage(){
  const [project, setProject] = useState(null)

  useEffect(() => {
    const slug = window.location.pathname.split('/').pop()
    const load = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/projects/${slug}`)
        if (!res.ok) throw new Error('Not found')
        const data = await res.json()
        setProject(data)
      } catch (e) {
        setProject({ error: true })
      }
    }
    load()
  }, [])

  if (!project) return null

  if (project.error) {
    return (
      <div className="bg-white min-h-screen">
        <Navbar />
        <div className="max-w-5xl mx-auto px-6 py-24 text-gray-700">Project not found.</div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <section className="pt-28">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="font-serif text-4xl text-gray-900">{project.title}</h1>
            <p className="mt-2 text-gray-600">{project.location} • {project.category}</p>
          </div>
          <div className="mt-6 aspect-[16/9] bg-gray-100">
            <img src={project.cover_image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        </section>

        {project.summary && (
          <section className="py-14">
            <div className="max-w-3xl mx-auto px-6 text-gray-700 leading-relaxed">{project.summary}</div>
          </section>
        )}

        {Array.isArray(project.gallery) && project.gallery.length > 0 && (
          <section className="pb-16">
            <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((img, i) => (
                <div key={i} className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img src={img.url || img} alt={img.caption || `Image ${i+1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}
