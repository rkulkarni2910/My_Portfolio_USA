import React from 'react'

export default function Education(){
  return (
    <section id="education" className="mt-10 fade-in">
      <h3 className="text-xl font-semibold text-white">Education</h3>
      <div className="mt-4 grid gap-3">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-md">
          <div className="font-semibold">Master’s in Computer Science</div>
          <div className="text-slate-400 text-sm">Governors State University</div>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-md">
          <div className="font-semibold">Bachelor’s in Electronics & Communication Engineering</div>
          <div className="text-slate-400 text-sm">Siddhartha Institute of Technology & Science</div>
        </div>
      </div>
    </section>
  )
}
