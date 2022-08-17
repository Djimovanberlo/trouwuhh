import { useId } from 'react'
import { Link } from 'react-router-dom'

import { NAV_ITEMS } from '../../lib/constants'

const NavigationLarge = () => {
  const id = useId()

  return (
    <div className='nav__wrapper-large'>
      {NAV_ITEMS.map(({ text, href }, index) => (
        <Link key={`${id}--${index}`} to={href}>
          {text}
        </Link>
      ))}
    </div>
  )
}

export default NavigationLarge
