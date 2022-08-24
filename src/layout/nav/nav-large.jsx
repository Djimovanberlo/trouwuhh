import { useId } from 'react'
import { Link } from 'react-router-dom'
import { P } from '../../components/typography'

import { NAV_ITEMS } from '../../lib/constants'
import { useThemeContext } from '../theme'

const NavigationLarge = () => {
  const id = useId()
  const { theme } = useThemeContext()

  return (
    <div className={`nav__wrapper-large nav__wrapper-large--${theme}`}>
      {NAV_ITEMS.map(({ text, href }, index) => (
        <Link key={`${id}--${index}`} to={href}>
          <P>{text}</P>
        </Link>
      ))}
    </div>
  )
}

export default NavigationLarge
