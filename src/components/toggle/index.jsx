import { useThemeContext } from '../../layout/theme'
import { LANGUAGES } from '../../lib/constants'
import { P } from '../typography'

const Toggle = () => {
  const { theme, toggleTheme, language } = useThemeContext()

  return (
    <div className='toggle__wrapper'>
      <div className={`toggle toggle--${theme}`} onClick={toggleTheme}>
        <div className={`toggle__circle toggle__circle--${theme}`} />
      </div>
      <P className={`toggle--${theme}--text`}>{language === LANGUAGES.nl ? 'thema' : 'theme'}</P>
    </div>
  )
}

export default Toggle
