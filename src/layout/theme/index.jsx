import { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

import { LANGUAGES, THEMES } from '../../lib/constants'
import bangs from '../../bangs.mp3'

const ThemeContext = createContext()

const useThemeContext = () => useContext(ThemeContext)

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.cheesy)
  const [language, setLanguage] = useState(LANGUAGES.en)
  const [bangs8] = useState(new Audio(bangs))
  const [songIsActive, setSongIsActive] = useState(false)

  const toggleTheme = () => setTheme(prevTheme => (prevTheme === THEMES.cheesy ? THEMES.belgium : THEMES.cheesy))

  const toggleLanguage = () => setLanguage(prevLanguage => (prevLanguage === LANGUAGES.en ? LANGUAGES.nl : LANGUAGES.en))

  const playMusic = () => {
    if (songIsActive) return
    bangs8.play()
    setSongIsActive(true)
  }

  useEffect(() => {
    bangs8.addEventListener('ended', () => setSongIsActive(false))
    return () => {
      bangs8.removeEventListener('ended', () => setSongIsActive(false))
    }
  }, [bangs8])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage, playMusic }}>
      <div className={`theme theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, useThemeContext }
