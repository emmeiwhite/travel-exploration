import { navLinks } from '@/constants/constants'
import Link from 'next/link'
import { CgClose } from 'react-icons/cg'

type MobileNavProps = {
  showNav: boolean
  handleCloseNav: () => void
}
export default function MobileNav({ showNav, handleCloseNav }: MobileNavProps) {
  return (
    <div>
      {/* 1. layover */}
      <div className="fixed h-screen w-full transform transition-all duration-500 inset-0 bg-black opacity-70 z-40"></div>

      {/* 2. navlinks */}
      <div className="w-[80%] sm:w-[60%]  bg-rose-900 flex flex-col gap-6 justify-center fixed z-50 h-full text-white transform transition-all duration-500 delay-300">
        {navLinks.map(link => {
          return (
            <Link
              href={link.url}
              key={link.id}>
              <p className="border-white border-b-[1.5px] w-fit ml-12 text-[20px] sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          )
        })}

        {/* close button */}
        <CgClose className="absolute top-[0.7rem] right-[1.4rem] h-6 w-6 sm:h-8 sm:w-8 cursor-pointer" />
      </div>
    </div>
  )
}
