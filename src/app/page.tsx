import React from 'react';
import './style.css';
import { Container, Col, Row } from 'react-bootstrap';
import Image from 'next/image';


const page = () => {
  return (
    <>

      <Container className="text-center ">

        <h1 className='p-5'>Bonjour . I&apos;m Kuma</h1>
        <h2>Poramart Tsuriyarangsri</h2>

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
