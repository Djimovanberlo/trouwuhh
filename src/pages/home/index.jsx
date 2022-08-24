import FlexSection from '../../components/flex-section'
import Banner from '../../layout/banner'

// Datum + tijd

const HomePage = () => {
  return (
    <>
      <Banner />
      <div className='wrapper'>
        <FlexSection />
        <FlexSection isReverse belgiumColor='yellow' />
        <FlexSection belgiumColor='red' />
      </div>
    </>
  )
}

export default HomePage
