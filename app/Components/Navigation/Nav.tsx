"use client";

import React from "react";
import { FaStaffSnake } from "react-icons/fa6";
import { BsPrescription } from "react-icons/bs";
import Link from "next/link";
import { AppointContext } from "@/app/Context/AppointContext";
import { useContext } from "react";
import { HiOutlineLogin } from "react-icons/hi";
interface Context {
  count: number;
  number: number;
}

const Nav = () => {
  const { count }: Context = useContext(AppointContext);

  return (
    <div>
      <div className="z-10 fixed w-full  mx-auto flex items-center justify-between bg-white bg-opacity-90 shadow-md py-[.9rem]">
        <div className="flex justify-center items-center space-x-2 ml-5">
          <Link href="/appointment">
            <button className="relative flex flex-col justify-center items-center">
              <BsPrescription className="w-[2.6rem] h-[2.6rem] text-red-400" />
              <span className=" absolute -translate-y-5 translate-x-4 bg-red-300 text-white text-center w-5 h-5  rounded-full">
                {count}
              </span>
            </button>
          </Link>

          <Link href="/Login">
            <button className="relative flex flex-col justify-center items-center">
              <HiOutlineLogin className="w-[2.6rem] h-[2.6rem] text-red-400" />
            </button>
          </Link>
        </div>

        <div>
          <ul className="hidden lg:flex justify-center items-center space-x-10  text-gray-500 ">
            <li className="list hover:text-red-300">
              <Link href="#contact">راه ارتباطی</Link>
            </li>

            <li className="list hover:text-red-300">
              <Link href="#about">درباره ما</Link>
            </li>

            <li className=" hover:text-red-300">
              <Link href="#page">مقالات</Link>
            </li>

            <li className="list hover:text-red-300">
              <Link href="#teach">آموزش</Link>
            </li>

            <li className="list hover:text-red-300">
              <Link href="#doctor">پزشکان</Link>
            </li>

            <li className="list hover:text-red-300">
              <Link href="#home #scroll">صفحه اصلی</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center mr-5 ">
          <h1 className="text-black font-bold text-[25px]">بیمارستان</h1>
          <FaStaffSnake className="w-[2rem] h-[2rem] text-red-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
