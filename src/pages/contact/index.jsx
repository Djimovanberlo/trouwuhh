import { useThemeContext } from '../../layout/theme'
import Banner from '../../layout/banner'
import Wrapper from '../../layout/wrapper'
import FlexSection from '../../components/flex-section'
import { faqBlock, questionsBlock } from '../../data/contact'
import { A, H1, H2 } from '../../components/typography'

const Contact = () => {
  const { theme, language } = useThemeContext()

  return (
    <>
      <Banner src={`/${theme}/banners/contact.jpg`} />
      <Wrapper>
        <FlexSection image={`/${theme}/icons/contact_1.svg`}>
          <H1 className='contact__listTitle'>{questionsBlock[language].text}</H1>
          <A className='contact__listItem' href='mailto:djimovanberlo@gmail.com'>
            <H2>djimovanberlo@gmail.com</H2>
          </A>
          <A className='contact__listItem' href='mailto:jolienschuurmans@gmail.com'>
            <H2>jolienschuurmans@gmail.com</H2>
          </A>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/contact_2.svg`} isReverse belgiumColor='yellow'>
          <H2>{faqBlock[language].questionOne}</H2>
          <H2 className='contact__answer'>{faqBlock[language].answerOne}</H2>
          <H2>{faqBlock[language].questionTwo}</H2>
          <H2 className='contact__answer'>{faqBlock[language].answerTwo}</H2>
          <H2>{faqBlock[language].questionThree}</H2>
          <H2 className='contact__answer'>{faqBlock[language].answerThree}</H2>
          <H2>{faqBlock[language].questionFour}</H2>
          <H2 className='contact__answer'>{faqBlock[language].answerFour}</H2>
          <H2 className='contact__answer'>JPRA Schuurmans<br /> NL66 INGB 0008 7236 91</H2>
        </FlexSection>
      </Wrapper>
    </>
  )
}

export default Contact
