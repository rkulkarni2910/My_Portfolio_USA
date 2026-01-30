import React from 'react'

// Top navigation — minimal, anchors to sections
export default function Nav(){
  return (
    <header className="py-6 border-b border-slate-800">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
        <div className="text-white font-semibold">Rohan Kulkarni</div>
        <nav className="space-x-4 text-slate-400 text-sm hidden md:block">
          <a href="#about" className="hover:text-accent transition">About</a>
          <a href="#skills" className="hover:text-accent transition">Skills</a>
          <a href="#experience" className="hover:text-accent transition">Experience</a>
          <a href="#contact" className="hover:text-accent transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
