import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: '功能', href: '#features' },
    { label: '演示', href: '#demo' },
    { label: '安装', href: '#install' },
    { label: '命令', href: '#commands' },
    { label: '生态', href: '#ecosystem' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold text-[var(--text-heading)]">
          <span className="text-2l">⟩</span> opencode
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-[var(--text-muted)] hover:text-[var(--accent-light)] transition-colors">{l.label}</a>
          ))}
          <a href="https://github.com/nydus/opencode" target="_blank" className="btn-primary text-sm px-5 py-2">
            GitHub
          </a>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[var(--text)] text-2xl">&≡;</button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-elevated)] border-b border-[var(--border)] px-6 py-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="block py-2 text-[var(--text-muted)] hover:text-[var(--accent-light)]">{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
