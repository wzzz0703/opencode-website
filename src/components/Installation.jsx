import { useState } from 'react'

const methods = [
  {
    title: 'npm (推荐)',
    cmd: 'npm install -g opencode',
    note: '一行命令，全局可用'
  },
  {
    title: 'Homebrew',
    cmd: 'brew install opencode',
    note: 'macOS / Linux 包管理'
  },
  {
    title: 'Go 安装',
    cmd: 'go install github.com/nydus/opencode@latest',
    note: '适合 Go 开发者'
  },
  {
    title: 'Docker',
    cmd: 'docker run -it ghcr.io/nydus/opencode:latest',
    note: '容器化部署，隔离环境'
  }
]

function Installation() {
  const [active, setActive] = useState(0)

  return (
    <section id="install">
      <h2 className="section-title text-center">快速<span className="gradient-text">上手</span></h2>
      <p className="section-subtitle text-center">选择你喜欢的安装方式，几分钟内开始使用</p>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          {methods.map((m, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`card text-center py-4 px-3 transition-all ${active === i ? 'border-[var(--accent)] bg-[var(--accent-glow)]' : ''}`}
            >
              <div className="font-semibold text-[var(--text-heading)] text-sm">{m.title}</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">{m.note}</div>
            </button>
          ))}
        </div>
        <div className="code-block glow">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <span className="text-xs text-[var(--text-muted)]">安装命令</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="prompt text-[var(--accent-light)]">$</span>
            <code className="text-[var(--success)] text-lg">{methods[active].cmd}</code>
          </div>
        </div>
        <div className="mt-8 code-block">
          <h4 className="text-[var(--text-heading)] font-semibold mb-3">首次使用</h4>
          <div className="space-y-2 text-sm">
            <div><span className="prompt text-[var(--accent-light)]">$</span> <code className="text-[var(--success)]">opencode init</code> <span className="text-[var(--text-muted)]"># 初始化项目</span></div>
            <div><span className="prompt text-[var(--accent-light)]">$</span> <code className="text-[var(--success)]">opencode "帮我添加用户登录功能"</code></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Installation
