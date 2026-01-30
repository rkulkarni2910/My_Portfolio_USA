import React, { useState, useEffect } from 'react'

// Hero section with CTA buttons
function HeroImage(){
  const [imgError, setImgError] = useState(false)
  const sizeClass = "w-28 h-28 md:w-40 md:h-40"

  // try to load the image on mount (cache-bust to make sure replacement is picked up)
  useEffect(()=>{
    let canceled = false
    const tester = new Image()
    tester.onload = ()=>{ if(!canceled) setImgError(false) }
    tester.onerror = ()=>{ if(!canceled) setImgError(true) }
    // append timestamp to avoid cached failed response during dev
    tester.src = '/profile.jpg?t=' + Date.now()
    return ()=>{ canceled = true }
  },[])

  return (
    <>
      {!imgError ? (
        <img
          src="/profile.jpg"
          alt="Rohan Kulkarni"
          onError={() => setImgError(true)}
          className={`${sizeClass} rounded-full object-cover object-center border-2 border-accent/20 shadow-lg`}
          loading="lazy"
        />
      ) : (
        <div className={`${sizeClass} rounded-full bg-gradient-to-br from-slate-800 to-slate-700 flex items-center justify-center border-2 border-accent/20`}>
          <span className="text-white font-semibold text-xl">RK</span>
        </div>
      )}
    </>
  )
}

export default function Hero(){
  return (
    <section id="hero" className="py-12 fade-in">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center gap-6">
        {/* image with robust fallback when image fails to load */}
        <HeroImage />

          <div>
            <p className="text-slate-400 uppercase tracking-widest text-sm">Hello — I'm</p>
            <h1 className="text-3xl md:text-4xl font-extrabold mt-1 text-white">Rohan Kulkarni</h1>
            <p className="mt-1 text-accent font-medium">Java Developer | SQL Developer | Data Analyst</p>
            <p className="mt-3 text-slate-300 max-w-xl">Master’s CS student passionate about building scalable software and data-driven solutions</p>

            <div className="mt-4 flex flex-col sm:flex-row gap-3 items-center justify-start">
              <a href="/resume.pdf" download className="inline-flex items-center gap-2 bg-accent text-black px-4 py-2 rounded-md font-medium hover:brightness-95 transition">Download Resume</a>
              <a href="#contact" className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 rounded-md text-slate-200 hover:border-accent hover:text-accent transition">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
