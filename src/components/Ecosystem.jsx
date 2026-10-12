const models = [
  { name: 'OpenAI', desc: 'GPT-4 / o1 / o3', color: '#10a37f' },
  { name: 'Anthropic', desc: 'Claude 3.5', color: '#d97757' },
  { name: 'Google', desc: 'Gemini Pro', color: '#4285f4' },
  { name: 'DeepSeek', desc: 'V3 / R1', color: '#29a5e8' },
  { name: 'Ollama', desc: '本地部署', color: '#f5f5f5' },
  { name: 'OpenRouter', desc: '统一路由', color: '#d2a8ff' }
]

const integrations = [
  { name: 'VS Code', icon: '💻' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'GitLab', icon: '🦊' },
  { name: 'Docker', icon: '🐳' },
  { name: 'CI/CD', icon: '🔄' },
  { name: 'Slack', icon: '💬' }
]

function Ecosystem() {
  return (
    <section id="ecosystem">
      <h2 className="section-title" style={{ textAlign: 'center' }}>丰富的<span className="gradient-text">生态</span></h2>
      <p style={{ fontSize: 18, color: '#a1a1aa', textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
        支持主流 AI 模型和开发工具链
      </p>
      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fafafa', textAlign: 'center', marginBottom: 32 }}>支持的 AI 模型</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16, marginBottom: 64 }}>
        {models.map((m, i) => (
          <div key={i} className="card" style={{ textAlign: 'center', padding: 24 }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', margin: '0 auto 12px', background: m.color + '20', border: `2px solid ${m.color}` }}></div>
            <div style={{ fontWeight: 600, color: '#fafafa', fontSize: 14 }}>{m.name}</div>
            <div style={{ fontSize: 12, color: '#a1a1aa', marginTop: 4 }}>{m.desc}</div>
          </div>
        ))}
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fafafa', textAlign: 'center', marginBottom: 32 }}>工具链集成</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
        {integrations.map((ig, i) => (
          <div key={i} className="card" style={{ textAlign: 'center', padding: 24 }}>
            <div style={{ fontSize: 36, marginBottom: 12 }}>{ig.icon}</div>
            <div style={{ fontWeight: 600, color: '#fafafa', fontSize: 14 }}>{ig.name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Ecosystem
