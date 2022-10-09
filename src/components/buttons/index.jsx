import { Link } from 'react-router-dom'
import { useThemeContext } from '../../layout/theme'

export const Button = props => {
  const { theme } = useThemeContext()
  return theme === 'belgium' ? <ButtonBelgium {...props} /> : <ButtonCheesy {...props} />
}

export const ButtonLink = props => {
  const { theme } = useThemeContext()
  return theme === 'belgium' ? <ButtonLinkBelgium {...props} /> : <ButtonLinkCheesy {...props} />
}

export const ButtonCheesy = ({ type = null, className = '', onClick = null, children }) => (
  <button type={type} className={`button button--cheesy ${className}`} onClick={onClick}>
    {children}
  </button>
)

export const ButtonBelgium = ({ type = null, className = '', onClick = null, children }) => (
  <button type={type} className={`button button--belgium ${className}`} onClick={onClick}>
    {children}
  </button>
)

export const ButtonLinkCheesy = ({ className = '', to = null, children }) => (
  <Link className={`button button--cheesy ${className}`} to={to}>
    {children}
  </Link>
)

export const ButtonLinkBelgium = ({ className = '', to = null, children }) => (
  <Link className={`button button--belgium ${className}`} to={to}>
    {children}
  </Link>
)
