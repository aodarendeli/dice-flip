import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'
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
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App
