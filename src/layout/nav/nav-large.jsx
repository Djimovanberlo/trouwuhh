import { useId } from 'react'
import { ButtonLink } from '../../components/buttons'
import { P } from '../../components/typography'

import { NAV_ITEMS } from '../../lib/constants'
import { useThemeContext } from '../theme'

const NavigationLarge = () => {
  const id = useId()
  const { theme, language } = useThemeContext()

  return (
    <div className={`nav__wrapper-large nav__wrapper-large--${theme}`}>
      {NAV_ITEMS.map(({ text, href }, index) => (
        <ButtonLink key={`${id}--${index}`} to={href}>
          <P>{text[language]}</P>
        </ButtonLink>
      ))}
    </div>
  )
}

export default NavigationLarge
