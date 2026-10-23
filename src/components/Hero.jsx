import React from 'react'
import { Button, Card } from 'flowbite-react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineDocumentDownload } from 'react-icons/hi'
import foto from '../assets/foto.jpeg'
import resume from '../assets/RESUME.pdf'

const skillGroups = [
  { label: 'Backend', items: 'C# · .NET · Node.js · GraphQL · APIs' },
  { label: 'Frontend', items: 'TypeScript · JavaScript · React · Next.js · Blazor · Tailwind CSS' },
  { label: 'Databases', items: 'MongoDB · PostgreSQL · MySQL' },
  { label: 'Messaging', items: 'RabbitMQ · Dapr' },
  { label: 'Cloud & DevOps', items: 'Azure · Git · GitHub Actions' },
]

export default function Hero() {
  return (
    <section className="pt-10 pb-6 section-shell md:pt-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="flex justify-center">
          <img
            className="object-cover border-move h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96"
            src={foto}
            alt="Kaio Deodato"
          />
        </div>

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold leading-tight gradient-text md:text-6xl">
            Software Developer
          </h1>
          <p className="max-w-xl mt-4 text-base text-slate-300 md:text-lg">
            Hi, I&apos;m Kaio Deodato. Full stack developer based in Viseu, Portugal,
            with 5+ years of experience in international remote roles.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 md:justify-start">
            <Button
              as="a"
              href="https://github.com/kaiodeodato?tab=repositories"
              target="_blank"
              rel="noreferrer"
              color="light"
              className="!border-slate-600 !bg-slate-800 !text-slate-100 hover:!bg-slate-700"
            >
              <BsGithub className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button
              as="a"
              href="https://www.linkedin.com/in/kaio-viana-6ab42016b/"
              target="_blank"
              rel="noreferrer"
              color="blue"
            >
              <BsLinkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              as="a"
              href={resume}
              download="Kaio-Deodato-Software-Developer-CV"
              color="warning"
            >
              <HiOutlineDocumentDownload className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="mb-6 text-center">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Stack organized by domain, based on technologies used in production and personal work.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <Card key={group.label} className="surface-card">
              <h3 className="text-sm font-semibold tracking-wide text-orange-300 uppercase">
                {group.label}
              </h3>
              <p className="text-sm text-slate-300">{group.items}</p>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-xs text-center text-slate-400">
          Also: HTML5, CSS3, MudBlazor, Apollo GraphQL, Strawberry Shake
        </p>
      </div>
    </section>
  )
}
