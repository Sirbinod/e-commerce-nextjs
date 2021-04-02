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
    {id: 4, name: "shopping"},
    {id: 5, name: "whatever"},
    {id: 6, name: "low to high"},
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
      img: "/ime.png",
    },
  ];
  const connect = [
    {
      id: 1,
      img: "/facebook.png",
    },
    {
      id: 2,
      img: "/instagram.png",
    },
    {
      id: 3,
      img: "/twitter.png",
    },
    {
      id: 4,
      img: "/youtube.png",
    },
  ];
  return (
    <div className="pt-5">
      <div className="flex justify-between border-b border-gray-111">
        <div className="w-1/2">
          <div className="flex justify-between items-center">
            {array.map((item, i) => {
              return (
                <div className="items-center" key={i}>
                  <h1 className="text-sm-2 leading-2 font-semibold">
                    {item.title}
                  </h1>
                  {subarr.map((arr) => {
                    return (
                      <div>
                        <h3 className="text-xs-1 my-3 font-meduim">
                          {arr.name}
                        </h3>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-1/2 ml-32 h-auto">
          <div className="w-90">
            <div className="text-sm-2 font-semibold mb-2">Subscribe</div>

            <div className=" bg-white-100 flex items-center w-89 rounded-full ">
              <input
                className="rounded-full w-72 h-8 py-4 px-3 text-gray-222 focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />

              <button className="bg-blue-222 text-white h-7 rounded-full px-2.5 py-1 mr-1 hover:bg-gray-400 focus:outline-none flex items-center ">
                <a className=" text-xs font-semibold text-blue-111">
                  Subscribe
                </a>
              </button>
            </div>
            <p className="text-xs-1 font-medium mt-3 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
              consectetur.
            </p>
          </div>
          <div className="my-2">
            <h1 className="text-sm-2 font-semibold">Download App</h1>
            <div className="flex my-2 space-x-3 ">
              <div className="flex w-44 h-10 bg-red-444 rounded-3xl items-center">
                <div className="text-white-100 my-1.5 mx-2">
                  <img
                    src="/apple.png"
                    style={{maxWidth: "25px", maxHeight: "30px"}}
                  />
                </div>
                <div className="my-2 mx-2">
                  <h5 className="text-xxs leading-none font-medium text-white-100">
                    Available on
                  </h5>
                  <h4 className="text-xs-1 leading-2 font-semibold text-white-100">
                    Apple store
                  </h4>
                </div>
              </div>
              <div className="flex w-44 h-11 bg-red-444 rounded-3xl">
                <div className="text-white-100  my-2.5 ml-3 mr-2">
                  <img
                    src="/plyastore.png"
                    style={{maxWidth: "25px", maxHeight: "30px"}}
                  />
                </div>
                <div className="my-2 mx-2">
                  <h5 className="text-xxs leading-none font-medium text-white-100">
                    Available on
                  </h5>
                  <h4 className="text-xs-1 leading-1 font-semibold text-white-100">
                    Apple store
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-around border-gray-111 border-b py-2">
        <div className="w-1/2">
          <h2 className="text-base font-semibold">Payment Methods</h2>
          <div className="flex  space-x-7 items-center my-3">
            {pays.map((pay) => {
              return (
                <div key={pay.id} className="w-24 h-10 relative">
                  <img
                    src={pay.img}
                    style={{maxWidth: "94px", maxHight: "41px"}}
                  />
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
                <div key={icon.id}>
                  <img
                    src={icon.img}
                    style={{maxWidth: "30px", maxHeight: "30px"}}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" border-b border-gray-111 py-2">
        <h2 className="text-sm-5 font-medium"> Popular Series</h2>
        <div className="flex justify-between items-center space-x-2">
          <h4 className="text-xs-1">hello |</h4>
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
