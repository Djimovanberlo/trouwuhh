import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'

const Location = () => {
  const { theme } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banner_location.jpg`} />
      <Wrapper>Location</Wrapper>
    </>
  )
}

export default Location
