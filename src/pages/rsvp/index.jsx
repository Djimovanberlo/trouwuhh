import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'

const Rsvp = () => {
  const { theme } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banner_rsvp.jpg`} />
      <Wrapper>rsvp</Wrapper>
    </>
  )
}

export default Rsvp
