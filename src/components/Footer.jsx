import React from 'react'
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
} from 'flowbite-react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

export default function AppFooter() {
  return (
    <Footer container className="mt-8 rounded-none border-t border-slate-800 !bg-slate-950 text-slate-200">
      <div className="section-shell w-full">
        <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
          <FooterLinkGroup className="flex-wrap justify-center gap-4">
            <FooterLink href="#about" className="!text-slate-300 hover:!text-orange-300">About</FooterLink>
            <FooterLink href="#experience" className="!text-slate-300 hover:!text-orange-300">Experience</FooterLink>
            <FooterLink href="#projects" className="!text-slate-300 hover:!text-orange-300">Projects</FooterLink>
            <FooterLink href="#contact" className="!text-slate-300 hover:!text-orange-300">Contact</FooterLink>
          </FooterLinkGroup>
          <div className="flex gap-4">
            <FooterIcon
              href="https://github.com/kaiodeodato?tab=repositories"
              target="_blank"
              rel="noreferrer"
              icon={BsGithub}
              className="!text-slate-300 hover:!text-orange-300"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/kaio-viana-6ab42016b/"
              target="_blank"
              rel="noreferrer"
              icon={BsLinkedin}
              className="!text-slate-300 hover:!text-orange-300"
            />
          </div>
        </div>
        <FooterDivider className="!border-slate-800" />
        <FooterCopyright
          href="#home"
          by="Kaio Deodato"
          year={2026}
          className="!text-slate-400"
        />
      </div>
    </Footer>
  )
}
