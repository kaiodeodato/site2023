import React, { useEffect, useState } from 'react'
import { Button } from 'flowbite-react'
import { HiArrowUp } from 'react-icons/hi'
import './App.css'
import Navbar from './components/navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/about'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Education from './components/Education'
import CaseStudies from './components/CaseStudies'

function App() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.pageYOffset)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-slate-950 text-slate-200">
      <Navbar />
      <main className="flex-1">
        {scrollPosition > 300 && (
          <Button
            as="a"
            href="#home"
            color="warning"
            pill
            className="fixed bottom-8 right-6 z-40 shadow-lg shadow-black/50"
            aria-label="Back to top"
          >
            <HiArrowUp className="h-5 w-5" />
          </Button>
        )}
        <Hero />
        <About />
        <CaseStudies />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}

export default App
