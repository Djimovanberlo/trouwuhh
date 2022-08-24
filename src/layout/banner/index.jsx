import { useThemeContext } from '../theme'

const Banner = () => {
  const { theme } = useThemeContext()

  return <div className={`banner banner--${theme}`}></div>
}

export default Banner
