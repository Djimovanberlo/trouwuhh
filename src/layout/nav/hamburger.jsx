import { useThemeContext } from '../theme'

const Hamburger = ({ isNavOpen, toggleNavOpen }) => {
  const { theme } = useThemeContext()

  return (
    <div className={`hamburger hamburger--${theme} ${isNavOpen ? 'hamburger--open' : 'hamburger--closed'}`} onClick={toggleNavOpen}>
      <span />
      <span />
      <span />
    </div>
  )
}

export default Hamburger
