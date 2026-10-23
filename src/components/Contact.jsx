import React from 'react'
import { Button, Card } from 'flowbite-react'
import { HiMail } from 'react-icons/hi'

const mailto =
  'mailto:kaiod.oficial@gmail.com?subject=' +
  encodeURIComponent('Hello Kaio!') +
  '&body=' +
  encodeURIComponent('My name is ..., I was looking at your portfolio and ...')

export default function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 py-16 md:py-20">
      <div className="mb-10 text-center">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Open to conversations about engineering roles, collaborations, and interesting problems.
        </p>
      </div>

      <Card className="surface-card mx-auto max-w-3xl">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h3 className="text-xl font-semibold text-slate-50">
              Let&apos;s talk about your project
            </h3>
            <p className="mt-2 text-slate-300">kaiod.oficial@gmail.com</p>
          </div>
          <Button as="a" href={mailto} color="warning" size="lg">
            <HiMail className="mr-2 h-5 w-5" />
            Send email
          </Button>
        </div>
      </Card>
    </section>
  )
}
