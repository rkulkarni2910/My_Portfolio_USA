import React from 'react'

const certs = [
  'Java Full Stack development',
  'Python for Machine Learning',
  'Data Structures in C',
  'AI For All',
  'Accenture Developer Program',
  'Deloitte STEM Connect Virtual Experience'
]

export default function Certifications(){
  return (
    <section id="certifications" className="mt-10 fade-in">
      <h3 className="text-xl font-semibold text-white">Certifications</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {certs.map(c => (
          <div key={c} className="p-3 bg-slate-900 border border-slate-800 rounded-md text-slate-200">{c}</div>
        ))}
      </div>
    </section>
  )
}
