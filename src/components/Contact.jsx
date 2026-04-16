import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mt-10 fade-in">
      <h3 className="text-xl font-semibold text-white">Contact</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-md">
          <div className="text-slate-300">Email</div>
          <div className="font-medium text-slate-100">rohankulkarni29@outlook.com</div>

          <div className="mt-3 text-slate-300">Phone</div>
          <div className="font-medium text-slate-100">312 783 8212</div>

          <div className="mt-3 flex gap-4">
            <a className="text-accent hover:underline" href="https://www.linkedin.com/in/rohan-kulkarni2910" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-accent hover:underline" href="https://github.com/rkulkarni2910" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <form className="p-4 bg-slate-900 border border-slate-800 rounded-md" onSubmit={(e)=>e.preventDefault()}>
          <label className="block text-slate-400 text-sm">Name</label>
          <input className="mt-1 w-full bg-transparent border border-slate-800 rounded-md px-3 py-2 text-slate-200 focus:ring-1 focus:ring-accent" />

          <label className="block text-slate-400 text-sm mt-3">Email</label>
          <input className="mt-1 w-full bg-transparent border border-slate-800 rounded-md px-3 py-2 text-slate-200" />

          <label className="block text-slate-400 text-sm mt-3">Message</label>
          <textarea className="mt-1 w-full bg-transparent border border-slate-800 rounded-md px-3 py-2 text-slate-200" rows="4" />

          <button className="mt-4 inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-md">Send (UI only)</button>
        </form>
      </div>
    </section>
  )
}
