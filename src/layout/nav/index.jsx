import Toggle from '../../components/toggle'
import Container from '../container'

const Navigation = () => {
  return (
    <Container className='nav-container'>
      <div className='navigation'>
        <div>Home</div>
        <div>Location & Route</div>
        <div>Accomodaion & Area</div>
        <div>RSVP</div>
        <div>Info & Contact</div>
      </div>
      <Toggle />
    </Container>
  )
}

export default Navigation
