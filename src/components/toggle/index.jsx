import { useThemeContext } from '../../layout/theme'

const Toggle = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <div className='toggle' onClick={toggleTheme}>
      <div className={`toggle__circle toggle__circle--${theme}`} />
    </div>
  )
}

export default Toggle
