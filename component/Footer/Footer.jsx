import React from "react";
import Image from "next/image";

const Footer = (props) => {
  const array = [
    {
      id: 1,
      title: "Quick Lines",
    },
    {
      id: 2,
      title: "Customer Service",
    },
    {
      id: 3,
      title: "Company Link",
    },
  ];
  const subarr = [
    {id: 1, name: "Shopping Bag"},
    {id: 2, name: "Login"},
    {id: 3, name: "My Account"},
    {id: 4, name: "My Account"},
  ];
  const pays = [
    {
      id: 1,
      img: "/esewa.png",
    },
    {
      id: 2,
      img: "/khalti.png",
    },
    {
      id: 2,
      img: "/khalti.png",
    },
  ];
  const connect = [
    {
      id: 1,
      img: "/fb.png",
    },
    {
      id: 2,
      img: "/insta.png",
    },
    {
      id: 3,
      img: "/tweet.png",
    },
    {
      id: 4,
      img: "/yt.png",
    },
  ];
  return (
    <div className="pt-5 bg-gray-300">
      <div className="flex justify-between border-b border-gray-400">
        <div className="w-1/2">
          <div className="flex justify-between items-center">
            {array.map((item) => {
              return (
                <div className="items-center">
                  <h1 className="text-xl">{item.title}</h1>
                  {subarr.map((arr) => {
                    return (
                      <div>
                        <h3 className="text-sm my-3">{arr.name}</h3>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div class="w-1/2 ml-32 h-auto">
          <div className="w-90">
            <div class="text-xl mb-2">Subscribe</div>

            <div className=" bg-white flex items-center w-88 rounded-full ">
              <input
                className="rounded-full w-60 h-10 py-4 px-3 pr-2 text-gray-700  focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />

              <button class="bg-gray-300 text-white h-9 rounded-full p-2  hover:bg-gray-400 focus:outline-none flex items-center ">
                <a className="text-gray-900">Subscribe</a>
              </button>
            </div>
            <p class="text-sm mt-5 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              consectetur.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around border-gray-400 border-b py-5">
        <div className="w-1/2">
          <h2 className="text-lg">Payment Methods</h2>
          <div className="flex  space-x-7 items-center my-3">
            {pays.map((pay) => {
              return (
                <div key={pay.id} className="w-18 h-9 relative">
                  <Image src={pay.img} layout="fill" objectFit="fill" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-lg">Connect</h2>
          <div className="flex items-center space-x-6 my-3">
            {connect.map((icon) => {
              return (
                <div key={icon.id} className="w-6 h-6  relative">
                  <Image src={icon.img} layout="fill" objectFit="fill" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" border-b border-gray-400 py-5">
        <h2 className="text-xl"> Popular Series</h2>
        <div className="flex justify-between items-center space-x-2">
          <h4 className="text-sm">hello |</h4>
        </div>
      </div>
      <div className="py-5">
        <h4 className="text-sm">
          2021 Copyright Powered by Supreme IT Solution
        </h4>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
