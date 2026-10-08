const features = [
  {
    icon: '🧠',
    title: '深度代码理解',
    desc: '基于上下文感知的代码分析，opencode 能理解项目结构、依赖关系和设计模式，给出精准的修改建议。'
  },
  {
    icon: '⚡',
    title: '多文件协同编辑',
    desc: '一次性跨多个文件执行修改，自动处理依赖关系。从接口定义到实现，一气呵成。'
  },
  {
    icon: '🔍',
    title: '智能搜索与探索',
    desc: '内置代码图谱探索能力，通过语义搜索快速定位函数、类和模块，无需记忆文件路径。'
  },
  {
    icon: '🧪',
    title: '测试驱动开发',
    desc: '自动生成单元测试、修复失败用例、提升覆盖率。支持多种测试框架和语言。'
  },
  {
    icon: '🔧',
    title: '自主调试修复',
    desc: '遇到 bug 时，opencode 会分析错误信息、定位根因、提出修复方案并执行验证，形成完整闭环。'
  },
  {
    icon: '🌐',
    title: '多模型支持',
    desc: '支持 OpenAI、Anthropic、Google、本地 Ollama 等多种模型提供商，自由切换找到最佳方案。'
  },
  {
    icon: '📋',
    title: '任务规划与追踪',
    desc: '复杂需求自动拆解为可执行任务，实时追踪进度。每个步骤清晰可追溯。'
  },
  {
    icon: '🤝',
    title: '团队协作',
    desc: '多 Agent 协作架构，支持并行工作。代码审查、PR 创建一气呵成。'
  },
  {
    icon: '🔒',
    title: '安全与隐私',
    desc: '本地优先架构，代码不离开你的机器。支持完全离线的本地模型推理。'
  }
]

function Features() {
  return (
    <section id="features">
      <h2 className="section-title text-center">为什么选择 <span className="gradient-text">opencode</span></h2>
      <p className="section-subtitle text-center">不仅仅是代码补全，而是你的终端 AI 工程师伙伴</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="card">
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-[var(--text-heading)] mb-3">{f.title}</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
