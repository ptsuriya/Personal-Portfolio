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

      <span className='container-fluid'>
        <Row>
        {images.map((image, index) => (
          <Col className='mb-3' xs={12} lg={4} key={index} >
            <Image src={image.src} alt={image.name} width={76.8*8} height={30*8} />
          </Col>
        ))}
        </Row>
      </span>

    </>
  );
};

export default Gallery;
