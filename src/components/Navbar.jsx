import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-fuchsia-500/30 bg-slate-950/90 backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#accueil" className="flex items-center">
          <img src="/logo Afro.jfif" alt="AfroEvent" className="h-8 w-20" />
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-fuchsia-600/20 hover:bg-fuchsia-600/30 transition-colors"
        >
          <img src="/menu-left.png" alt="Menu" className="w-6 h-6" />
        </button>

        <ul className={`md:flex items-center gap-6 text-sm font-medium text-slate-300 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-slate-950/95 border-b border-fuchsia-500/30 py-4 px-4 space-y-2' : 'hidden'}`}>
          <li>
            <a className="hover:text-fuchsia-300 transition-colors" href="#accueil" onClick={() => setIsMenuOpen(false)}>
              Accueil
            </a>
          </li>
          <li>
            <a className="hover:text-fuchsia-300 transition-colors" href="#evenements" onClick={() => setIsMenuOpen(false)}>
              Événements
            </a>
          </li>
          <li>
            <a className="hover:text-fuchsia-300 transition-colors" href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

