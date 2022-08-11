import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
// import Login from './pages/Login'
// import Register from './pages/Register'
import Card from './pages/Card'
import Tables from './components/Tables'

import './App.css'
import Sponsor from './components/Sponsor'
import Footer from './components/Footer'
import SpecialCard from './components/SpecialCard'
import RollDice from './pages/rollDice'

function App() {
  return (
    <>
      <Router>
        <div className=''>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dice' element={<RollDice />} />
            {/* <Route path='/coinflip' element={<Register />} /> */}
          </Routes>
          {/* <Card />
        <Tables />
        <SpecialCard />
        <Sponsor />
        <Footer /> */}
        </div>
      </Router>
    </>
  )
}

export default App
