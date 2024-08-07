import ImageCarousels from '@/components/ImageCarousels';
import ImageCarouselstwo from '@/components/ImageCarouselstwo';
import ImageCarouselsthree from '@/components/ImageCarouselsthree';
import Imagereader from '@/components/Imagereader';
import Videoplayers from '@/components/video';
import Navbars from "@/components/Navbars/Navbars";
import { Container } from 'react-bootstrap';

const GalleryPage: React.FC = () => {

  return (
    <>
      <Navbars/>
      <Container><h1>ภาพแบนเนอร์ทั้งหมด</h1></Container>
      
      <ImageCarousels />

      <ImageCarouselstwo />

      <ImageCarouselsthree />

      <Container>
        <h1 className='mt-5'>
        ภาพการออกแบบอื่นๆ</h1>
        <Videoplayers />
        <Imagereader />
      </Container>
    </>
  );
};

export default GalleryPage;
