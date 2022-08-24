import { useIsMediumScreen } from '../../lib/utils'
import Toggle from '../../components/toggle'
import NavigationLarge from './nav-large'
import NavigationSmall from './nav-small'
import { useThemeContext } from '../theme'

const Navigation = () => {
  const isMediumScreen = useIsMediumScreen()
  const { theme } = useThemeContext()

  return (
    <div className={`wrapper nav nav--${isMediumScreen ? 'small' : 'large'} nav--${theme}`}>
      {isMediumScreen ? <NavigationSmall /> : <NavigationLarge />}
      <Toggle />
    </div>
  )
}

export default Navigation
