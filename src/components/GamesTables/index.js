import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import './games.css'
import {Link, Location, useLocation} from 'react-router-dom'
import {BsCurrencyBitcoin, BsDice6} from 'react-icons/bs'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

function GamesDefault() {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div className='pt-5 mt-5'>
      <div className='mx-auto games__navbar'>
        <ul className='d-flex justify-content-start align-items-center'>
          <Link to='/games/coin' className='mx-3'>
            <li
              className={
                location.pathname === '/games/coin' &&
                'current-location d-flex align-items-center'
              }
            >
              <BsCurrencyBitcoin className='mx-1' />
              Coin
            </li>
          </Link>

          <Link to='/games/dice' className='mx-3'>
            <li
              className={
                location.pathname === '/games/dice' &&
                'current-location d-flex align-items-center'
              }
            >
              <BsDice6 className='mx-1' />
              Dice
            </li>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default GamesDefault
