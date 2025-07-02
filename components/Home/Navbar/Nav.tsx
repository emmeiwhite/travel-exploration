import { navLinks } from '@/constants/constants'
import Link from 'next/link'
import { TbAirBalloon } from 'react-icons/tb'

export default function Nav() {
  return (
    <div className="bg-blue-950 transition-all duration-200 h-[12vh] z-[1000] ">
      {/* Layout Container */}

      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-full">
        {/* 1. LOGO */}
        <div className="flex items-center gap-2">
          {/* Icon */}
          <div className="h-10 w-10 bg-rose-500 rounded-full  flex items-center justify-center">
            <TbAirBalloon className="h-6 w-6 text-white" />
          </div>
          {/* Icon Text */}
          <p className="text-xl md:text-2xl text-white font-bold">Tripi</p>
        </div>

        {/* 2. NavLinks */}
        <nav className="hidden lg:flex items-center gap-5 ">
          {navLinks.map(link => {
            return (
              <Link
                href={link.url}
                key={link.id}>
                <p className="text-white relative text-base font-medium w-fit block  after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition duration-300 after:origin-right">
                  {link.label}
                </p>
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
