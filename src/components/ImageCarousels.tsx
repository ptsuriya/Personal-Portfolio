
import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import {Carousel,CarouselItem,Row,Col} from 'react-bootstrap';

interface ImageProps {
  src: string;
  name: string;
}

// Helper function to read images from the public/images directory
const getImages = (): ImageProps[] => {
  const imagesDirectory = path.join(process.cwd(), 'public/images1');
  const filenames = fs.readdirSync(imagesDirectory);

  return filenames.map((filename) => ({
    src: `/images1/${filename}`,
    name: filename,
  }));
};

// Gallery Component
const Gallery: React.FC = () => {
  const images = getImages();

  return (
    <>

      <Carousel >
      {images.map((image, index) => (
          <CarouselItem key={index} >
            <img className='w-100' src={image.src} alt={image.name}  />
          </CarouselItem>
        ))}
    </Carousel>

      <span className='container-fluid'>
        <Row>
        {images.map((image, index) => (
          <Col className='mb-3' xs={12} lg={6} key={index} >
            <img w-100 src={image.src} alt={image.name}  />
          </Col>
        ))}
        </Row>
      </span>

    </>
  );
};

export default Gallery;