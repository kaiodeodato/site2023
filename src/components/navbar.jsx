import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
]

export default function AppNavbar() {
  return (
    <header id="home" className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/85 backdrop-blur-md">
      <Navbar fluid className="section-shell !bg-transparent px-0 py-3">
        <NavbarBrand href="#home">
          <span className="self-center whitespace-nowrap text-xl font-bold text-slate-50">
            Kaio D.
          </span>
        </NavbarBrand>
        <NavbarToggle className="!border-slate-700 !text-slate-200 hover:!bg-slate-800" />
        <NavbarCollapse className="!bg-slate-950 md:!bg-transparent">
          {links.map((link) => (
            <NavbarLink
              key={link.href}
              href={link.href}
              className="!text-slate-300 hover:!text-orange-300 md:text-sm"
            >
              {link.label}
            </NavbarLink>
          ))}
        </NavbarCollapse>
      </Navbar>
    </header>
  )
}
