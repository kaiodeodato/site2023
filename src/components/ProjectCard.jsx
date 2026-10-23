import React from 'react'
import { Badge, Button, Card } from 'flowbite-react'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'

export default function ProjectCard({ title, content, tech, image, link, git, featured = false }) {
  const techList = tech.split('•').map((item) => item.trim()).filter(Boolean)

  return (
    <Card className="surface-card overflow-hidden">
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="group relative block h-80 overflow-hidden rounded-xl border border-slate-700 shadow-lg shadow-black/40 sm:h-96"
          title={`Open ${title}`}
        >
          <img
            src={image}
            alt={title}
            className="mt-0 w-full transition-all duration-10000 ease-linear group-hover:-mt-code"
          />
        </a>

        <div className="flex h-full flex-col justify-between gap-4">
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <h3 className="gradient-text text-2xl font-bold md:text-3xl">{title}</h3>
              {featured && <Badge color="warning">Featured</Badge>}
            </div>
            <p className="text-slate-300">{content}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {techList.map((item) => (
                <Badge
                  key={item}
                  color="purple"
                  className="!bg-indigo-950 !text-indigo-200 font-normal"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button as="a" href={link} target="_blank" rel="noreferrer" color="warning" size="sm">
              <HiOutlineExternalLink className="mr-2 h-4 w-4" />
              Live demo
            </Button>
            <Button
              as="a"
              href={git}
              target="_blank"
              rel="noreferrer"
              color="light"
              size="sm"
              className="!border-slate-600 !bg-slate-800 !text-slate-100 hover:!bg-slate-700"
            >
              <BsGithub className="mr-2 h-4 w-4" />
              Source
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
