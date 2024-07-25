"use client";

import React from "react";
import { BsPrescription } from "react-icons/bs";
import { LuHeartPulse } from "react-icons/lu";
import Image from "next/image";
import { AppointContext } from "@/app/Context/AppointContext";
import { useContext } from "react";
import Data from "@/public/Data/Data";

const DoctorCart = () => {
  const { addToCart } = useContext(AppointContext);

  return (
    <div id="doctor" className="mt-[7rem]">
      <h1 className="text-[30px] font-medium bg-[#81A8E0] text-center mx-auto mb-2">
        پزشکان
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 lg:ml-[4rem]">
        {Data.map((index, i) => {
          return (
            <div key={i} id={index.id} className="bg-[#81A8E0] rounded">
              <div>
                <Image
                  src={index.image}
                  alt="doctor"
                  width={420}
                  height={200}
                  className="sm:pl-[2rem] lg:space-x-10 h-[200px] rounded object-fill hover:scale-[1.1] duration-300 cursor-pointer"
                />
              </div>
              <div className="flex justify-between pr-[1.3rem]">
                <div className="flex felx-col pt-[2rem]">
                  <button className="flex flex-col justify-center items-center">
                    <LuHeartPulse className="w-[2.5rem] h-[2.5rem] text-red-300 hover:bg-red-600  rounded-full" />
                    <span className="opacity-80 text-white">مورد رضایت</span>
                  </button>
                  <button className=" flex flex-col justify-center items-center ">
                    <BsPrescription
                      onClick={() => {
                        addToCart(index.id);
                      }}
                      className="w-[2.5rem] h-[2.5rem] text-red-300 "
                    />
                    <span className="opacity-80 text-white">نوبت</span>
                  </button>
                </div>
                <div className="lg:pl-[3rem] pt-[2rem] lg:space-y-1 text-end text-white">
                  <p>{index.name}</p>
                  <p>{index.work}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoctorCart;
