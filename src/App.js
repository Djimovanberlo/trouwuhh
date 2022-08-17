import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './layout/nav'
import Banner from './layout/banner'
import HomePage from './pages/home'
import Location from './pages/location'
import Area from './pages/area'
import Contact from './pages/contact'
import Rsvp from './pages/rsvp'
import { ThemeProvider } from './layout/theme'

import './styles/globals.scss'
import './styles/main.scss'
import Container from './layout/container'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Container>
          <Navigation />
          <Banner />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/location' element={<Location />} />
            <Route path='/area' element={<Area />} />
            <Route path='/rsvp' element={<Rsvp />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
