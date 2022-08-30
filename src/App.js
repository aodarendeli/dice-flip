import React, {useState, useEffect} from 'react'
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import './App.css'
import RollDice from './pages/rollDice'
import CoinFlip from './pages/coinFlip'
import {useSelector} from 'react-redux'
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const themeVal = useSelector((selector) => selector?.themeReducer?.value)
  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [localStorage.getItem('theme')])
  useEffect(() => {
    console.log('temamız', themeVal)
  }, [themeVal])

  console.log(localStorage.getItem('theme'))
  return (
    <>
      <Router>
        <div className={theme}>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/games/dice' element={<RollDice />} />
            <Route path='/games/coin' element={<CoinFlip />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}
export default App
