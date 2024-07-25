import React from "react";
import Image from "next/image";
import v1 from "@/public/images/x2.jpg";
import v2 from "@/public/images/x3.jpg";
import v3 from "@/public/images/x4.jpg";

const Pages = () => {
  return (
    <div>
      <section id="page" className="py-5 lg:pl-[2rem]">
        <div>
          <div className="font-bold text-center py-5">
            <h2 className=" bg-[#81A8E0]">جدیدترین مقالات</h2>
          </div>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-3">
            <div className="border-0 bg-transparent my-3">
              <Image
                src={v1}
                className="rounded mx-auto h-[250px] py-2"
                alt="article"
                width={400}
                height={300}
              />
              <div className="px-0">
                <h4 className="font-medium text-center py-2 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </h4>
                <p className="opacity-70 text-[15px] m-3 text-end py-2 pr-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد،
                </p>
                <p className=" opacity-70">
                  <small className="pl-[1rem] bg-[#81A8E0]">
                    {" "}
                    <span className="font-bold">نویسنده:</span>لورم{" "}
                  </small>
                </p>
              </div>
            </div>

            <div className="bg-transparent my-3">
              <Image
                src={v2}
                className="Image-card rounded mx-auto h-[250px] py-2"
                alt="article"
                width={400}
                height={300}
              />
              <div className="px-0">
                <h4 className="text-center font-medium py-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </h4>
                <p className="opacity-70 text-[15px] m-3 text-end py-2 pr-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد،
                </p>
                <p>
                  <small className="pl-[1rem] bg-[#81A8E0]">
                    {" "}
                    <span className="fw-bold">نویسنده:</span>لورم{" "}
                  </small>
                </p>
              </div>
            </div>

            <div className="bg-transparent my-3">
              <Image
                src={v3}
                className="Image-card rounded-md mx-auto h-[250px] py-2"
                alt="article"
                width={400}
                height={300}
              />
              <div className="px-0">
                <h4 className="text-center font-medium py-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                </h4>
                <p className="opacity-70 text-[15px] m-3 text-end py-2 pr-3">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد،
                </p>
                <p className="opacity-70 text-[15px]">
                  <small className="pl-[1rem] bg-[#81A8E0]">
                    {" "}
                    <span className="font-bold">نویسنده:</span>لورم{" "}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pages;
