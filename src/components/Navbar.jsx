import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItem = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) => `px-3 py-2 text-sm md:text-[15px] transition-colors ${isActive ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </NavLink>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-white/50'} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="font-serif text-xl tracking-tight text-gray-900">Atelier Nord</Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItem('/', 'Home')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/services', 'Services')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
            <Link to="/contact" className="ml-2 inline-flex items-center rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:bg-gray-800 transition-colors">Book a Consultation</Link>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 flex flex-col">
            {navItem('/', 'Home')}
            {navItem('/portfolio', 'Portfolio')}
            {navItem('/services', 'Services')}
            {navItem('/about', 'About')}
            {navItem('/contact', 'Contact')}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
