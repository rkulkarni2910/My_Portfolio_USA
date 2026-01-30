import React from 'react'

export default function Footer(){
  return (
    <footer className="mt-12 py-6 border-t border-slate-800 text-center text-sm text-slate-500">
      <div>Made with <span className="text-accent">❤</span> • © {new Date().getFullYear()} Rohan Kulkarni</div>
    </footer>
  )
}
