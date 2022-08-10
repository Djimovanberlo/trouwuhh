import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navigation from './layout/nav'
import HomePage from './pages/home'
import { ThemeProvider } from './lib/theme-context'

import './styles/globals.scss'
import './styles/main.scss'

const App = () => {
  return (
    <ThemeProvider>
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
