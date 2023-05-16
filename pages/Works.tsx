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
import Link from 'next/link';

interface ImageList {
  id: number;
  name: StaticImageData;
  alt: string;
  link: string;
}

const imageLists: ImageList[] = [
  {
    id: 1,
    name: Web1,
    alt: 'Nest JS CRUD',
    link: "https://github.com/Fal-hi/NestJS-CRUD"
  },
  {
    id: 2,
    name: Web2,
    alt: 'Express JS CRUD',
    link: "https://github.com/Fal-hi/ExpressJS-CRUD"
  },
  {
    id: 3,
    name: Web3,
    alt: 'React Dashboard Redux Saga',
    link: "https://github.com/Fal-hi/react-dashboard-redux-saga"
  },
  {
    id: 4,
    name: Web4,
    alt: 'React Portfolio',
    link: "https://github.com/Fal-hi/react-portfolio"
  },
  {
    id: 5,
    name: Web5,
    alt: 'UMKM Website',
    link: "https://github.com/Fal-hi/umkm"
  },
];

export default function Works() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<any>('');
  const [modalImageName, setModalImageName] = useState<string>('');
  const [modalImageLink, setModalImageLink] = useState<string>('');
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

  const openModal = (src: any, alt: string, link: string) => {
    setModalImage(src)
    setModalImageName(alt)
    setModalImageLink(link)
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
    setModalImageLink(imageLists[(currentIndex - 1 + imageLists.length) % imageLists.length].link);
  };
  
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % imageLists.length);
    setModalImage(imageLists[(currentIndex + 1) % imageLists.length].name);
    setModalImageName(imageLists[(currentIndex + 1) % imageLists.length].alt);
    setModalImageLink(imageLists[(currentIndex + 1) % imageLists.length].link);
  };

  return (
    <section className="mx-4 lg:ml-8">
      <h1 className="text-3xl mt-8 md:mt-[25vh] lg:mt-20 text-black dark:text-white">
        My Works
      </h1>
      <div className="relative mt-6 md:mt-auto">
        <Carousel
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
          centerMode={true}
          // centerSlidePercentage={33.33}
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
          className="lg:max-w-[65vw]"
        >
          {imageLists.map((image: ImageList) => (
            <div
              key={image.id}
              className="cursor-pointer relative mt-4 mx-2 md:mx-4"
              onClick={() => openModal(image.name.src, image.alt, image.link)}
            >
              <Image
                src={image.name}
                alt={image.alt}
                width={1000}
                height={330}
                className="object-cover object-center h-[330px]"
              />
              <div className="font-sans absolute top-0 bottom-0 left-0 right-0 py-2 w-full mx-auto shadow-sm bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-center mt-[20vh] md:mt-[12.5vh] lg:mt-[20vh]">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
        {showModal && (
          <div
            className="modal py-2 px-4 md:px-8 w-full md:w-[75vw] lg:w-auto bg-black dark:bg-white mt-2 md:mt-auto"
            ref={ref}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="cursor-pointer" onClick={closeModal}>
                <X
                  width={35}
                  height={35}
                  className="fill-white dark:fill-black"
                />
              </div>
              <section className="flex items-center">
                {currentIndex !== 0 && (
                  <div
                    className="modal-arrow-left cursor-pointer"
                    onClick={handlePrev}
                  >
                    <LeftArrow
                      width={30}
                      height={30}
                      className="fill-white dark:fill-black"
                    />
                  </div>
                )}
                {currentIndex !== imageLists.length - 1 && (
                  <div
                    className="modal-arrow-right cursor-pointer"
                    onClick={handleNext}
                  >
                    <RightArrow
                      width={30}
                      height={30}
                      className="fill-white dark:fill-black"
                    />
                  </div>
                )}
              </section>
            </div>
            <div>
              <Link href={modalImageLink} target="_blank">
                <Image
                  width={1000}
                  height={400}
                  src={modalImage}
                  alt={modalImageName}
                  className="block max-w-full h-60 md:h-[400px] mb-4 object-cover object-center"
                />
                <p className="mb-2 text-center font-medium text-xl font-sans text-white dark:text-black">
                  {modalImageName}
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
