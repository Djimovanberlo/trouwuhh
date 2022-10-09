import { useThemeContext } from '../../layout/theme'

const FlagUK = () => <img alt='' src='http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg' />

const FlagNL = () => <img alt='' src='http://purecatamphetamine.github.io/country-flag-icons/3x2/NL.svg' />

const Flags = () => {
  const { language, toggleLanguage } = useThemeContext()

  return (
    <div className='flags' onClick={toggleLanguage}>
      {language == 'en' ? <FlagNL /> : <FlagUK />}
    </div>
  )
}

export default Flags
