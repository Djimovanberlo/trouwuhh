import { useThemeContext } from '../../layout/theme'

export const H1 = ({ className = '', children }) => {
  const { theme } = useThemeContext()
  return <h1 className={`h1 h1--${theme} ${className}`}>{children}</h1>
}

export const H2 = ({ className = '', children }) => {
  const { theme } = useThemeContext()
  return <h2 className={`h2 h2--${theme} ${className}`}>{children}</h2>
}

export const P = ({ className = '', children }) => {
  const { theme } = useThemeContext()
  return <p className={`p p--${theme} ${className}`}>{children}</p>
}

export const PNeutral = ({ children }) => {
  return <p className={`p p--neutral`}>{children}</p>
}

export const Label = ({ className = '', children }) => {
  const { theme } = useThemeContext()
  return <label className={`label label--${theme} ${className}`}>{children}</label>
}
