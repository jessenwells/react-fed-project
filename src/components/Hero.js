import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Hero = () => {
 return (
   <section className='pax-hero'>
    <Container fluid>
     <Col lg={10} className='mx-auto px-0'>
      <Row className='row justify-content-end flex-column-reverse flex-md-row'>
       <Col lg={9} md={8} className='text-center text-md-left'>
        <h1 className='display-2'>Welcome to Paxful</h1>
        <p className='mb-0'>
         <strong>Join the peer-to-peer finance revolution.</strong>
         The Paxful Marketplace is here to radically transform the way you spend money. Use hundreds of different payment methods to buy and sell bitcoin.
        </p>
       </Col>
       <Col className='col-3 mb-3 mb-md-0 mx-auto text-md-right'>
        <img src='/assets/hero-btc-icon.svg' alt='' />
       </Col>
      </Row>
     </Col>
    </Container>
   </section>
 )
}

export default Hero
