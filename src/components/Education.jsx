import React from 'react'
import {
  Badge,
  Card,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from 'flowbite-react'
import { HiAcademicCap, HiBookOpen, HiOutlineExternalLink } from 'react-icons/hi'

const courses = [
  {
    title: 'Computer Science – CS50',
    content: 'Foundations of computer science and programming with C, Python, SQL, and JavaScript.',
    institution: 'Harvard University',
    time: 'Jan 2023 – May 2023',
  },
  {
    title: 'Data Analysis – Big Data',
    content: 'Programming for data architecture and big data problems using Python.',
    institution: 'Tokio School – Lisbon',
    time: 'Aug 2023 – Nov 2023',
  },
  {
    title: 'MERN Stack',
    content: 'MongoDB, Express, React, and Node for full-stack web applications.',
    institution: 'Danki Code',
  },
  {
    title: 'React Full Course',
    content: 'Core React concepts and practical skills for modern web interfaces.',
    institution: 'FreeCodeCamp',
  },
  {
    title: 'Full Next.js',
    content: 'Server-side rendering and static sites with React and Next.js.',
    institution: 'Danki Code',
  },
  {
    title: 'Node.js Course',
    content: 'JavaScript runtime fundamentals for backend and tooling work.',
    institution: 'Danki Code',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-24 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="section-title">Education &amp; Courses</h2>
        <p className="section-subtitle">
          Formal studies and selected courses. Professional case studies and projects remain the
          primary focus of this portfolio.
        </p>
      </div>

      <Card className="surface-card mb-8">
        <div className="flex items-start gap-3">
          <HiAcademicCap className="mt-1 h-6 w-6 shrink-0 text-orange-300" />
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-semibold text-slate-50">BSc in Computer Engineering</h3>
              <Badge color="success">In progress</Badge>
            </div>
            <p className="text-slate-300">ESTGV – Instituto Politécnico de Viseu</p>
            <p className="mt-1 text-sm text-slate-400">Sep 2025 – Present</p>
          </div>
        </div>
      </Card>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="surface-card">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-50">
            <HiBookOpen className="h-5 w-5 text-orange-300" />
            Courses &amp; certifications
          </h3>
          <Timeline>
            {courses.map((course) => (
              <TimelineItem key={course.title}>
                <TimelinePoint />
                <TimelineContent>
                  {course.time && (
                    <TimelineTime className="!text-slate-400">{course.time}</TimelineTime>
                  )}
                  <TimelineTitle className="!text-slate-100 text-base">{course.title}</TimelineTitle>
                  <TimelineBody className="!text-slate-300 text-sm">
                    {course.content}
                    <span className="mt-1 block font-medium text-slate-100">{course.institution}</span>
                  </TimelineBody>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Card>

        <Card className="h-fit !border-orange-800/60 !bg-orange-950/40 shadow-lg shadow-black/30">
          <Badge color="warning" className="mb-3 w-fit">
            Teaching
          </Badge>
          <h3 className="text-xl font-semibold text-slate-50">MongoDB Complete</h3>
          <p className="mt-2 text-slate-300">
            Complete MongoDB course delivered for a large Brazilian online learning platform
            (Danki Code).
          </p>
          <a
            href="https://cursos.dankicode.com/curso-mongodb"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-200 hover:underline"
          >
            Course link
            <HiOutlineExternalLink className="h-4 w-4" />
          </a>
        </Card>
      </div>
    </section>
  )
}
