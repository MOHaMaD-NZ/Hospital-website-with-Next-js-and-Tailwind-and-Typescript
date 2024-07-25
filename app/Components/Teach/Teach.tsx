import React from "react";
import Image from "next/image";
import s1 from "@/public/images/s1.jpg";

const Teach = () => {
  return (
    <div id="teach">
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-[5rem] mb-[3rem]">
        <div className="lg:p-[4rem] mx-auto">
          <Image src={s1} alt="doctor" />
        </div>

        <div className="text-center pt-[5rem]">
          <h1 className="text-[30px] font-medium bg-[#81A8E0] ">آموزش</h1>
          <p className="text-end text-[15px] pr-[2rem] pt-[2rem] opacity-70 ">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teach;
