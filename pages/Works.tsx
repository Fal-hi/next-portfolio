import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { arrowStyles, imageLists } from "@/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Works() {
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
          {imageLists.map((image) => (
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
