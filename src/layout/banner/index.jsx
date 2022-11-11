import Image from '../../components/image'
import { useThemeContext } from '../theme'

const Banner = ({ src }) => {
  const { theme } = useThemeContext()
  return <Image className={`banner banner--${theme}`} alt='' src={src} />
}

export default Banner
