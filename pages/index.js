import Head from "next/head";
import Header from "../component/Header/Header";
import MegaMenu from "../component/MegaMenu/MegaMenu";
import Image from "next/image";
import CardChanel from "../component/CardChanel/CardChanel";
import CarouselItem from "../component/CarouselItem/CarouselItem";
import CatagoryGrid from "../component/CatagoryGrid/CatagoryGrid";
import SellingCarousel from "../component/SellingCarousel/SellingCarousel";
import CollectionCard from "../component/CollectionCard/CollectionCard";
import JustInGrid from "../component/JustInGrid/JustInGrid";
import BrandLogo from "../component/BrandLogo/BrandLogo";
import Info from "../component/Info/Info";
import Footer from "../component/Footer/Footer";
import ViewButton from "../component/ViewButton/ViewButton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
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
      img: "/ad3.png",
    },
  ];
  const banars = [
    {id: 1, img: "/banner01.png"},
    {
      id: 2,
      img: "/banar02.png",
    },
    {
      id: 3,
      img: "/banar03.png",
    },
  ];
  return (
    <div className="bg-gray-100">
      <section>
        <Header />
      </section>
      <section>
        <MegaMenu />
      </section>
      <section>
        {/* home banar */}
        <div className="mb-10">
          <div className="container mx-auto">
            <div className="flex ml-60 justify-between">
              {/* slide banar */}
              <div className="w-102">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  autoPlay={true}
                  autoPlaySpeed={10000}
                  removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
                >
                  {banars.map((banar) => {
                    return (
                      <div key={banar.id} className=" relative w-102 h-89">
                        <Image
                          src={banar.img}
                          layout="fill"
                          objectFit="fill"
                          alt="first banar"
                        />
                      </div>
                    );
                  })}
                </Carousel>
              </div>

              {/* left side banar */}
              <div className=" space-y-2">
                <div className="relative w-72 h-44">
                  <Image
                    src="/homebanar2.png"
                    layout="fill"
                    objectFit="fill"
                    alt="first banar"
                  />
                </div>
                <div className=" relative w-72 h-44">
                  <Image
                    src="/homebanar3.png"
                    layout="fill"
                    objectFit="fill"
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
        <div className="my-7">
          <div className="container mx-auto">
            <div className="flex items-center py-4 justify-between">
              {/* heading carousel item */}
              <div className="flex space-x-16 items-center">
                <h1 className="text-2xl font-semibold ">Deal of the day</h1>
                {/* date countdown */}
                <div className="flex">
                  <h4 className="text-sm">
                    Ends in
                    <span className="w-6 h-6 px-1.5 py-1.5 rounded-lg bg-red-600 text-white mx-1.5">
                      01
                    </span>
                    :
                    <span className="w-6 h-6 px-1.5 py-1.5 rounded-lg bg-red-600 text-white mx-1.5">
                      01
                    </span>
                    :
                    <span className="w-6 h-6 px-1.5 py-1.5 rounded-lg bg-red-600 text-white mx-1.5">
                      01
                    </span>
                    hrs
                  </h4>
                </div>
                {/* end countdown */}
              </div>
              <div>
                <ViewButton />
              </div>
            </div>
            <CarouselItem />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="flex items-center py-4">
              <h1 className="text-2xl font-semibold ">Catagores</h1>
            </div>
            <CatagoryGrid />
          </div>
        </div>
      </section>
      <section>
        <div className="container my-7 mx-auto">
          <div className="flex justify-between">
            {/* middle pard banar using map method */}
            {images.map((ad) => {
              return (
                <div key={ad.id} className="w-90 h-64 relative">
                  <Image
                    src={ad.img}
                    layout="fill"
                    objectFit="fill"
                    alt="ad banar"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className=" flex justify-between items-center py-4">
              {/* best selling section Header */}
              <h1 className="text-2xl font-semibold ">Best Selling</h1>
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

              <h1 className="text-2xl font-semibold ">Collections</h1>
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
                <div className="w-100 h-46 mb-3 relative">
                  <Image
                    src="/ads1.png"
                    layout="fill"
                    objectFit="fill"
                    alt="ads banar"
                  />
                </div>
                <div className="w-100 h-46 mt-4 relative">
                  <Image
                    src="/ads2.png"
                    layout="fill"
                    objectFit="fill"
                    alt="ads banar"
                  />
                </div>
              </div>
              {/* right side banar */}
              <div className="w-100 h-96 relative">
                <Image
                  src="/ads3.png"
                  layout="fill"
                  objectFit="fill"
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
              <h1 className="text-2xl font-semibold ">Most Popular</h1>
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
              <h1 className="text-2xl font-semibold ">Just In</h1>
            </div>
            <JustInGrid />
          </div>
        </div>
      </section>
      <section>
        <div className="my-10">
          <div className="container mx-auto">
            <div className="items-center py-3">
              {/* top brand section header */}
              <h1 className="text-2xl font-semibold ">Top Brands</h1>
            </div>
            <BrandLogo />
          </div>
        </div>
      </section>
      <section>
        <div className="pt-5 bg-gray-300">
          <div className="container mx-auto">
            <Info />
          </div>
        </div>
      </section>
      <section>
        <div className=" bg-gray-300">
          <div className="container mx-auto">
            <Footer />
          </div>
        </div>
      </section>
    </div>
  );
}
