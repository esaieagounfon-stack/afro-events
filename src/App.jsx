import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'

function App() {
  const eventDate = useMemo(() => new Date('2026-04-20T20:00:00'), [])
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime()
      const target = eventDate.getTime()
      const diff = Math.max(0, target - now)

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)

      setCountdown({ days, hours, minutes, seconds })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [eventDate])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-10 lg:py-16">
        <section id="accueil" className="rounded-3xl border border-fuchsia-500/30 bg-gradient-to-br from-slate-900 via-slate-800 to-fuchsia-950 p-6 shadow-2xl shadow-fuchsia-900/40 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-fuchsia-600/20 px-3 py-1 text-sm font-semibold text-fuchsia-300">
              PROCHAIN CONCERT
              </p>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
                Concert Vano Baby : 10 ANS DE CARRIERE
              </h1>
              <p className="mt-4 text-slate-200">
                Le grand concert des 10 ans de carrière de Vano Baby se tiendra le 4 avril 2026 au Majestic Cinéma Wologuédé à Cotonou. Cet événement historique célèbre une décennie de musique du « Chef du Gang ».
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a href="#evenements" className="rounded-full border border-fuchsia-400 bg-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:-translate-y-0.5 hover:bg-fuchsia-400">
                  Voir les événements
                </a>
                <a href="#contact" className="rounded-full border border-slate-200/20 px-6 py-3 text-sm font-semibold text-slate-100/90 transition hover:bg-slate-700/40">
                  Participer
                </a>
              </div>

              <div className="mt-8 grid w-full max-w-xs grid-cols-4 gap-2 sm:max-w-md sm:grid-cols-4">
                <div className="rounded-xl bg-black/40 p-3 text-center">
                  <div className="text-2xl font-bold text-fuchsia-300">{countdown.days}</div>
                  <div className="text-xs uppercase text-slate-300">Jours</div>
                </div>
                <div className="rounded-xl bg-black/40 p-3 text-center">
                  <div className="text-2xl font-bold text-fuchsia-300">{countdown.hours}</div>
                  <div className="text-xs uppercase text-slate-300">Heures</div>
                </div>
                <div className="rounded-xl bg-black/40 p-3 text-center">
                  <div className="text-2xl font-bold text-fuchsia-300">{countdown.minutes}</div>
                  <div className="text-xs uppercase text-slate-300">Minutes</div>
                </div>
                <div className="rounded-xl bg-black/40 p-3 text-center">
                  <div className="text-2xl font-bold text-fuchsia-300">{countdown.seconds}</div>
                  <div className="text-xs uppercase text-slate-300">Secondes</div>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-fuchsia-500/30 bg-gradient-to-br from-fuchsia-600/20 via-fuchsia-900/20 to-black p-2">
              <img src="/Gang.jfif" alt="Affiche événement principal" className="h-[360px] w-full rounded-xl object-cover brightness-95 contrast-125" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,20,147,0.35),_transparent_55%)]" />
            </div>
          </div>
        </section>

        <section id="evenements" className="mt-12 scroll-mt-24">
          <h2 className="mb-4 text-3xl font-bold text-fuchsia-300">Événements à venir</h2>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: 'Festival Afro Vibes', date: '2 juin 2026', location: 'Parc des Expositions', badge: 'Première édition' },
              { title: 'Nuit des Bâtisseurs', date: '15 juin 2026', location: 'Palais des Congrès', badge: 'DJ Rinox en Live' },
              { title: 'Caravane Culture', date: '28 juin 2026', location: 'Stade de Cotonou', badge: 'Grand show' }
            ].map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-800/70 bg-slate-900/70 p-5 shadow-xl shadow-black/40">
                <span className="inline-flex items-center rounded-full bg-fuchsia-500/20 px-3 py-1 text-xs font-semibold text-fuchsia-200">
                  {item.badge}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{item.location}</p>
                <p className="mt-2 text-sm text-slate-400">{item.date}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-12 scroll-mt-24 rounded-2xl border border-fuchsia-500/20 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-slate-300">Envie d’agir comme organisateur ou sponsor ? Écris-nous pour intégrer la scène.</p>
          <a href="mailto:contact@afroevent.bj" className="mt-4 inline-flex rounded-lg bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400">
            contact@afroevent.bj
          </a>
        </section>
      </main>
    </div>
  )
}

export default App