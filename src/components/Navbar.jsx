import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

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

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, height: 64,
    background: scrolled ? 'rgba(10,10,15,0.9)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px)' : 'none',
    borderBottom: scrolled ? '1px solid #27272a' : 'none',
    transition: 'all 0.3s',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    maxWidth: 1200, margin: '0 auto', padding: '0 24px', width: '100%'
  }

  return (
    <nav style={navStyle}>
      <a href="#" style={{ fontSize: 20, fontWeight: 'bold', color: '#fafafa', textDecoration: 'none' }}>
        <span style={{ color: '#6366f1' }}>⟩</span> opencode
      </a>
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="nav-link" style={{ fontSize: 14, color: '#a1a1aa', textDecoration: 'none' }}>
            {l.label}
          </a>
        ))}
        <a href="https://github.com/nydus/opencode" target="_blank" className="btn-primary" style={{ padding: '8px 20px', fontSize: 14 }}>
          GitHub
        </a>
      </div>
    </nav>
  )
}

export default Navbar
