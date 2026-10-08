import { useState } from 'react'

const demos = [
  {
    title: '代码生成',
    prompt: '创建一个用户认证模块',
    output: `⟩ opencode "创建一个JWT认证中间件"

┌  Analyzing project structure...
├  Found Express.js framework
├  Detected passport-jwt dependency
└  Generating auth middleware...

✓ Created src/middleware/auth.js
✓ Created src/routes/auth.js
✓ Updated src/app.js
✓ Generated unit tests

  3 files modified, 2 files created`
  },
  {
    title: 'Bug 修复',
    prompt: '修复内存泄漏问题',
    output: `⟩ opencode "修复事件监听器内存泄漏"

┌  Analyzing error trace...
├  Found 3 unremoved event listeners
├  Located in src/events/manager.js
└  Applying fix...

✓ Added cleanup in onDestroy lifecycle
✓ Added cleanup in componentUnmount
✓ Verified with memory profiler

  Memory leak resolved · 0 regressions`
  },
  {
    title: '代码重构',
    prompt: '重构遗留代码',
    output: `⟩ opencode "重构数据库连接池管理"

┌  Analyzing code complexity...
├  Cyclomatic complexity: 23 → 8
├  Extracting connection management
├  Adding proper error handling
└  Running test suite...

✓ All 47 tests passing
✓ Response time improved 34%
✓ Added connection timeout handling

  Refactored 2 files · Complexity -65%`
  }
]

function CodeDemo() {
  const [active, setActive] = useState(0)

  return (
    <section id="demo">
      <h2 className="section-title text-center">看看它如何<span className="gradient-text">工作</span></h2>
      <p className="section-subtitle text-center">从需求描述到代码落地，一条命令搞定</p>
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-3 mb-6 justify-center flex-wrap">
          {demos.map((d, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all ${active === i ? 'bg-[var(--accent)] text-white' : 'bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)] hover:border-[var(--accent)]'}`}
            >
              {d.title}
            </button>
          ))}
        </div>
        <div className="code-block glow">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-2 text-xs text-[var(--text-muted)]">terminal</span>
          </div>
          <pre className="text-left whitespace-pre-wrap font-mono text-sm">
            <code dangerouslySetInnerHTML={{ __html: demos[active].output.replace(/</g, '&lt;').replace(/>/g, '&gt;') }} />
          </pre>
        </div>
      </div>
    </section>
  )
}

export default CodeDemo
