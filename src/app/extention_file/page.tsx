import ImageCarousels from '@/components/ImageCarousels';
import ImageCarouselstwo from '@/components/ImageCarouselstwo';
import Navbars from "@/components/Navbars/Navbars";
import { Container } from 'react-bootstrap';

const GalleryPage: React.FC = () => {

  return (
    <>
      <Navbars/>
      <Container><h1>ภาพแบนเนอร์ทั้งหมด</h1></Container>
      
      <ImageCarousels />

      <ImageCarouselstwo />
    </>
  );
};

export default GalleryPage;
