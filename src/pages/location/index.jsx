import FlexSection from '../../components/flex-section'
import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'

const Location = () => {
  const { theme } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banners/location.jpg`} />
      <Wrapper>
        <FlexSection></FlexSection>
        <FlexSection image={`/${theme}/icons/location_1.svg`} belgiumColor='yellow' isReverse></FlexSection>
        <FlexSection image={`/${theme}/icons/location_2.svg`} belgiumColor='red'></FlexSection>
        <FlexSection image={`/${theme}/icons/location_3.svg`} isReverse></FlexSection>
      </Wrapper>
    </>
  )
}

export default Location
