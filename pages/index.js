import Head from "next/head";
import Image from "next/image";
import CardChanel from "../component/GridCard/CardChanel/CardChanel";
import CarouselItem from "../component/Carousel/CarouselItem/CarouselItem";
import CatagoryGrid from "../component/GridCard/CategoryGrid/CategoryGrid";
import SellingCarousel from "../component/Carousel/SellingCarousel/SellingCarousel";
import CollectionCard from "../component/GridCard/CollectionCard/CollectionCard";
import JustInGrid from "../component/GridCard/JustInGrid/JustInGrid";
import BrandLogo from "../component/BrandLogo/BrandLogo";
import Info from "../component/Info/Info";
import ViewButton from "../component/ViewButton/ViewButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MobileMenu from "../component/MobileTab/MobileMenu/MobileMenu";
import CountdownHeading from "../component/CountdownHeading/CountdownHeading";
import {useRouter} from "next/router";
import MegaMenu from "../component/MegaMenu/MegaMenu";
//import "./index.css";

export default function Home() {
  const router = useRouter();
  const responsive = {
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const images = [
    {
      id: 1,
      img: "/Banner/ad1.png",
    },
    {
      id: 2,
      img: "/Banner/ad2.png",
    },
    {
      id: 3,
      img: "/Banner/ad3.png",
    },
  ];
  const banars = [
    {id: 1, img: "/Banner/banner1.png"},
    {
      id: 2,
      img: "/Banner/banner1.png",
    },
    {
      id: 3,
      img: "/Banner/banner1.png",
    },
  ];
  return (
    <div>
      <section
        className={
          router.pathname == "/"
            ? "home w-full bg-white sticky top-24 z-10"
            : "w-full bg-white sticky top-24 z-10"
        }
      >
        <MegaMenu />
      </section>

      <section>
        {/* home banar */}
        <div className="mb-11 bg">
          <div className="container mx-auto">
            <div className="lg:pl-60 block space-y-1 md:space-y-1 lg:space-y-0 lg:space-x-2 xl:space-x-4 lg:flex">
              {/* slide banar */}
              <div className="banner-1">
                {/* <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={10000}
                  removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                > */}
                {/* {banars.map((banar) => {
                  return ( */}
                <div className="banner-1 relative">
                  <Image
                    src="/Banner/banner1.png"
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    alt="first banar"
                  />
                </div>
                {/* );
                })} */}
                {/* </Carousel> */}
              </div>

              {/* left side banar */}
              <div className="flex space-x-0.5 lg:block lg:space-x-0">
                <div className="banner-2 relative">
                  <Image
                    src="/Banner/homebanar2.png"
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    alt="first banar"
                  />
                </div>
                <div className="lg:mt-2 banner-2 relative ">
                  <Image
                    src="/Banner/homebanar3.png"
                    // className="lg:w-65 lg:h-49 2xl:w-80 2xl:h-60"
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    alt="first banar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <CardChanel />
      </section>
      <section>
        <div className="my-5">
          <div className="container mx-auto">
            <CountdownHeading />
            <CarouselItem />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="flex items-center py-4">
              <h1 className="category">Categories</h1>
            </div>
            <CatagoryGrid />
          </div>
        </div>
      </section>
      <section>
        <div className="container my-10 mx-auto">
          <div className="hidden lg:flex  justify-between ">
            {/* middle pard banar using map method */}
            {images.map((ad) => {
              return (
                <div key={ad.id} className="middle-banner">
                  <Image
                    src={ad.img}
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    // style={{maxWidth: "440px", maxHeight: "239px"}}
                    alt="ad banar"
                  />
                </div>
              );
            })}
          </div>
          <div className="block lg:hidden">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
            >
              {images.map((ad) => {
                return (
                  <div key={ad.id} className="w-full h-60 sm:h-96">
                    <Image
                      src={ad.img}
                      layout="fill"
                      objectFit="fill"
                      quality="100"
                      // style={{maxWidth: "440px", maxHeight: "239px"}}
                      alt="ad banar"
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className=" flex justify-between items-center py-4">
              {/* best selling section Header */}
              <h1 className="category">Best Selling</h1>
              <ViewButton />
            </div>
            <SellingCarousel />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="items-center py-4 mb-2">
              {/* collection section header */}

              <h1 className="category">Collections</h1>
            </div>
            <CollectionCard />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7 pt-3">
          <div className="container mx-auto">
            <div className="flex justify-between">
              {/* landing page last banar */}
              <div className="space-y-5">
                {/* left side banar */}
                <div className=" last-banner-1">
                  <Image
                    src="/Banner/ads1.png"
                    // className="w-44 h-24 md:w-80 lg:w-98 xl:w-100 2xl:w-104 2xl:h-60 lg:h-52 lg:mb-3"
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    // style={{width: "590px", height: "230px"}}
                    alt="ads banar"
                  />
                </div>
                <div className=" last-banner-1">
                  <Image
                    src="/Banner/ads2.png"
                    // className="w-44 h-24 md:w-80 lg:w-98 xl:w-100 2xl:w-104 2xl:h-60 lg:h-52 lg:mb-3"
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    // style={{width: "590px", height: "230px"}}
                    alt="ads banar"
                  />
                </div>
              </div>
              {/* right side banar */}
              <div className="mb-1 last-banner-2">
                <Image
                  src="/Banner/ads3.png"
                  // className="w-44 h-24 md:w-80 lg:w-98 xl:w-100 2xl:w-104 2xl:h-60 lg:h-52 lg:mb-3"
                  layout="fill"
                  objectFit="fill"
                  quality="100"
                  // style={{width: "590px", height: "230px"}}
                  alt="ads banar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className=" flex justify-between items-center py-4">
              {/* most popular section header */}
              <h1 className="category">Most Popular</h1>
              <ViewButton />
            </div>
            <CarouselItem />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="items-center py-4">
              {/* just in section header */}
              <h1 className="category">Just In</h1>
            </div>
            <JustInGrid />
          </div>
        </div>
      </section>
      <section className="sticky bottom-0 lg:hidden border-t border-gray-111 h-20 bg-white-100">
        <div className="container">
          <MobileMenu />
        </div>
      </section>
      <section>
        <div className="my-10  ">
          <div className="container mx-auto">
            <div className="items-center py-4">
              {/* top brand section header */}
              <h1 className="category">Top Brands</h1>
            </div>
            <BrandLogo />
          </div>
        </div>
      </section>
      <section>
        <div className="pt-5 bg-info border-b border-gray-300">
          <div className="container mx-auto">
            <Info />
          </div>
        </div>
      </section>
    </div>
  );
}
