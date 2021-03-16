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

export default function Home() {
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
  return (
    <div className="bg-gray-100">
      <section>
        <Header />
      </section>
      <section>
        <MegaMenu />
      </section>
      <section>
        <div className="mb-10">
          <div className="container mx-auto">
            <div className="flex ml-72 justify-between">
              <div className=" relative w-2/3 h-96">
                <Image
                  src="/firstbanar.png"
                  layout="fill"
                  objectFit="fill"
                  alt="first banar"
                />
              </div>
              <div className="">
                <div className=" relative w-72 h-48">
                  <Image
                    src="/secondbanar.png"
                    layout="fill"
                    objectFit="fill"
                    alt="first banar"
                  />
                </div>
                <div className=" relative w-72 h-48">
                  <Image
                    src="/thirdbanar.png"
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
            <div className="flex items-center py-4 space-x-7  ">
              <h1 className="text-2xl ">Deal of the day</h1>
              <span className="text-xl">Date</span>
            </div>
            <CarouselItem />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="flex items-center py-4">
              <h1 className="text-2xl ">Catagores</h1>
            </div>
            <CatagoryGrid />
          </div>
        </div>
      </section>
      <section>
        <div className="container my-7 mx-auto">
          <div className="flex justify-between">
            {images.map((ad) => {
              return (
                <div key={ad.id} className="w-90 h-64 relative">
                  <Image
                    src={ad.img}
                    layout="fill"
                    objectFit="cover"
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
            <div className="items-center py-4">
              <h1 className="text-2xl">Best Selling</h1>
            </div>
            <SellingCarousel />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="items-center py-4">
              <h1 className="text-2xl">Collections</h1>
            </div>
            <CollectionCard />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="flex justify-between">
              <div className="">
                <div className="w-100 h-46 mb-3 relative">
                  <Image
                    src="/ads1.png"
                    layout="fill"
                    objectFit="cover"
                    alt="ads banar"
                  />
                </div>
                <div className="w-100 h-46 mt-4 relative">
                  <Image
                    src="/ads2.png"
                    layout="fill"
                    objectFit="cover"
                    alt="ads banar"
                  />
                </div>
              </div>
              <div className="w-100 h-96 relative">
                <Image
                  src="/ads3.png"
                  layout="fill"
                  objectFit="cover"
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
            <div className="items-center py-4">
              <h1 className="text-2xl">Most Popular</h1>
            </div>
            <CarouselItem />
          </div>
        </div>
      </section>
      <section>
        <div className="my-7">
          <div className="container mx-auto">
            <div className="items-center py-4">
              <h1 className="text-2xl">Most Popular</h1>
            </div>
            <JustInGrid />
          </div>
        </div>
      </section>
      <section>
        <div className="my-10">
          <div className="container mx-auto">
            <div className="items-center py-3">
              <h1 className="text-2xl">Top Brands</h1>
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
