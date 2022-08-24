import { useThemeContext } from '../../layout/theme'
import { H1, H2, P } from '../typography'

const FlexSection = ({ belgiumColor = 'black', isReverse = false }) => {
  const { theme } = useThemeContext()
  const belgianBlockClassname = theme === 'belgium' ? `flex-section__block--belgium--${belgiumColor}` : ''
  const reverseClassName = isReverse ? 'flex-section--reverse' : ''

  return (
    <div className={`flex-section flex-section--${theme} ${reverseClassName}`}>
      <div className={`flex-section__block flex-section__block--${theme} ${belgianBlockClassname}`}>
        <H1>Header 1</H1>
        <H2>Header 2</H2>
        <P>Paragraph</P>
      </div>
      <div className={`flex-section__block flex-section__block`}></div>
    </div>
  )
}

export default FlexSection
