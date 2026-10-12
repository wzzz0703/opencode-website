function Footer() {
  const links = [
    { title: '资源', items: ['文档', '命令参考', '模型支持', '更新日志'] },
    { title: '社区', items: ['GitHub', 'Issue 追踪', 'Discord', '贡献者'] }
  ]
  return (
    <footer style={{ borderTop: '1px solid #27272a', marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 'bold', color: '#fafafa', marginBottom: 12 }}>
              <span style={{ color: '#6366f1' }}>⟩</span> opencode
            </h3>
            <p style={{ color: '#a1a1aa', maxWidth: 400, lineHeight: 1.7 }}>
              开源的 AI 编码助手，让终端成为你的智能开发环境。由社区驱动，为全球开发者服务。
            </p>
          </div>
          {links.map((group, i) => (
            <div key={i}>
              <h4 style={{ fontWeight: 600, color: '#fafafa', marginBottom: 12 }}>{group.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {group.items.map((item, j) => (
                  <li key={j}><a href="#" style={{ color: '#a1a1aa', textDecoration: 'none', fontSize: 14 }}>{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ borderTop: '1px solid #27272a', paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <p style={{ fontSize: 14, color: '#a1a1aa' }}>© 2025 opencode. MIT License.</p>
          <div style={{ display: 'flex', gap: 16, fontSize: 14, color: '#a1a1aa' }}>
            <a href="#" style={{ color: '#a1a1aa', textDecoration: 'none' }}>许可证</a>
            <span>·</span>
            <a href="#" style={{ color: '#a1a1aa', textDecoration: 'none' }}>隐私</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
