import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './layout/nav'
import Container from './layout/container'
import { ThemeProvider } from './layout/theme'
import HomePage from './pages/home'
import Location from './pages/location'
import Contact from './pages/contact'
import Rsvp from './pages/rsvp'
import Curtains from './components/curtains'

import './styles/globals.scss'
import './styles/main.scss'
import { useEffect, useState } from 'react'

const App = () => {
  const [displayCurtains, setDisplayCurtains] = useState(true)

  useEffect(() => {
    const pwResult = JSON.parse(localStorage.getItem('password_correct')) ?? null
    setDisplayCurtains(pwResult ? false : true)
  }, [])

  return (
    <>
      {displayCurtains && <Curtains />}
      <ThemeProvider>
        <BrowserRouter>
          <Container>
            <Navigation />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/location' element={<Location />} />
              <Route path='/rsvp' element={<Rsvp />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
