import React from 'react'
import Card from '../../pages/Card'
import Tables from '../../components/Tables'
import Sponsor from '../../components/Sponsor'
import Footer from '../../components/Footer'
import SpecialCard from '../../components/SpecialCard'

function Dashboard() {
  return (
    <>
      <Card />
      <Tables />
      <SpecialCard />
      <Sponsor />
      <Footer />
    </>
  )
}

export default Dashboard
