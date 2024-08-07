import React from 'react';
import './style.css';
import { Container, Col, Row ,Button} from 'react-bootstrap';
import Image from 'next/image';


const page = () => {
  return (
    <>
    <section className='top-section'>
      <Container className='text-center top-content' id='intro'>

        <Row md={2} xs={1} >
          <Col>
            <Image className='imgprofile'
              src="/image/Line/profile.jpg"
              width={600}
              height={500}
              alt="Picture of the author" />
          </Col>
          <Col className='details top-text'>
          <h4>Hola , I&apos; m Kuma</h4>
          <h1>Ui Designer & </h1>
          <h1>Front-End Web Developer</h1>
          <p>
          With a year of experience under my belt, Poramart Tsuriyaransri leverages a passion for user-centric design and technical expertise to craft beautiful and functional UIs and front-end web applications.
          </p>
          <p>
            <span>
              
              <a href="tel:+66909617328"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg> 0909-617-328</a>
            </span>
            <span>
            
              <a href="mailto:ptsuriyarangsri@gmail.com"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
            </svg>ptsuriyarangsri@gmail.com </a> </span> </p>
          </Col>
        </Row>
        
      </Container>
    
    </section>
    
      <Container>
      <Row xs={1} >
        <Col className='text-center'>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>  
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>  
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>
        <h1>sssssssssssssssssssssssssssssssss</h1>  
        </Col>
      </Row>
      </Container>
      

    </>
  )
}

export default page
