/* eslint-disable @next/next/no-img-element */
"use client";
import { Carousel } from "@material-tailwind/react";
import { FC, Fragment } from "react";
import { TypePropsCarousel } from "./Carousel.type";

const CarouselDefault: FC<TypePropsCarousel> = ({ imgs }) => {
  return (
    <Carousel className="rounded-t-xl" placeholder={undefined}>
      {imgs.map((item, i) => (
        <Fragment key={i}>
          <img
            src={item}
            alt="image 1"
            className="h-full w-full object-cover"
          />
        </Fragment>
      ))}
    </Carousel>
  );
};

export default CarouselDefault;
