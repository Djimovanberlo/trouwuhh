import { createContext, useContext, useState } from 'react'

import { LANGUAGES, THEMES } from '../../lib/constants'

const ThemeContext = createContext()

const useThemeContext = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.cheesy)
  const [language, setLanguage] = useState(LANGUAGES.en)

  const toggleTheme = () => setTheme(prevTheme => (prevTheme === THEMES.cheesy ? THEMES.belgium : THEMES.cheesy))

  const toggleLanguage = () => setLanguage(prevLanguage => (prevLanguage === LANGUAGES.en ? LANGUAGES.nl : LANGUAGES.en))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      <div className={`theme theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, useThemeContext }
