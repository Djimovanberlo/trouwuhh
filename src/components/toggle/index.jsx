import { useContext } from 'react'
import { ThemeContext } from '../../lib/theme-context'

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className='toggle' onClick={toggleTheme}>
      <div className={`toggle__circle toggle__circle--${theme}`} />
    </div>
  )
}

export default Toggle
