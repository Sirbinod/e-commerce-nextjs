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
    <div className="footer-bg">
      <div className="pt-5 container mx-auto">
        <div className="block lg:flex py-5 justify-between border-b border-gray-300">
          <div className=" w-full lg:w-1/2">
            <div className="flex justify-between items-center">
              {array.map((item, i) => {
                return (
                  <div className="items-center" key={i}>
                    <h1 className="footer-item">{item.title}</h1>
                    {subarr.map((arr) => {
                      return (
                        <h3 className="footer-subitem my-1">{arr.name}</h3>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-0 lg:px-40 h-auto">
            <div className="">
              <div className="footer-item">Subscribe</div>

              <div className=" search rounded-full my-1  ">
                <input
                  className="rounded-full w-60 h-8 py-4 px-4 text-gray-500 focus:outline-none"
                  id="search"
                  type="text"
                  placeholder="Search"
                />

                <button className="search-button rounded-full px-2.5 hover:bg-gray-400 focus:outline-none flex items-center ">
                  <a className=" search-button-text">Subscribe</a>
                </button>
              </div>
              <p className="footer-info py-1 w-96">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Commodi,
                consectetur.
              </p>
            </div>
            <div className=" py-1 mt-1">
              <h1 className="footer-item">Download App</h1>
              <div className="flex my-1 space-x-3 py-1 w-96">
                <div className="download-card rounded-full items-center">
                  <div className="text-white my-1.5 mx-3">
                    <img
                      src="/apple.png"
                      style={{maxWidth: "25px", maxHeight: "30px"}}
                    />
                  </div>
                  <div className="my-3">
                    <h5 className="download-card-title-1">Available on</h5>
                    <h4 className="download-card-title-2">Apple store</h4>
                  </div>
                </div>
                <div className="download-card rounded-full items-center">
                  <div className="text-white my-1.5 mx-3">
                    <img
                      src="/plyastore.png"
                      style={{maxWidth: "25px", maxHeight: "30px"}}
                    />
                  </div>
                  <div className="my-3 ">
                    <h5 className="download-card-title-1">Available on</h5>
                    <h4 className="download-card-title-2">Play store</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around border-gray-300 border-b py-4">
          <div className="w-1/2">
            <h2 className="method">Payment Methods</h2>
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
            <h2 className="method">Connect</h2>
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
        <div className=" border-b border-gray-300 py-2">
          <h2 className="method"> Popular Series</h2>
          <div className="flex justify-between items-center space-x-2">
            <h4 className="series">hello |</h4>
          </div>
        </div>
        <div className="py-5">
          <h4 className="copyright">
            2021 Copyright Powered by Supreme IT Solution
          </h4>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
