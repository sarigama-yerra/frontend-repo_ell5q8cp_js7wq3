function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gray-100">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="font-serif text-3xl md:text-4xl text-gray-900">About the Studio</h2>
          <p className="mt-4 text-gray-700">We design spaces that feel effortless, refined, and deeply human. Our aesthetic blends Scandinavian minimalism with warm textures and thoughtful detail.</p>
          <p className="mt-3 text-gray-700">From concept to completion, we curate environments that elevate everyday living — balancing function with quiet luxury.</p>
        </div>
      </div>
    </section>
  )
}

export default About
