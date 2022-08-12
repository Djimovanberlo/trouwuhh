import { Link } from 'react-router-dom'
import Toggle from '../../components/toggle'

const Navigation = () => {
  return (
    <div className='nav'>
      <div className='nav__wrapper'>
        <Link className='nav__item' to='/'>
          Home
        </Link>
        <Link to='/location'>Location</Link>
        <Link to='/area'>Area</Link>
        <Link to='/rsvp'>RSVP</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <Toggle />
    </div>
  )
}

export default Navigation
