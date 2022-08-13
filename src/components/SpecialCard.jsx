import React from 'react'
import {Col, Row, Container} from 'react-bootstrap'
import {FaUser} from 'react-icons/fa'

function SpecialCard() {
  return (
    <div>
      <Container fluid className='noselect'>
        <Row style={{rowGap: '20px'}}>
          <Col lg={3} md={6} sm={6} xs={6} className='padding'>
            <div className='theme__special-card d-flex align-items-center'>
              <div className='card__design'>
                <FaUser />
              </div>
              <span>Volume</span>
              <span>5,213132</span>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={6} className='padding'>
            <div className='theme__special-card d-flex align-items-center'>
              <div className='card__design'>
                <FaUser />
              </div>
              <span>Volume</span>
              <span>5,213132</span>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={6} className='padding'>
            <div className='theme__special-card d-flex align-items-center'>
              <div className='card__design'>
                <FaUser />
              </div>
              <span>Volume</span>
              <span>5,213132</span>
            </div>
          </Col>
          <Col lg={3} md={6} sm={6} xs={6} className='padding'>
            <div className='theme__special-card d-flex align-items-center'>
              <div className='card__design'>
                <FaUser />
              </div>
              <span>Volume</span>
              <span>5,213132</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SpecialCard
