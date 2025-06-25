// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-zinc-800/70 backdrop-blur-md shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-bold text-teal-400">Jennifer Torres</span>
          <ul className="flex space-x-6 text-sm md:text-base">
            <li><a href="#about" className="hover:text-teal-400 transition">About</a></li>
            <li><a href="#projects" className="hover:text-teal-400 transition">Projects</a></li>
            <li><a href="#resume" className="hover:text-teal-400 transition">Resume</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-28 space-y-32 px-6 max-w-4xl mx-auto">
        {/* About */}
        <section id="about">
          <h2 className="text-3xl font-bold mb-2 text-teal-400 border-b border-zinc-700 pb-2">About Me</h2>
          <p className="text-zinc-300 text-lg leading-relaxed">
            Work in progress.
          </p>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-3xl font-bold mb-2 text-teal-400 border-b border-zinc-700 pb-2">Projects</h2>
          <p className="text-zinc-300 text-lg">
            Work in progress.
          </p>
        </section>

        {/* Resume */}
        <section id="resume">
          <h2 className="text-3xl font-bold mb-2 text-teal-400 border-b border-zinc-700 pb-2">Resume</h2>
          <p className="text-zinc-300 text-lg">
            Work in progress.
          </p>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-2 text-teal-400 border-b border-zinc-700 pb-2">Contact</h2>
          <p className="text-zinc-300 text-lg">
            Work in progress.
          </p>
        </section>
      </div>
    </div>
  );
}
