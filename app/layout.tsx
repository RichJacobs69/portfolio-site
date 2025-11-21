import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Amplitude } from "@/amplitude"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rich Jacobs - Product Manager",
  description: "Building data & AI products. Learning by doing.",
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-[#0a0a0a] text-gray-100`}
      >
        {/* Initialize Amplitude once per client load */}
        <Amplitude />

        {/* Header/Navigation */}
        <header className="border-b border-gray-800/50 backdrop-blur-sm sticky top-0 z-50 bg-[#0a0a0a]/90">
          <nav className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
              Rich Jacobs
            </Link>
            <div className="flex gap-6">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors font-medium">Home</Link>
              <Link href="/cv" className="text-gray-300 hover:text-white transition-colors font-medium">CV</Link>
              <Link href="/writing" className="text-gray-300 hover:text-white transition-colors font-medium">Writing</Link>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors font-medium">Contact</a>
            </div>
          </nav>
        </header>

        {/* Page content */}
        {children}

        {/* Footer */}
        <footer id="contact" className="relative w-full border-t border-gray-800/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-lime-950/10 via-transparent to-emerald-950/10"></div>
          <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-6 py-10 relative z-10">
            <div className="max-w-6xl">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Get In Touch</h2>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                I&apos;m currently exploring opportunities in AI product management. 
                Let&apos;s connect if you&apos;re working on real-world problems that can genuinely be solved with data and AI.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="mailto:rich@richjacobs.me"
                  className="px-8 py-3 bg-lime-500 hover:bg-lime-600 rounded-lg transition-all duration-300 font-medium glow-hover text-black"
                >
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/rjacobsuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-700 hover:border-lime-500 hover:bg-lime-500/5 rounded-lg transition-all duration-300 font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/RichJacobs69"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 border-2 border-gray-700 hover:border-lime-500 hover:bg-lime-500/5 rounded-lg transition-all duration-300 font-medium"
                >
                  GitHub
                </a>
              </div>
              <div className="text-gray-500 text-sm border-t border-gray-800/50 pt-8">
                <p>© 2025 Rich Jacobs. Built with Next.js and Tailwind CSS.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
