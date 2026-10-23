import React from 'react'
import { Card } from 'flowbite-react'
import foto from '../assets/pic1.jpg'

export default function About() {
  return (
    <section id="about" className="section-shell scroll-mt-24 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Full stack engineer focused on maintainable systems and practical outcomes.
        </p>
      </div>

      <Card className="surface-card overflow-hidden">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <img
            src={foto}
            alt="Kaio Deodato"
            className="h-72 w-full rounded-xl object-cover shadow-md shadow-black/40 md:h-80"
          />
          <div>
            <h3 className="gradient-text mb-4 text-2xl font-bold md:text-3xl">
              Software Developer based in Viseu, Portugal
            </h3>
            <div className="space-y-4 text-slate-300">
              <p>
                I am a Software Developer with over five years of experience in web and full stack
                development, working in international and remote environments across Europe and Africa.
                My work spans <span className="font-semibold text-orange-300">C# and .NET</span>,{' '}
                <span className="font-semibold text-orange-300">Blazor</span>,{' '}
                <span className="font-semibold text-orange-300">TypeScript</span>, and{' '}
                <span className="font-semibold text-orange-300">React</span>.
              </p>
              <p>
                I focus on building and improving production systems: automation platforms, APIs,
                and modern web interfaces. I care about maintainability, reliability, clean code,
                and practical business outcomes.
              </p>
              <p>
                I am currently pursuing a BSc in Computer Engineering at ESTGV – Instituto
                Politécnico de Viseu.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </section>
  )
}
