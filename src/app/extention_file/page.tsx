import ImageCarousels from '@/components/ImageCarousels';
import ImageCarouselstwo from '@/components/ImageCarouselstwo';
import Navbars from "@/components/Navbars/Navbars";

const GalleryPage: React.FC = () => {

  return (
    <>
      <Navbars/>
      <ImageCarousels />

      <ImageCarouselstwo />
    </>
  );
};

export default GalleryPage;
