import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../App.css'

function Card() {
  return (
    <Container fluid className='pt-5 mt-5 noselect'>
      <Row className='theme__games'>
        <h1>Games</h1>
      </Row>
      <Row className='theme__row'>
        <Col lg={8} md={12} sm={12} xs={12} className='padding'>
          <div className='theme__box'>
            <div className='figure'>
              <img
                className='image'
                src='https://cdn.discordapp.com/attachments/940702729213448223/962354430420860968/CoinflipDesktop.png'
              />
           
              <div className='figure__caption'>
                <p>Coinflip</p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} sm={6} xs={6} className='padding'>
          <div className='theme__box'>
            <div className='figure'>
              <img
                className='image'
                src='https://cdn.discordapp.com/attachments/943971325024817233/991439420324577342/grafica_1.png'
              />
              <div className='figure__caption'>
                <p>Lottery</p>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={4} md={6} sm={6} xs={6} className='padding'>
          <div className='theme__box'>
            <div className='figure'>
              <img
                className='image'
                src='https://cdn.discordapp.com/attachments/940702729213448223/962354430693482566/RouletteDesktop.png'
              />
              <div className='figure__caption'>
                <p>Lottery</p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} sm={6} xs={6} className='padding'>
          <div className='theme__box'>
            <div className='figure'>
              <img
                className='image'
                src='https://cdn.discordapp.com/attachments/940702729213448223/962354431272300574/CrashDesktop.png'
              />
              <div className='figure__caption'>
                <p>Lottery</p>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} sm={6} xs={6} className='padding'>
          <div className='theme__box'>
            <div className='figure'>
              <img
                className='image'
                src='https://cdn.discordapp.com/attachments/940702729213448223/971884003797901312/grafica.png'
              />
              <div className='figure__caption'>
                <p>Lottery</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='theme__games  pt-3'>
        <h1>Shop</h1>
      </Row>
      <Row className='theme__row'>
        <Col lg={12} md={12} sm={12} xs={12} className='padding'>
          <div className='theme__box'>
            <div className='figure'>
              <img
                className='image'
                src='https://cdn.discordapp.com/attachments/940702729213448223/962354430127255552/ShopDesktop.png'
              />
              <div className='figure__caption'>
                <p>Lottery</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Card
