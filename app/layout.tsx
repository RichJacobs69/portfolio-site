import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        {/* Header/Navigation - persists across all pages */}
        <header className="border-b border-gray-800">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold">Rich Jacobs</div>
            <div className="flex gap-6">
              <a href="/" className="hover:text-gray-400">Home</a>
              <a href="/cv" className="hover:text-gray-400">CV</a>
              <a href="/writing" className="hover:text-gray-400">Writing</a>
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </div>
          </nav>
        </header>

        {/* Page content */}
        {children}
        {/* Footer - persists across all pages */}
        <footer id="contact" className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-800">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-12">Get In Touch</h2>
            <p className="text-gray-300 text-lg mb-8">
              I'm currently exploring opportunities in AI product management. 
              Let's connect if you're working on real-world problems that can genuinely be solved with data and AI.
            </p>
            
            <div className="flex gap-6 mb-12">
              <a 
                href="mailto:rich@richjacobs.me" 
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/rjacobsuk" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/RichJacobs69" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                GitHub
              </a>
            </div>

            <div className="text-gray-500 text-sm">
              <p>© 2025 Rich Jacobs. Built with Next.js and Tailwind CSS.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}