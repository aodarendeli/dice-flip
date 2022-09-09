import React from 'react'
import Card from '../../pages/Card'
import Tables from '../../components/Tables'
import Sponsor from '../../components/Sponsor'
import Footer from '../../components/Footer'
import SpecialCard from '../../components/SpecialCard'
import Marque from '../../components/marque'
import {useSelector} from 'react-redux'
import {useEffect} from 'react'
import {useState} from 'react'
function Dashboard() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')
  const themeVal = useSelector((selector) => selector?.themeReducer?.value)
  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [localStorage.getItem('theme')])
  useEffect(() => {
    console.log('temamız dashboard', themeVal)
  }, [themeVal])

  return (
    <div
    //  className={theme}
    >
      <Marque />
      <Card />
      <Tables />
      <SpecialCard />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default Dashboard
