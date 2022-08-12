import { Link } from 'react-router-dom'

const NavigationLarge = () => {
  return (
    <div className='nav__wrapper-large'>
      <Link className='nav__item' to='/'>
        Home
      </Link>
      <Link to='/location'>Location</Link>
      <Link to='/area'>Area</Link>
      <Link to='/rsvp'>RSVP</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default NavigationLarge
