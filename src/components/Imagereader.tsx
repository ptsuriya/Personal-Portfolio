
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { Row, Col, Container } from 'react-bootstrap';

interface ImageProps {
  src: string;
  name: string;
}

// Helper function to read images from the public/images directory
const getImages = (): ImageProps[] => {
  const imagesDirectory = path.join(process.cwd(), 'public/images4');
  const filenames = fs.readdirSync(imagesDirectory);

  return filenames.map((filename) => ({
    src: `/images4/${filename}`,
    name: filename,
  }));
};

// Gallery Component
const Gallery: React.FC = () => {
  const images = getImages();

  return (
    <>
      <Container>      
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
