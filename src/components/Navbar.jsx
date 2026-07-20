import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { path: '/', label: 'الرئيسية' },
  { path: '/about', label: 'من نحن' },
  { path: '/programs', label: 'برامجنا' },
  { path: '/contact', label: 'تواصل معنا' },
  { path: '/control', label: 'لوحة التحكم' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img alt="Bidayah Logo" className="h-20 md:h-24 w-auto object-contain" src="/assets/imgs/bidayah_kindergarten_logo/screen.png" />
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline font-semibold">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={
                location.pathname === l.path
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-on-surface-variant hover:text-primary transition-colors'
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          id="menu-btn"
          className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors"
          onClick={() => setOpen(!open)}
        >
          <span className="material-symbols-outlined text-3xl">{open ? 'close' : 'menu'}</span>
        </button>
        <button className="hidden md:inline-flex bg-primary text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all transform hover:scale-105 font-headline">
          سجل الآن
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className="flex flex-col px-margin-mobile md:px-margin-desktop py-4 gap-4 font-headline font-semibold bg-white border-b border-gray-100 shadow-lg">
            {links.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                onClick={() => setOpen(false)}
                className={
                  location.pathname === l.path
                    ? 'text-primary border-r-2 border-primary pr-2'
                    : 'text-on-surface-variant hover:text-primary transition-colors pr-2'
                }
              >
                {l.label}
              </Link>
            ))}
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold font-headline w-full mt-2">
              سجل الآن
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
