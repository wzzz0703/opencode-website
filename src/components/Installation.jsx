import { useState } from 'react'

const methods = [
  { title: 'npm (推荐)', cmd: 'npm install -g opencode', note: '一行命令，全局可用' },
  { title: 'Homebrew', cmd: 'brew install opencode', note: 'macOS / Linux' },
  { title: 'Go 安装', cmd: 'go install github.com/nydus/opencode@latest', note: '适合 Go 开发者' },
  { title: 'Docker', cmd: 'docker run -it ghcr.io/nydus/opencode:latest', note: '容器化部署' }
]

function Installation() {
  const [active, setActive] = useState(0)
  return (
    <section id="install">
      <h2 className="section-title" style={{ textAlign: 'center' }}>快速<span className="gradient-text">上手</span></h2>
      <p style={{ fontSize: 18, color: '#a1a1aa', textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
        选择你喜欢的安装方式，几分钟内开始使用
      </p>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
          {methods.map((m, i) => (
            <button key={i} onClick={() => setActive(i)} className="card" style={{ padding: 16, textAlign: 'center', cursor: 'pointer' }}>
              <div style={{ fontWeight: 600, color: '#fafafa', fontSize: 14 }}>{m.title}</div>
              <div style={{ fontSize: 12, color: '#a1a1aa', marginTop: 4 }}>{m.note}</div>
            </button>
          ))}
        </div>
        <div className="code-block" style={{ boxShadow: '0 0 40px rgba(99,102,241,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: '#818cf8' }}>$</span>
            <code style={{ color: '#22c55e', fontSize: 18 }}>{methods[active].cmd}</code>
          </div>
        </div>
        <div className="code-block" style={{ marginTop: 24 }}>
          <h4 style={{ color: '#fafafa', fontWeight: 600, marginBottom: 12 }}>首次使用</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14 }}>
            <div><span style={{ color: '#818cf8' }}>$</span> <code style={{ color: '#22c55e' }}>opencode init</code> <span style={{ color: '#a1a1aa' }}># 初始化项目</span></div>
            <div><span style={{ color: '#818cf8' }}>$</span> <code style={{ color: '#22c55e' }}>opencode "帮我添加用户登录功能"</code></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Installation
