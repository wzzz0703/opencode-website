const commands = [
  { cmd: 'opencode "描述需求"', desc: '自然语言描述，AI 自动理解并执行' },
  { cmd: 'opencode --search "用户认证"', desc: '语义搜索代码库中的相关内容' },
  { cmd: 'opencode --test src/auth.js', desc: '为指定文件生成单元测试' },
  { cmd: 'opencode --review', desc: '对当前变更进行代码审查' },
  { cmd: 'opencode --fix', desc: '自动诊断并修复当前错误' },
  { cmd: 'opencode --refactor "提取服务层"', desc: '按描述重构代码结构' },
  { cmd: 'opencode --model claude', desc: '切换 AI 模型提供商' },
  { cmd: 'opencode --help', desc: '查看所有可用命令和选项' },
]

function Commands() {
  return (
    <section id="commands">
      <h2 className="section-title text-center">常用<span className="gradient-text">命令</span></h2>
      <p className="section-subtitle text-center">简洁的命令行接口，覆盖开发全流程</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
        {commands.map((c, i) => (
          <div key={i} className="card flex items-start gap-4">
            <code className="text-[var(--accent-light)] font-mono text-sm whitespace-nowrap">{c.cmd}</code>
            <span className="text-[var(--text-muted)] text-sm">{c.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Commands
