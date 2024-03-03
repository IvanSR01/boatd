"use client";
import React, { FC } from "react";
import styles from "./HomeCard.module.scss";
import img from "@/assets/img/Rectangle 28.png";
import imgT from "@/assets/img/Rectangle 2821.png";
import imgD from "@/assets/img/Rectangle 2231.png";
import clsx from "clsx";
import icon from "@/assets/img/Tag.png";
import iconTwo from "@/assets/img/Tag(1).png";
import favIcon from "@/assets/img/heart.png";
import iconThree from "@/assets/star.svg";
import { TypePropsHomeCard } from "./HomeCard.type";
import CarouselDefault from "@/shared/ui/carousel/Carousel";
const HomeCard: FC<TypePropsHomeCard> = ({ status }) => {
  return (
    <div className={styles.card}>
      <div className={clsx(styles.upper, "")}>
        {status === "promo" ? (
          <img src={iconTwo.src} alt="" />
        ) : (
          <img src={icon.src} alt="" />
        )}
      </div>
      <div className={styles.img}>
        <CarouselDefault imgs={[img.src, imgT.src, imgD.src]} />
      </div>
      <div className={styles.border}>
        <div className={styles.fav}>
          <img src={favIcon.src} alt="" />
        </div>
        <div className={styles.row}>
          <div>
            <h3>Porshe Panamera</h3>
            <div className={styles.star}>
              <img src={iconThree.src} alt="" />
              <p>4.9 (50)</p>
            </div>
          </div>
          <p className={styles.prive}>
            <sup>от </sup>
            <b>1400</b> ₽/час
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
