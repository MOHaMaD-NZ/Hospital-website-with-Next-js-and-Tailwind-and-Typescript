import React from "react";
import Image from "next/image";
import s7 from "@/public/images/s7.jpg";
const About = () => {
  return (
    <div className="py-5" id="about">
      <div>
        <div className="lg:gap-y-5 items-center lg:grid-cols-2 grid-cols-1 grid">
          <div>
            <Image
              src={s7}
              alt="about"
              width={500}
              height={400}
              className=" h-[400px] rounded mx-auto"
            />
          </div>
          <div className="text-center lg:text-end">
            <div className="font-medium pt-3 pb-5 lg:pr-10">
              <h2 className="m-4 bg-[#81A8E0]">درباره ما</h2>
            </div>
            <div className="opacity-70 text-[15px] px-10">
              ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
