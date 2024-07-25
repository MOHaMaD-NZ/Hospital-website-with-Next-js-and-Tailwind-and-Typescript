"use client";

import React from "react";
import Image from "next/image";
import { AppointContext } from "@/app/Context/AppointContext";
import { useContext } from "react";
import Data from "@/public/Data/Data";
import Link from "next/link";
const Appointment = () => {
  const { cartItems } = useContext(AppointContext);

  return (
    <div>
      <div className="lg:mx-[5rem] lg:mt-[1rem] shadow-lg">
        <div className=" w-[2rem] h-[2rem] rounded-full bg-white z-10 absolute left-40 top-5" />
        <div className="bg-white opacity-80 min-h-screen pt-[3rem] ">
          <Link href="/">
            <button className="mt-[-4rem] p-2 bg-red-300 text-white z-10">
              Home
            </button>
          </Link>
          <h1 className="text-center bg-red-300 mt-1 p-2 text-white">
            نوبت گیری
          </h1>
          {Data.map((e) => {
            if (cartItems[e.id] > 0) {
              return (
                <div>
                  <div className="grid grid-cols-4 text-zinc-800 font-bold border  border-white text-center   ">
                    <span>تصویر</span>
                    <span>تاریخ</span>
                    <span>زمان</span>
                    <span>توضیحات</span>
                  </div>
                  <div className="shadow-md">
                    <div className="border flex justify-around p-2 ">
                      <div>
                        <Image
                          src={e.image}
                          alt="doctor"
                          width={70}
                          height={70}
                          className="h-[70px] rounded-full "
                        />
                      </div>
                      <input type="date" />
                      <input type="time" />
                      <div className="text-white text-end ">
                        <p className="pb-2">{e.name}</p>
                        <p>{e.work}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
export default Appointment;
