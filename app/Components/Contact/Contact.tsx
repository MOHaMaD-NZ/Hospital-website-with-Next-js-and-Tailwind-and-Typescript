"use client";

import React from "react";
import { FaFacebook, FaStaffSnake } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const Contact = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="contact">
      <div className="contact pt-[4rem] pb-[3rem] bg-gray-900">
        <div
          className="w-[80%] pb-[2rem] border-b-[2px] border-b-gray-300 border-opacity-50 mx-auto grid
            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem] items-start"
        >
          {/* 1st part */}
          <div className="">
            {/* logo */}
            <div className="flex items-center text-white space-x-2">
              <FaStaffSnake className="w-[2rem] h-[2rem] text-red-400" />
              <h1 className="text-[20px] sm:tet-[30px] font-semibold">
                بیمارستان
              </h1>
            </div>
            <p className="text-white text-opacity-65 mt-[.4rem]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است
            </p>
            <p className="mt-[1rem] text-white">HOSPITAL@gmail.com</p>
            <p className="text-red-300 text-[20px] font-bold ">09120043676</p>
          </div>

          {/* 2 part */}
          <div className="">
            <h1 className="text-[25px] font-semibold mb-[2rem] text-white">
              لینک ها
            </h1>
            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              صفحه اصلی
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              درباره ما
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              پزشکان
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              آموزش
            </p>

            <p
              className="mt-[.7rem] text-white opacity-60 hover:text-yellow-300 transition-all
                    duration-200 cursor-pointer w-fit "
            >
              مقالات
            </p>
          </div>
          <div className="">
            {/* 3 part */}
            <h1 className="text-[25px] font-semibold mb-[2rem] text-white">
              ساعات کار
            </h1>
            <p className="text-white tet-[18px]">از 7:00 الی10:00</p>

            {/* socials */}
            <div className="mt-[2rem] ">
              <h5 className="font-medium mt-1 text-white">شبکه های اجتماعی</h5>
              <div className="flex">
                <ul className="flex gap-5">
                  <li className="my-3">
                    <a
                      href=""
                      className="decoration-0 text-white hover:text-yellow-300"
                    >
                      <FaFacebook />
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href=""
                      className="text-decoration-0 text-white hover:text-yellow-300"
                    >
                      <IoLogoTwitter />
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href=""
                      className="text-decoration-0 text-white hover:text-yellow-300"
                    >
                      <FaInstagramSquare />
                    </a>
                  </li>

                  <li className="my-3">
                    <a
                      href=""
                      className="text-decoration-none text-white hover:text-yellow-300"
                    >
                      <FaTelegram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={top}
          className="block lg:hidden relative bottom-[4rem]  p-3  text-white bg-red-400"
        >
          <FaChevronUp />
        </div>
      </div>

      <div
        id="scroller"
        onClick={top}
        className="hidden lg:block fixed top-[25rem] cursor-pointer animate-bounce
         bg-red-500 rounded-full ml-[.3rem] p-3  text-white"
      >
        <FaChevronUp />
      </div>
    </div>
  );
};

export default Contact;
