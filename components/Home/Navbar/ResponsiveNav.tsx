'use client'
import { useState } from 'react'
import MobileNav from './MobileNav'
import Nav from './Nav'

export default function ResponsiveNav() {
  const [showNav, setShowNav] = useState(false)

  const handleShowNav = () => setShowNav(true)
  const handleCloseNav = () => setShowNav(false)
  return (
    <div>
      <Nav handleShowNav={handleShowNav} />
      <MobileNav
        showNav={showNav}
        handleCloseNav={handleCloseNav}
      />
    </div>
  )
}
