import FlexSection from '../../components/flex-section'
import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'

const HomePage = () => {
  const { theme } = useThemeContext(0)

  return (
    <>
      <Banner src={`/${theme}/banner_home.jpg`} />
      <Wrapper>
        <FlexSection />
        <FlexSection isReverse belgiumColor='yellow' />
        <FlexSection belgiumColor='red' />
      </Wrapper>
    </>
  )
}

export default HomePage
