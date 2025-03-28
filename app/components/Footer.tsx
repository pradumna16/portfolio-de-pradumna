'use client'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a192f] text-gray-300 py-8 border-t border-gray-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Pradumna Pokley. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="https://github.com" target="_blank" className="hover:text-[#64ffda]">
              GitHub
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="hover:text-[#64ffda]">
              LinkedIn
            </Link>
            <Link href="mailto:propokley@gmail.com" className="hover:text-[#64ffda]">
              Email
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 