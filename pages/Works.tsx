import Image, { StaticImageData } from 'next/image';
import Web1 from '@/public/images/web1.jpg';
import Web2 from '@/public/images/web2.jpg';
import Web3 from '@/public/images/web3.jpg';
import Web4 from '@/public/images/web4.jpg';
import Web5 from '@/public/images/web5.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useRef, useState } from 'react';
import { LeftArrow, RightArrow, X } from '@/components/icons';

interface ImageList {
  id: number;
  name: StaticImageData;
  alt: string;
}

const imageLists: ImageList[] = [
  {
    id: 1,
    name: Web1,
    alt: 'Project 1',
  },
  {
    id: 2,
    name: Web2,
    alt: 'Project 2',
  },
  {
    id: 3,
    name: Web3,
    alt: 'Project 3',
  },
  {
    id: 4,
    name: Web4,
    alt: 'Project 4',
  },
  {
    id: 5,
    name: Web5,
    alt: 'Project 5',
  },
];

export default function Works() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>('');
  const [modalImageName, setModalImageName] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if(showModal && ref.current && !ref.current.contains(e.target as Node)) {
        setShowModal(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showModal])

  const openModal = (src: any, alt: string) => {
    setModalImage(src);
    setModalImageName(alt)
    setShowModal(true);
    setCurrentIndex(imageLists.findIndex((image) => image.name.src === src))
    // document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setShowModal(false);
    // document.body.classList.remove('modal-open');
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + imageLists.length) % imageLists.length);
    setModalImage(imageLists[(currentIndex - 1 + imageLists.length) % imageLists.length].name);
    setModalImageName(imageLists[(currentIndex - 1 + imageLists.length) % imageLists.length].alt);
  };
  
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % imageLists.length);
    setModalImage(imageLists[(currentIndex + 1) % imageLists.length].name);
    setModalImageName(imageLists[(currentIndex + 1) % imageLists.length].alt);
  };

  return (
    <section className="ml-8">
      <h1 className="text-3xl mt-20">My Works</h1>
      <div className="relative">
        <Carousel
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          centerMode={true}
          centerSlidePercentage={33.33}
          infiniteLoop={true}
          swipeable={true}
          dynamicHeight={true}
          emulateTouch={true}
          autoFocus={false}
          interval={4000}
          transitionTime={500}
          stopOnHover={true}
          useKeyboardArrows={true}
          autoPlay={true}
          className="max-w-[65vw]"
        >
          {imageLists.map((image: ImageList) => (
            <div key={image.id} className="cursor-pointer relative mt-4" onClick={() => openModal(image.name.src, image.alt)}>
              <Image
                src={image.name}
                alt={image.alt}
                width={400}
                height={700}
                className="object-cover object-center w-[400px] h-[330px] px-4"
              />
              <div className="font-sans absolute top-0 bottom-0 left-0 right-0 py-2 w-[89%] mx-auto shadow-sm bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-center mt-[53%]">{image.alt}</p>
              </div>
            </div>
          ))}
        </Carousel>
        {showModal && (
          <div className="modal" ref={ref}>
            <div className='flex justify-between items-center mb-3'>
              <div className="cursor-pointer" onClick={closeModal}>
                <X width={35} height={35}/>
              </div>
              <section className='flex items-center'>
                {currentIndex !== 0 && (
                <div className="modal-arrow-left cursor-pointer" onClick={handlePrev}>
                  <LeftArrow width={30} height={30}/>
                </div>
                )}
                {currentIndex !== imageLists.length - 1 && (
                <div className="modal-arrow-right cursor-pointer" onClick={handleNext}>
                  <RightArrow width={30} height={30}/>
                </div>
                )}
              </section>
            </div>
            <div>
              <Image width={2000} height={2000} src={modalImage} alt={modalImageName} className="block max-w-full h-[400px] mb-4 object-cover object-center" />
              <p className="mb-4 text-center font-semibold text-xl font-sans">{modalImageName}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
