import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'
import RollDice from './pages/rollDice'
import CoinFlip from './pages/coinFlip'


function App() {
  return (
    <>
      <Router>
        <div className=''>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dice' element={<RollDice />} />
            <Route path='/coin' element={<CoinFlip />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App
