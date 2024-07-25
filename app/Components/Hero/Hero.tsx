"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "@/public/images/s5.jpg";
import s2 from "@/public/images/s6.jpg";
import s3 from "@/public/images/s3.jpg";
import s4 from "@/public/images/s8.jpg";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = () => {
  return (
    <div id="home" className="pt-[5rem]">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        draggable={false}
        additionalTransfrom={0}
        autoPlaySpeed={4000}
        showDots={true}
        infinite
        centerMode={false}
        itemClass="item"
        arrows={true}
        customTransition="all .5"
        transitionDuration={500}
      >
        <div>
          <Image
            src={s1}
            alt="slide"
            className="w-full h-[400px] lg:clip_path"
          />
        </div>
        <div>
          <Image
            src={s2}
            alt="slide"
            className="w-full h-[400px] lg:clip_path"
          />
        </div>
        <div>
          <Image
            src={s3}
            alt="slide"
            className="w-full h-[400px] lg:clip_path"
          />
        </div>
        <div>
          <Image
            src={s4}
            alt="slide"
            className="w-full h-[400px] lg:clip_path"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
