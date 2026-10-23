import React, { useEffect } from 'react'
import foto from '../assets/sitecoin.jpg'
import foto2 from '../assets/sitevans2.jpg'
import foto3 from '../assets/sitemovies.jpg'
import foto4 from '../assets/sitecarstar.jpg'
import foto5 from '../assets/opencode.png'
import foto6 from '../assets/siteeagle.png'
import foto7 from '../assets/clubs.png'
import ProjectCard from './ProjectCard'

const projects = [
  {
    link: 'https://kaiodeodato.github.io/coinworld/',
    image: foto,
    title: 'Coin World',
    content:
      'A cryptocurrency explorer that pulls live market data from external APIs so users can search and review coin information in real time. The main technical focus is reliable REST integration and presenting dynamic data clearly in a React TypeScript UI.',
    tech: 'TypeScript • React • Tailwind • React Router • REST API',
    git: 'https://github.com/kaiodeodato/coinworld',
  },
  {
    link: 'https://clubs-network.vercel.app/',
    image: foto7,
    title: 'Social Media Platform',
    content:
      'A social network for short posts with likes, follows, and comments. Built as a full-stack app with persistent data in MongoDB. For security and maintenance, the database is reset daily at 10:00 GMT through a Node.js job triggered by GitHub Actions.',
    tech: 'Next.js • Node.js • MongoDB • Tailwind • JavaScript • GitHub Actions',
    git: 'https://github.com/kaiodeodato/clubsNetwork',
    featured: true,
  },
  {
    link: 'https://vansshopclone.web.app/',
    image: foto2,
    title: 'Vans Store Clone',
    content:
      'A multi-page e-commerce interface inspired by the Vans store experience. Focused on reusable UI components, client-side navigation, and a shopping-oriented layout built with React and styled components.',
    tech: 'React • JavaScript • Bootstrap • Styled Components • REST API',
    git: 'https://github.com/kaiodeodato/vansshopclone',
  },
  {
    link: 'https://kaiodeodato.github.io/carstar',
    image: foto4,
    title: 'Car Star',
    content:
      'A portfolio site for a car rental concept, designed to present vehicles and a smooth browsing experience. Built with React and Tailwind, with client-side routing and structured content for a service-oriented UI.',
    tech: 'React • JavaScript • Tailwind • React Router',
    git: 'https://github.com/kaiodeodato/carstar',
  },
  {
    link: 'https://teste-8e6a1.web.app/',
    image: foto3,
    title: 'Movie List',
    content:
      'An entertainment catalog for browsing movies and series, including releases, synopses, trailers, and cast information. Integrates with a large external dataset (over 135,000 titles) and supports search and navigation across a substantial catalog.',
    tech: 'React • JavaScript • Styled Components • Bootstrap • React Router • REST API • Firebase',
    git: 'https://github.com/kaiodeodato/MoviesList',
  },
]

export default function Projects() {
  useEffect(() => {
    ;[foto, foto2, foto3, foto4, foto5, foto6, foto7].forEach((src) => {
      const img = new Image()
      img.src = src
    })
  }, [])

  return (
    <section id="projects" className="py-16 section-shell scroll-mt-24 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Personal projects that demonstrate API integration, application structure, UI
          implementation, and operational maintenance. Distinct from the professional case studies
          above.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}
