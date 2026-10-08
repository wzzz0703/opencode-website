const models = [
  { name: 'OpenAI', desc: 'GPT-4 / o1 / o3', color: '#10a37f' },
  { name: 'Anthropic', desc: 'Claude 3.5 / Sonnet', color: '#d97757' },
  { name: 'Google', desc: 'Gemini Pro / Flash', color: '#4285f4' },
  { name: 'DeepSeek', desc: 'V3 / R1', color: '#29a5e8' },
  { name: 'Ollama', desc: '本地部署模型', color: '#f5f5f5' },
  { name: 'OpenRouter', desc: '统一模型路由', color: '#d2a8ff' },
]

const integrations = [
  { name: 'VS Code', icon: '💻', desc: '编辑器集成' },
  { name: 'GitHub', icon: '🐙', desc: 'PR 与 Issue 管理' },
  { name: 'GitLab', icon: '🦊', desc: 'CI/CD 集成' },
  { name: 'Docker', icon: '🐳', desc: '容器化运行' },
  { name: 'CI/CD', icon: '🔄', desc: '自动化流水线' },
  { name: 'Slack', icon: '💬', desc: '团队通知' },
]

function Ecosystem() {
  return (
    <section id="ecosystem">
      <h2 className="section-title text-center">丰富的<span className="gradient-text">生态</span></h2>
      <p className="section-subtitle text-center">支持主流 AI 模型和开发工具链</p>

      <h3 className="text-xl font-semibold text-[var(--text-heading)] text-center mb-8">支持的 AI 模型</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
        {models.map((m, i) => (
          <div key={i} className="card text-center py-6 px-4">
            <div className="w-10 h-10 rounded-full mx-auto mb-3" style={{ background: m.color + '20', border: `2px solid ${m.color}` }}></div>
            <div className="font-semibold text-[var(--text-heading)] text-sm">{m.name}</div>
            <div className="text-xs text-[var(--text-muted)] mt-1">{m.desc}</div>
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold text-[var(--text-heading)] text-center mb-8">工具链集成</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {integrations.map((ig, i) => (
          <div key={i} className="card text-center py-6 px-4">
            <div className="text-3xl mb-3">{ig.icon}</div>
            <div className="font-semibold text-[var(--text-heading)] text-sm">{ig.name}</div>
            <div className="text-xs text-[var(--text-muted)] mt-1">{ig.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ecosystem
