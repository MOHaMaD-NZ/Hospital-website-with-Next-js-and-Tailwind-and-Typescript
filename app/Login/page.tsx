import React from "react";
import { FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <div style={{ direction: "rtl" }}>
        <div className=" bg-gradient-to-t from-red-300 to-[#81A8E0] min-w-[100%] h-[30rem] mt-[5rem] mx-auto rounded text-white">
          <div className="flex flex-col space-y-5">
            <div className="text-white flex justify-center translate-y-5 text-[4rem] pb-[3rem]">
              <FaUser />{" "}
            </div>

            <form action="" className="flex flex-col">
              <label htmlFor="user">نام کاربری:</label>
              <input
                className="border border-red-700 outline-0 min-w-full text-[#4987dd] cursor-pointer"
                id="user"
                type="text"
              />
              <label htmlFor="pass">رمز عبور:</label>
              <input
                className="border border-red-700 outline-0 min-w-full text-[#4987dd] cursor-pointer"
                id="pass"
                type="password"
                name=""
              />
              <div className="flex justify-between cursor-pointer">
                <span>فراموشی رمز؟</span>
                <div className="flex ">
                  <label htmlFor="check">مرا بخاطر بسپار</label>
                  <input type="checkbox" id="check" />
                </div>
              </div>
            </form>
            <button className="flex justify-center items-center bg-white w-[5rem] h-[2rem] pb-2 rounded text-red-300 text-[1.5rem] mx-auto">
              ورود
            </button>
            <button className="text-right">ساخت حساب کاربری جدید</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
