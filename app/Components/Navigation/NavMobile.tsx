import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { MdOutlineArticle } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import Link from "next/link";

const NavMobile = () => {
  return (
    <div>
      <div>
        <ul className="lg:hidden fixed w-full z-30 bottom-0 flex justify-around items-center p-2 rounded-lg bg-slate-50 shadow-lg  text-red-400 md:justify-center md:space-x-20">
          <li>
            <Link href="#contact">
              <FaPhone className="w-[40px] h-[40px]" />
            </Link>
          </li>

          <li className="list">
            <Link href="#about">
              <HiOutlineUserGroup className="w-[40px] h-[40px]" />
            </Link>
          </li>

          <li className="list">
            <Link href="#page">
              <MdOutlineArticle className="w-[40px] h-[40px]" />
            </Link>
          </li>

          <li className="list">
            <Link href="#teach">
              <GiTeacher className="w-[40px] h-[40px]" />
            </Link>
          </li>

          <li className="list">
            <Link href="#doctor">
              <FaUserDoctor className="w-[40px] h-[40px]" />
            </Link>
          </li>

          <li className="list">
            <Link href="#home #scroll">
              <IoHomeOutline className="w-[40px] h-[40px]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMobile;
