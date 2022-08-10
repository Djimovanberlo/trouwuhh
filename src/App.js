import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './layout/nav'

import HomePage from './pages/home'

import './styles/globals.scss'
import './styles/main.scss'

const App = () => {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
