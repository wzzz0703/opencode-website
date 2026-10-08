function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-[var(--text-heading)] mb-3">⟩ opencode</h3>
            <p className="text-[var(--text-muted)] max-w-md leading-relaxed">
              开源的 AI 编码助手，让终端成为你的智能开发环境。
              由社区驱动，为全球开发者服务。
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-heading)] mb-3">资源</h4>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li><a href="https://opencode.ai/docs" className="hover:text-[var(--accent-light)] transition-colors">文档</a></li>
              <li><a href="#commands" className="hover:text-[var(--accent-light)] transition-colors">命令参考</a></li>
              <li><a href="#ecosystem" className="hover:text-[var(--accent-light)] transition-colors">模型支持</a></li>
              <li><a href="https://opencode.ai/changelog" className="hover:text-[var(--accent-light)] transition-colors">更新日志</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--text-heading)] mb-3">社区</h4>
            <ul className="space-y-2 text-sm text-[var(--text-muted)]">
              <li><a href="https://github.com/nydus/opencode" target="_blank" className="hover:text-[var(--accent-light)] transition-colors">GitHub</a></li>
              <li><a href="https://github.com/nydus/opencode/issues" target="_blank" className="hover:text-[var(--accent-light)] transition-colors">Issue 追踪</a></li>
              <li><a href="https://discord.gg/opencode" target="_blank" className="hover:text-[var(--accent-light)] transition-colors">Discord</a></li>
              <li><a href="https://github.com/nydus/opencode#contributors" target="_blank" className="hover:text-[var(--accent-light)] transition-colors">贡献者</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-muted)]">© 2025 opencode. MIT License. Built with ❤️ by the community.</p>
          <div className="flex items-center gap-4 text-sm text-[var(--text-muted)]">
            <a href="https://github.com/nydus/opencode/blob/main/LICENSE" target="_blank" className="hover:text-[var(--accent-light)]">许可证</a>
            <span>·</span>
            <a href="https://opencode.ai/privacy" className="hover:text-[var(--accent-light)]">隐私</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
