import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid className='pt-3 noselect'>
      <Row>
        <Col lg={8} md={8} sm={12} xs={12} className='theme__footer'>
          <h1>Footer</h1>
          <p>
            Polyflip is a decentralized betting platform powered by Polygon
            Network and Chainlink. Unlike traditional casinos that operate in
            black boxes, Polyflip runs on smart contracts that are fair,
            transparent and immutable. The platform provides a low-cost and fast
            gaming experience through the combination of both traditional core
            game and blockchain mechanics.
          </p>
          <p className='pt-3'>Support</p>
          <p>Provider Faimess</p>
          <p>Copyright © 2022 Polyflip. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
