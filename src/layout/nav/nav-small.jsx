import { useRef } from 'react'
import { useEffect, useId, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { P } from '../../components/typography'

import { NAV_ITEMS } from '../../lib/constants'
import { useThemeContext } from '../theme'
import Hamburger from './hamburger'

const NavList = ({ isNavOpen, toggleNavOpen }) => {
  const id = useId()
  const navigate = useNavigate()
  const { theme, language } = useThemeContext()

  const handleClick = href => evt => {
    evt.preventDefault()
    navigate(href)
    toggleNavOpen()
  }

  return (
    <div className={`nav-list nav-list--${theme} ${isNavOpen ? 'nav-list--open' : 'nav-list--closed'}`}>
      {NAV_ITEMS.map(({ text, href }, index) => (
        <div key={`${id}--${index}`} onClick={handleClick(href)}>
          <P>{text[language]}</P>
        </div>
      ))}
    </div>
  )
}

const NavigationSmall = () => {
  const ref = useRef(null)
  const [isNavOpen, setNavIsOpen] = useState(false)
  const toggleNavOpen = () => setNavIsOpen(!isNavOpen)

  const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    }, [ref, handler])
  }

  useOnClickOutside(ref, () => setNavIsOpen(false))

  return (
    <>
      <div ref={ref} className='nav--small__wrapper'>
        <Hamburger isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />
      </div>
      <NavList isNavOpen={isNavOpen} toggleNavOpen={toggleNavOpen} />
    </>
  )
}

export default NavigationSmall