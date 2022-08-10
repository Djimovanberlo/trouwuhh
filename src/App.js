import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/home'

import './styles/globals.scss'
import './styles/main.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
