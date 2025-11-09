import { DownloadButton } from "@/components/download-button"
import { FeatureCard } from "@/components/feature-card"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-pretty">Why Choose Om Hoster?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Dead Simple"
              description="Click, browse folder, set port, start hosting. No complex configuration needed."
              icon="⚡"
            />
            <FeatureCard
              title="Local Control"
              description="Host on localhost or your local IP. Everything stays within your network."
              icon="🔒"
            />
            <FeatureCard
              title="Flexible Ports"
              description="Choose any port you want. Default is 2012, but customize to your needs."
              icon="🎯"
            />
            <FeatureCard
              title="Lightweight"
              description="Only 14 MB. Built with Python Flask for minimal resource usage."
              icon="✨"
            />
            <FeatureCard
              title="Real-time Logging"
              description="Watch everything in real-time. See exactly what's being served."
              icon="📊"
            />
            <FeatureCard
              title="Open Site"
              description="One-click button to open your hosted site directly in the browser."
              icon="🌐"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-pretty">How It Works</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Download & Run</h3>
                <p className="text-muted-foreground">Download the executable, run it, and you're ready to go.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Select Folder</h3>
                <p className="text-muted-foreground">Click "Browse" and select the folder you want to host.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Set Port (Optional)</h3>
                <p className="text-muted-foreground">Change port if needed, or keep the default 2012.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Start Hosting</h3>
                <p className="text-muted-foreground">Click "Start Hosting" and your folder is live on your network.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-pretty">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Application Details</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> File Size: 14.00 MB
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Framework: Python Flask
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Platform: Windows
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Format: .exe executable
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Hosting Options</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Localhost: 127.0.0.1
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Local IP: 10.x.x.x (LAN)
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Custom Ports: Any port
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-primary">✓</span> Router IP: Via local network
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-pretty">App Interface</h2>
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vMZOrToD4JaCJqtSc5rNeBWGjdPbTk.png"
              alt="Om Hoster Application Interface"
              className="w-full h-auto"
            />
          </div>
          <p className="text-center text-muted-foreground mt-6">
            Clean and intuitive interface for easy folder hosting configuration.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground text-pretty">Ready to Host Your Folders?</h2>
          <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto">
            Download Om Hoster now and start hosting your files locally in seconds.
          </p>
          <DownloadButton />
        </div>
      </section>

      <Footer />
    </main>
  )
}
