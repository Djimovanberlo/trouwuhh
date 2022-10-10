import { useThemeContext } from '../../layout/theme'
import Banner from '../../layout/banner'
import Wrapper from '../../layout/wrapper'
import FlexSection from '../../components/flex-section'

const Contact = () => {
  const { theme } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banners/contact.jpg`} />
      <Wrapper>
        <FlexSection image={`/${theme}/icons/contact_1.svg`}></FlexSection>
        <FlexSection image={`/${theme}/icons/contact_2.svg`} isReverse></FlexSection>
      </Wrapper>
    </>
  )
}

export default Contact
