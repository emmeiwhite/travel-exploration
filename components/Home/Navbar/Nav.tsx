import { navLinks } from '@/constants/constants'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type NavProps = {
  handleShowNav: () => void
}

/** --- throttled --- */
function throttle(fn: (...args: any[]) => void, delay: number) {
  let lastCall = 0
  return function (...args: any[]) {
    const now = new Date().getTime()
    if (now - lastCall >= delay) {
      lastCall = now
      fn(...args)
    }
  }
}

export default function Nav({ handleShowNav }: NavProps) {
  const [hasScrollBg, setHasScrollBg] = useState(false)

  // 1. Rule of law in React --- Perform side-effect in useEffect()
  useEffect(() => {
    const handleScroll = () => {
      console.count('Scroll event fired')
      setHasScrollBg(prev => {
        if (window.scrollY > 100 && !prev) return true
        if (window.scrollY <= 100 && prev) return false

        return prev
      })
    }

    const throttledScroll = throttle(handleScroll, 300) // // runs max once every 300ms

    //   Setting the scroll handler --- which is a high frequency event
    window.addEventListener('scroll', throttledScroll)

    /**
     * ✅ Problem 1 fixed: React now reacts to accurate scroll state
     * ✅ Problem 2 solved: handleScroll fires max 3 times per second (300ms delay)
     */

    return () => {
      window.removeEventListener('scroll', throttledScroll)
    }
  }, [])

  return (
    <div
      className={`${
        hasScrollBg ? 'bg-blue-950 shadow-md' : ''
      } transition-all duration-200 h-[12vh] z-30 fixed w-full`}>
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

        {/* 3. Buttons */}

        <div className="flex items-center gap-4">
          <button className="px-6 py-1.5 sm:px-8 sm:py-2 md:px-12 md:py-2.5 text-black text-base bg-white rounded-lg transition-all duration-200 hover:bg-gray-200 cursor-pointer">
            Book Now
          </button>

          <HiBars3BottomRight
            className="lg:hidden h-8 w-8 text-white cursor-pointer"
            onClick={handleShowNav}
          />
        </div>
      </div>
    </div>
  )
}
