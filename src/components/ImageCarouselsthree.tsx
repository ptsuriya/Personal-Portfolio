
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Carousel, CarouselItem, Row, Col, Container } from 'react-bootstrap';

interface ImageProps {
  src: string;
  name: string;
}

// Helper function to read images from the public/images directory
const getImages = (): ImageProps[] => {
  const imagesDirectory = path.join(process.cwd(), 'public/images3');
  const filenames = fs.readdirSync(imagesDirectory);

  return filenames.map((filename) => ({
    src: `/images3/${filename}`,
    name: filename,
  }));
};

// Gallery Component
const Gallery: React.FC = () => {
  const images = getImages();

  return (
    <>
      <Container>
        <h2 className='mt-5'>ภาพแบนเนอร์สำหรับหน้าจอขนาดเล็ก</h2>
      
      <Carousel className='mb-3'>
        {images.map((image, index) => (
          <CarouselItem key={index} >
            <img className='w-100' src={image.src} alt={image.name} />
          </CarouselItem>
        ))}
      </Carousel>

  
        <Row>
          {images.map((image, index) => (
            <Col className='mb-3' xs={12} lg={3} key={index} >
              <img className='w-100' src={image.src} alt={image.name} />
            </Col>
          ))}
        </Row>
      </Container>

    </>
  );
};

export default Gallery;
