import { useIsLage } from '../../lib/utils'
import Toggle from '../../components/toggle'
import NavigationLarge from './nav-large'
import NavigationSmall from './nav-small'

const Navigation = () => {
  const isLarge = useIsLage()

  return (
    <div className={`nav nav--${isLarge ? 'large' : 'small'}`}>
      {isLarge ? <NavigationSmall /> : <NavigationLarge />}
      <Toggle />
    </div>
  )
}

export default Navigation
