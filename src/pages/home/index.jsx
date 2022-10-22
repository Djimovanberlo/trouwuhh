import Banner from '../../layout/banner'
import { useThemeContext } from '../../layout/theme'
import Wrapper from '../../layout/wrapper'
import FlexSection from '../../components/flex-section'
import { H1, H2 } from '../../components/typography'
import { blockGeneral, blockRSVP } from '../../data/home'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { theme, language } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banners/home.jpg`} />
      <Wrapper>
        <FlexSection image={`/${theme}/icons/home_1.svg`}>
          <H1>{blockGeneral[language].names}</H1>
          <H2>{blockGeneral[language].text}</H2>
          <H2>{blockGeneral[language].dateTime}</H2>
          <H2>{blockGeneral[language].location}</H2>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/home_2.svg`} isReverse belgiumColor='yellow'>
          <H1 className='home__mb'>{blockRSVP[language].text}</H1>
          <H2>
            <Link className='home__link' to='/rsvp'>
              {blockRSVP[language].linkText}
            </Link>
          </H2>
        </FlexSection>
      </Wrapper>
    </>
  )
}

export default HomePage
