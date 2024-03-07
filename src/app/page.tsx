import React from 'react';
import './style.css';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'next/image';


const page = () => {
  return (
    <>
      <Container className='text-center top-text'>
        <h4 className='greeting'>Hola , Soy Kuma .</h4>
        <h1>PORAMART</h1>
        <h2>TSURIYARANGSRI</h2>
        <p style={{marginTop:"15"+"px"}}> 
          <span>
            <svg style={{marginRight:"5"+"px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            </svg>
             <a href="tel:+66909617328"> 0909-617-328</a>
             </span>
             <span style={{marginLeft:"20"+"px"}}>
          <svg style={{marginRight:"5"+"px"}}viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
            <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z" /> </svg> 
            <a href="mailto:ptsuriyarangsri@gmail.com">ptsuriyarangsri@gmail.com </a> </span> </p>
            <Row>
          <Col>
          <Image className='imgprofile'
            src="/image/Line/profile.jpg"
            width={280}
            height={500}
            alt="Picture of the author" />
          </Col>
          <Col>sss</Col>
        </Row>
         </Container>   
      

    </>
  )
}

export default page
