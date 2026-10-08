function Hero() {
  return (
    <section className="hero-section pt-32 pb-20 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--accent-glow)] text-[var(--accent-light)] text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--success)] animate-pulse"></span>
          开源 · 终端原生 · AI 驱动
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          你的终端里<br />
          坐着一位<span className="gradient-text">AI 工程师</span>
        </h1>
        <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
          <strong>opencode</strong> 是一款开源的 AI 编码助手，直接在终端中运行。
          它能理解你的代码库、管理多文件编辑、执行测试、甚至帮你修复 bug —— 一切都在你熟悉的命令行中完成。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#install" className="btn-primary text-lg px-8 py-4">
            <span>⚡</span> 立即开始
          </a>
          <a href="https://github.com/nydus/opencode" target="_blank" className="btn-secondary text-lg px-8 py-4">
            <span>⭐</span> GitHub 仓库
          </a>
        </div>
        <div className="mt-12 text-sm text-[var(--text-muted)]">
          <p>支持 <strong>GPT-4</strong> · <strong>Claude</strong> · <strong>o3</strong> · <strong>DeepSeek</strong> · <strong>本地模型</strong></p>
        </div>
      </div>
      {/* Decorative glow */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)] rounded-full opacity-[0.03] blur-[120px] pointer-events-none"></div>
    </section>
  )
}

export default Hero
