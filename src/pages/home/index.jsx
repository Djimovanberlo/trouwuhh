import FlexSection from '../../components/flex-section'
import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'

// Datum + tijd

const HomePage = () => {
  return (
    <>
      <Banner />
      <Wrapper>
        <FlexSection />
        <FlexSection isReverse belgiumColor='yellow' />
        <FlexSection belgiumColor='red' />
      </Wrapper>
    </>
  )
}

export default HomePage
