import React from "react";
import Image from "next/image";
import {AiFillApple} from "react-icons/ai";

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
    {id: 5, name: "My Account"},
    {id: 6, name: "My Account"},
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
    <div className="pt-5">
      <div className="flex justify-between border-b border-gray-400">
        <div className="w-1/2">
          <div className="flex justify-between items-center">
            {array.map((item) => {
              return (
                <div className="items-center">
                  <h1 className="text-base font-semibold">{item.title}</h1>
                  {subarr.map((arr) => {
                    return (
                      <div>
                        <h3 className="text-sm font-medium my-3">{arr.name}</h3>
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
            <div class="text-base font-semibold mb-2">Subscribe</div>

            <div className=" bg-white flex items-center w-89 rounded-full ">
              <input
                className="rounded-full w-72 h-8 py-4 px-3 text-gray-700  focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />

              <button class="bg-gray-300 text-white h-7 rounded-full px-2 py-1 mr-1 hover:bg-gray-400 focus:outline-none flex items-center ">
                <a className=" text-sm font-semibold text-gray-900">
                  Subscribe
                </a>
              </button>
            </div>
            <p class="text-sm font-medium mt-3 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              consectetur.
            </p>
          </div>
          <div className="my-2">
            <h1 className="text-base font-semibold">Download App</h1>
            <div className="flex my-2 space-x-3 ">
              <div className="flex w-44 h-11 bg-red-500 rounded-3xl">
                <div className="text-white text-4xl m-1">
                  <AiFillApple />
                </div>
                <div className="my-1 mx-2">
                  <h5 className="text-xs font-medium text-white">
                    Available on
                  </h5>
                  <h4 className="text-sm font-semibold text-white">
                    Apple store
                  </h4>
                </div>
              </div>
              <div className="flex w-44 h-11 bg-red-500 rounded-3xl">
                <div className="text-white text-4xl m-1">
                  <AiFillApple />
                </div>
                <div className="my-1 mx-2">
                  <h5 className="text-xs font-medium text-white">
                    Available on
                  </h5>
                  <h4 className="text-sm font-semibold text-white">
                    Apple store
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around border-gray-400 border-b py-5">
        <div className="w-1/2">
          <h2 className="text-base font-semibold">Payment Methods</h2>
          <div className="flex  space-x-7 items-center my-3">
            {pays.map((pay) => {
              return (
                <div key={pay.id} className="w-18 h-8 relative">
                  <Image src={pay.img} layout="fill" objectFit="fill" />
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="text-base font-semibold">Connect</h2>
          <div className="flex items-center space-x-6 my-3">
            {connect.map((icon) => {
              return (
                <div key={icon.id} className="w-4 h-6  relative">
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
