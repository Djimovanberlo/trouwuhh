import { A, H1, H2 } from '../../components/typography'
import FlexSection from '../../components/flex-section'
import { useThemeContext } from '../../layout/theme'
import Banner from '../../layout/banner'
import Wrapper from '../../layout/wrapper'
import { blockAccommodation, blockArea, blockTransport } from '../../data/location'

const Location = () => {
  const { theme, language } = useThemeContext()

  const domTorenText = language === 'nl' ? 'De domtoren van Utrecht is slechts 200km ten noorden van de locatie!' : "Utrecht's Dom Tower is only just 200km to the north!"

  return (
    <>
      <Banner src={`/${theme}/banners/location.jpg`} />
      <Wrapper>
        <FlexSection>
          <H1>Le Rideau Rouge</H1>
          <A href='https://goo.gl/maps/bgfUDzJJTDaNyDn47'>
            <H2>
              Rte de Renipont 70 <br />
              1380 Lasne
              <br />
              Belgique
            </H2>
          </A>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/location_1.svg`} belgiumColor='yellow' isReverse>
          <H2 className='location__mb'>{blockTransport[language].parking}</H2>
          <A href='https://www.lerideaurouge.be/parking'>
            <H2 className='location__mb'>{blockTransport[language].clickInfo}</H2>
          </A>
          <H2>{blockTransport[language].transport}</H2>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/location_2.svg`} belgiumColor='red'>
          <H2 className='location__mb'>{blockAccommodation[language].text}</H2>
          <A className='location__listItem' href='https://www.martinshotels.com/en/page/martins-louvain-la-neuve/martins-louvain-la-neuve-innovation-lifestyle-hotel.11057.html'>
            <H2>Martin's Louvain-La-Neuve</H2>
          </A>
          <br />
          <A
            className='location__listItem'
            href='https://www.booking.com/hotel/be/mercurelouvainlaneuve.en-gb.html?label=gen173nr-1DCAsoFUIVbWVyY3VyZWxvdXZhaW5sYW5ldXZlSAlYBGgViAEBmAEJuAEHyAEM2AED6AEBiAIBqAIDuAKspKqaBsACAdICJGM4ZTEyYjhmLTM3ODItNDFhZi04ZGVlLTc4MWM2ZjYwMzRmMdgCBOACAQ&sid=548996301c4fbc9c97fa9ab0a6a0c8c8&dist=0&keep_landing=1&sb_price_type=total&type=total&'>
            <H2>Ibis Louvain-La-Neuve</H2>
          </A>
          <br />
          <A className='location__listItem' href='https://www.dolcelahulpe.com/'>
            <H2>Dolce La Hulpe</H2>
          </A>
        </FlexSection>
        <FlexSection image={`/${theme}/icons/location_3.svg`} isReverse>
          <H2 className='location__mb'>{blockArea[language].text}</H2>
          <A className='location__listItem' href='https://www.museeherge.com/en' target='_blank' rel='noreferrer'>
            <H2 className='location__mb'>Muséé Hergé</H2>
          </A>
          <A className='location__listItem' href='https://villers.be/en'>
            <H2 className='location__mb'>Abbaye de Villers-La-Ville</H2>
          </A>
          <A className='location__listItem' href='https://www.waterloo1815.be/en/'>
            <H2 className='location__mb'>Waterloo 1815 Memorial</H2>
          </A>
          <A className='location__listItem' href='https://www.walibi.be/en'>
            <H2 className='location__mb'>Walibi & Aqualibi Belgium</H2>
          </A>
          <A className='location__listItem' href='https://www.domtoren.nl/'>
            <H2>{domTorenText}</H2>
          </A>
        </FlexSection>
      </Wrapper>
    </>
  )
}

export default Location
