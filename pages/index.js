import Head from "next/head";
import Image from "next/image";
import CardChanel from "../component/CardChanel/CardChanel";
import CarouselItem from "../component/CarouselItem/CarouselItem";
import CatagoryGrid from "../component/CategoryGrid/CategoryGrid";
import SellingCarousel from "../component/SellingCarousel/SellingCarousel";
import CollectionCard from "../component/CollectionCard/CollectionCard";
import JustInGrid from "../component/JustInGrid/JustInGrid";
import BrandLogo from "../component/BrandLogo/BrandLogo";
import Info from "../component/Info/Info";
import Footer from "../component/Footer/Footer";
import ViewButton from "../component/ViewButton/ViewButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Layout from "../component/Layout/Layout";
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
      img: "/ad1.png",
    },
    {
      id: 2,
      img: "/ad2.png",
    },
    {
      id: 3,
      img: "/ad1.png",
    },
  ];
  const banars = [
    {id: 1, img: "/banner1.png"},
    {
      id: 2,
      img: "/banner1.png",
    },
    {
      id: 3,
      img: "/banner1.png",
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
        <div className="mb-6 bg">
          <div className="container mx-auto">
            <div className="lg:pl-60 block space-y-1 md:space-y-1 lg:space-y-0 lg:space-x-2 xl:space-x-3 lg:flex">
              {/* slide banar */}
              <div className="banner-1">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={10000}
                  removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                >
                  {banars.map((banar) => {
                    return (
                      <div key={banar.id} className="banner-1">
                        <Image
                          src={banar.img}
                          layout="fill"
                          objectFit="fill"
                          quality="100"
                          alt="first banar"
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>

              {/* left side banar */}
              <div className="flex space-x-0.5 lg:block lg:space-x-0">
                <div className="lg:mt-0.5 banner-2 relative">
                  <Image
                    src="/homebanar2.png"
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    alt="first banar"
                  />
                </div>
                <div className="lg:mt-0.5 banner-2 relative ">
                  <Image
                    src="/homebanar3.png"
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
        <div className="container my-7 mx-auto">
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
              <div>
                {/* left side banar */}
                <div className="mb-1 last-banner-1">
                  <Image
                    src="/ads1.png"
                    // className="w-44 h-24 md:w-80 lg:w-98 xl:w-100 2xl:w-104 2xl:h-60 lg:h-52 lg:mb-3"
                    layout="fill"
                    objectFit="fill"
                    quality="100"
                    // style={{width: "590px", height: "230px"}}
                    alt="ads banar"
                  />
                </div>
                <div className="mb-1 last-banner-1">
                  <Image
                    src="/ads2.png"
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
                  src="/ads3.png"
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
        <div className="my-10 ">
          <div className="container mx-auto">
            <div className="items-center py-3">
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
