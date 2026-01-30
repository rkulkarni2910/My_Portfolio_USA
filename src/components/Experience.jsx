import React from 'react'

const experiences = [
  {
    company: 'Genpact',
    title: 'Data Analyst',
    period: 'Oct 2023 – Jul 2024',
    bullets: ['Data analysis, dashboards, SQL, automation']
  },
  {
    company: 'DXC Technology',
    title: 'SQL Developer',
    period: 'Apr 2023 – Sep 2023',
    bullets: ['Database design, query optimization, stored procedures']
  },
  {
    company: 'People Tech Group',
    title: 'Jr. Java Developer',
    period: 'Sep 2022 – Mar 2023',
    bullets: ['Java, Spring Boot, Hibernate, REST APIs']
  }
]

export default function Experience(){
  return (
    <section id="experience" className="mt-10 fade-in">
      <h3 className="text-xl font-semibold text-white">Experience</h3>
      <div className="mt-4 space-y-4">
        {experiences.map((e)=> (
          <div key={e.company} className="p-4 bg-slate-900 border border-slate-800 rounded-md">
            <div className="flex items-baseline justify-between">
              <div>
                <div className="font-semibold text-slate-100">{e.title}</div>
                <div className="text-slate-400 text-sm">{e.company}</div>
              </div>
              <div className="text-sm text-slate-500">{e.period}</div>
            </div>
            <ul className="mt-2 text-slate-300 list-disc list-inside">
              {e.bullets.map((b,i)=> <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
