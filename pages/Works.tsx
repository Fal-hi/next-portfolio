import { CSSProperties } from "react";
import Image, { StaticImageData } from "next/image";
import Web1 from "@/public/images/book-search.png";
import Web2 from "@/public/images/guessing-game.png";
import Web3 from "@/public/images/rn-ecommerce.png";
import Web7 from "@/public/images/go-expert.png";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ImageList {
  id: number;
  name: StaticImageData;
  alt: string;
  tech: string;
  link: string;
}

const imageLists: ImageList[] = [
  {
    name: Web7,
    id: 1,
    alt: "Ganesha Operation Expert",
    tech: "Next JS, Nest JS, Tailwind CSS",
    link: "https://ganeshaoperationexpert.com",
  },
  {
    id: 2,
    name: Web1,
    alt: "Book Search",
    tech: "Next JS, Tailwind CSS",
    link: "https://book-search-fal.netlify.app",
  },
  {
    id: 3,
    name: Web2,
    alt: "Guessing Game",
    tech: "Next JS, Tailwind CSS",
    link: "https://guessing-game-fal.vercel.app",
  },
  {
    id: 4,
    name: Web3,
    alt: "React Native Ecommerce",
    tech: "React Native",
    link: "https://github.com/Fal-hi/freebies-ecommerce",
  },
];

export default function Works() {
  const arrowStyles: CSSProperties = {
    position: "absolute",
    cursor: "pointer",
    top: "calc(50% - 15px)",
    background: "rgba( 255, 255, 255, 0.25 )",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 4px )",
    WebkitBackdropFilter: "blur( 4px )",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    color: "black",
    zIndex: 2,
    width: 30,
    height: 30,
    borderRadius: 50,
    padding: 5,
  };
  return (
    <section className="mx-4 lg:ml-8">
      <h1 className="text-3xl mt-8 md:mt-[25vh] lg:mt-20 text-black dark:text-white">
        My Works
      </h1>
      <div className="relative mt-6 md:mt-auto">
        <Carousel
          showStatus={false}
          showIndicators={true}
          showArrows={true}
          showThumbs={true}
          centerMode={true}
          // centerSlidePercentage={33.33}
          infiniteLoop={true}
          swipeable={false}
          dynamicHeight={true}
          emulateTouch={true}
          autoFocus={false}
          interval={4000}
          transitionTime={500}
          stopOnHover={true}
          useKeyboardArrows={true}
          autoPlay={true}
          className="lg:max-w-[65vw]"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, left: 15 }}
              >
                <ChevronLeftIcon />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                onClick={onClickHandler}
                title={label}
                style={{ ...arrowStyles, right: 15 }}
              >
                <ChevronRightIcon />
              </button>
            )
          }
        >
          {imageLists.map((image: ImageList) => (
            <div
              key={image.id}
              className="cursor-pointer relative mt-4 mx-2 md:mx-4"
            >
              <Image
                src={image.name}
                alt={image.alt}
                width={1000}
                height={330}
                className="object-cover object-center h-[330px]"
              />
              <Link
                href={image.link}
                target="_blank"
                className="font-sans absolute top-0 bottom-0 left-0 right-0 py-2 w-full mx-auto shadow-sm bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
              >
                <p className="text-center font-semibold mt-[20vh] md:mt-[12.5vh] lg:mt-[20vh]">
                  {image.alt}
                </p>
                <p className="text-xs">{image.tech}</p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
