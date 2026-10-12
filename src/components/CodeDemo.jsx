import { useState } from 'react'

const demos = [
  { title: '代码生成', code: `$ opencode "创建一个JWT认证中间件"

✓ Analyzing project structure...
✓ Found Express.js framework
✓ Detected passport-jwt dependency
✓ Generating auth middleware...

Created: src/middleware/auth.js
Created: src/routes/auth.js
Updated: src/app.js
Generated: unit tests

3 files modified, 2 files created` },
  { title: 'Bug 修复', code: `$ opencode "修复事件监听器内存泄漏"

✓ Analyzing error trace...
✓ Found 3 unremoved event listeners
✓ Located in src/events/manager.js
✓ Applying fix...

Added cleanup in onDestroy lifecycle
Added cleanup in componentUnmount
Verified with memory profiler

Memory leak resolved · 0 regressions` },
  { title: '代码重构', code: `$ opencode "重构数据库连接池管理"

✓ Analyzing code complexity...
Cyclomatic complexity: 23 → 8
Extracting connection management
Adding proper error handling
Running test suite...

All 47 tests passing
Response time improved 34%
Added connection timeout handling

Refactored 2 files · Complexity -65%` }
]

function CodeDemo() {
  const [active, setActive] = useState(0)
  return (
    <section id="demo">
      <h2 className="section-title" style={{ textAlign: 'center' }}>看看它如何<span className="gradient-text">工作</span></h2>
      <p style={{ fontSize: 18, color: '#a1a1aa', textAlign: 'center', maxWidth: 600, margin: '0 auto 40px' }}>
        从需求描述到代码落地，一条命令搞定
      </p>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24, justifyContent: 'center', flexWrap: 'wrap' }}>
          {demos.map((d, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '10px 20px', borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: 'pointer',
              background: active === i ? '#6366f1' : '#1a1a25',
              color: active === i ? 'white' : '#a1a1aa',
              border: active === i ? '1px solid #6366f1' : '1px solid #27272a',
              transition: 'all 0.2s'
            }}>{d.title}</button>
          ))}
        </div>
        <div className="code-block" style={{ boxShadow: '0 0 40px rgba(99,102,241,0.1)' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }}></span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#eab308' }}></span>
            <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }}></span>
            <span style={{ marginLeft: 12, fontSize: 12, color: '#a1a1aa' }}>terminal</span>
          </div>
          <pre style={{ margin: 0, textAlign: 'left', whiteSpace: 'pre-wrap', fontSize: 14, lineHeight: 1.8 }}>
            <code style={{ color: '#e4e4e7' }}>{demos[active].code}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}

export default CodeDemo
