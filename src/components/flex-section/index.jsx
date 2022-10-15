import { useThemeContext } from '../../layout/theme'
import Image from '../image'

const FlexSection = ({ belgiumColor = 'black', isReverse = false, children = null, image = '' }) => {
  const { theme } = useThemeContext()
  const belgianBlockClassname = theme === 'belgium' ? `flex-section__block--belgium--${belgiumColor}` : ''
  const reverseClassName = isReverse ? 'flex-section--reverse' : ''

  return (
    <div className={`flex-section flex-section--${theme} ${reverseClassName}`}>
      <div className={`flex-section__block flex-section__block--${theme} ${belgianBlockClassname}`}>{children}</div>
      <div className={`flex-section__block flex-section__block--img`}>
        <Image src={image} />
      </div>
    </div>
  )
}

export default FlexSection
