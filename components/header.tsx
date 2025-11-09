export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.ico-P0TXcSL4dbOvD8NI4DKFElRdVS6vdx.x-icon"
            alt="Om Hoster Logo"
            className="w-8 h-8"
          />
          <h1 className="text-2xl font-bold">Om Hoster</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
          <a
            href="https://github.com/omhackz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://omhackz.pages.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Author
          </a>
        </nav>
      </div>
    </header>
  )
}
