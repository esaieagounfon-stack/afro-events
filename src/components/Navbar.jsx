export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#accueil" className="flex items-center">
          <img src="/logo Afro.jfif" alt="AfroEvent" className="h-10 w-auto" />
        </a>

        <ul className="flex items-center gap-6 text-sm font-medium text-slate-700">
          <li>
            <a className="hover:text-slate-950" href="#accueil">
              Accueil
            </a>
          </li>
          <li>
            <a className="hover:text-slate-950" href="#evenements">
              Événements
            </a>
          </li>
          <li>
            <a className="hover:text-slate-950" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

