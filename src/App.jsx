import './App.css'
import Footer from './routes/Footer.jsx'
import Header from './routes/Header.jsx'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
