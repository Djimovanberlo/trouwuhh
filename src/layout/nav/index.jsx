import { useIsMediumScreen } from '../../lib/utils'
import Toggle from '../../components/toggle'
import NavigationLarge from './nav-large'
import NavigationSmall from './nav-small'
import { useThemeContext } from '../theme'
import Flags from '../../components/flags'

const Navigation = () => {
  const isMediumScreen = useIsMediumScreen()
  const { theme } = useThemeContext()

  return (
    <div className={`nav nav--${isMediumScreen ? 'small' : 'large'} nav--${theme}`}>
      {isMediumScreen ? <NavigationSmall /> : <NavigationLarge />}
      <div className='nav__themeToggles'>
        <Flags />
        <Toggle />
      </div>
    </div>
  )
}

export default Navigation
