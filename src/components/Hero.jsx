function Hero() {
  return (
    <section style={{ paddingTop: 200, paddingBottom: 120, textAlign: 'center' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 16px', borderRadius: 999, border: '1px solid #27272a', background: 'rgba(99,102,241,0.1)', color: '#818cf8', fontSize: 14, marginBottom: 32 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
          开源 · 终端原生 · AI 驱动
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 7vw, 72px)', fontWeight: 'bold', marginBottom: 24, lineHeight: 1.1 }}>
          你的终端里<br />坐着一位<span className="gradient-text"> AI 工程师</span>
        </h1>
        <p style={{ fontSize: 20, color: '#a1a1aa', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.8 }}>
          <strong style={{ color: '#e4e4e7' }}>opencode</strong> 是一款开源的 AI 编码助手，直接在终端中运行。
          它能理解你的代码库、管理多文件编辑、执行测试、甚至帮你修复 bug。
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#install" className="btn-primary" style={{ padding: '14px 32px', fontSize: 18 }}>
            ⚡ 立即开始
          </a>
          <a href="https://github.com/nydus/opencode" target="_blank" className="btn-secondary" style={{ padding: '14px 32px', fontSize: 18 }}>
            ⭐ GitHub 仓库
          </a>
        </div>
        <div style={{ marginTop: 48, fontSize: 14, color: '#a1a1aa' }}>
          支持 <strong>GPT-4</strong> · <strong>Claude</strong> · <strong>o3</strong> · <strong>DeepSeek</strong> · <strong>本地模型</strong>
        </div>
      </div>
    </section>
  )
}

export default Hero
