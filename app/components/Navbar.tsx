'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 border-b border-gray-600">
      <div>
        <Link href="/" className="text-2xl font-bold text-[#64ffda]">
          {`{PP}`}
        </Link>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-x-8">
        <li>
          <Link href="/#about" className="hover:text-[#64ffda]">About</Link>
        </li>
        <li>
          <Link href="/#skills" className="hover:text-[#64ffda]">Skills</Link>
        </li>
        <li>
          <Link href="/#projects" className="hover:text-[#64ffda]">Projects</Link>
        </li>
        <li>
          <Link href="/#experience" className="hover:text-[#64ffda]">Experience</Link>
        </li>
        <li>
          <Link href="/#contact" className="hover:text-[#64ffda]">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10 cursor-pointer">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={
        !nav
          ? 'hidden'
          : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
      }>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/#about">About</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/#skills">Skills</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/#projects">Projects</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/#experience">Experience</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar 