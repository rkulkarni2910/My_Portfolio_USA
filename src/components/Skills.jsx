import React from 'react'

// Skills list — reusable small layout
const skills = [
  'Java, JDBC, Hibernate',
  'Spring Boot, Spring MVC',
  'SQL, Database Design',
  'Machine Learning (Beginner)',
  'Operating Systems',
  'Excel, Power BI, Tableau'
]

export default function Skills(){
  return (
    <section id="skills" className="mt-10 fade-in">
      <h3 className="text-xl font-semibold text-white">Skills</h3>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {skills.map((s)=> (
          <div key={s} className="bg-slate-900 border border-slate-800 p-3 rounded-md text-slate-200 hover:border-accent transition">
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
