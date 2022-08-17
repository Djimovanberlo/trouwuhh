import { useIsMediumScreen } from '../../lib/utils'
import Toggle from '../../components/toggle'
import NavigationLarge from './nav-large'
import NavigationSmall from './nav-small'

const Navigation = () => {
  const isMediumScreen = useIsMediumScreen()

  return (
    <div className={`nav nav--${isMediumScreen ? 'small' : 'large'}`}>
      {isMediumScreen ? <NavigationSmall /> : <NavigationLarge />}
      <Toggle />
    </div>
  )
}

export default Navigation
