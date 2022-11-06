import { useThemeContext } from '../../layout/theme'
import { LANGUAGES } from '../../lib/constants'
import { P } from '../typography'

const FlagUK = () => <img alt='' src='http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg' />

const FlagNL = () => <img alt='' src='http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg' />

const Flags = () => {
  const { language, toggleLanguage, theme } = useThemeContext()

  return (
    <div className='flags' onClick={toggleLanguage}>
      {language === LANGUAGES.nl ? <FlagNL /> : <FlagUK />}
      <P className={`flags--${theme}--text`}>{language === LANGUAGES.nl ? 'NL' : 'EN'}</P>
    </div>
  )
}

export default Flags
