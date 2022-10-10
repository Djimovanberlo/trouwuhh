import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'
import FlexSection from '../../components/flex-section'
import { H1, H2 } from '../../components/typography'
import { blockOne, blockTwo } from '../../data/home'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { theme, language } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banners/home.jpg`} />
      <Wrapper>
        <FlexSection image={`/${theme}/icons/home_1.svg`}>
          <H1>{blockOne[language].names}</H1>
          <H2>{blockOne[language].text}</H2>
          <H2>{blockOne[language].dateTime}</H2>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/home_2.svg`} isReverse belgiumColor='yellow'>
          <H1>{blockTwo[language].text}</H1>
          <H2>
            <Link to='/rsvp'>{blockTwo[language].linkText}</Link>
          </H2>
        </FlexSection>
      </Wrapper>
    </>
  )
}

export default HomePage
