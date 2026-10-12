const commands = [
  { cmd: 'opencode "描述需求"', desc: '自然语言描述，AI 自动理解并执行' },
  { cmd: 'opencode --search "用户认证"', desc: '语义搜索代码库中的相关内容' },
  { cmd: 'opencode --test src/auth.js', desc: '为指定文件生成单元测试' },
  { cmd: 'opencode --review', desc: '对当前变更进行代码审查' },
  { cmd: 'opencode --fix', desc: '自动诊断并修复当前错误' },
  { cmd: 'opencode --refactor "提取服务层"', desc: '按描述重构代码结构' },
  { cmd: 'opencode --model claude', desc: '切换 AI 模型提供商' },
  { cmd: 'opencode --help', desc: '查看所有可用命令和选项' }
]

function Commands() {
  return (
    <section id="commands">
      <h2 className="section-title" style={{ textAlign: 'center' }}>常用<span className="gradient-text">命令</span></h2>
      <p style={{ fontSize: 18, color: '#a1a1aa', textAlign: 'center', maxWidth: 600, margin: '0 auto 64px' }}>
        简洁的命令行接口，覆盖开发全流程
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 16, maxWidth: 900, margin: '0 auto' }}>
        {commands.map((c, i) => (
          <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <code style={{ color: '#818cf8', fontSize: 14, whiteSpace: 'nowrap' }}>{c.cmd}</code>
            <span style={{ color: '#a1a1aa', fontSize: 14 }}>{c.desc}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Commands
