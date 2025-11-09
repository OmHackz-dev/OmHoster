import { DownloadButton } from "./download-button"

export function HeroSection() {
  return (
    <section className="min-h-[600px] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
          🚀 Simple File Hosting
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Host Your Folders{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Locally</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
          Om Hoster makes it incredibly easy to share files across your local network. Just pick a folder, set a port,
          and you're live.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <DownloadButton />
          <a
            href="https://github.com/omhackz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors font-medium"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-16">
          <p className="text-sm text-muted-foreground mb-4">Trusted by developers worldwide</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold">14 MB</div>
              <div className="text-xs text-muted-foreground">Lightweight</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">Flask</div>
              <div className="text-xs text-muted-foreground">Powered by</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold">Free</div>
              <div className="text-xs text-muted-foreground">Open Source</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
