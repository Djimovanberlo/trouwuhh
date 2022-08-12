import { createContext, useState } from 'react'

import { THEMES } from '../../lib/constants'

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.cheesy)

  const toggleTheme = () => {
    setTheme(prevTheme => {
      return prevTheme === THEMES.cheesy ? THEMES.belgium : THEMES.cheesy
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }
