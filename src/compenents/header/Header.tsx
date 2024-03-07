"use client";
import { FC } from "react";
import logo from "@/assets/img/logo.svg";
import profile from "@/assets/img/profile-circle.svg";
import favorite from "@/assets/img/heart.svg";
import Image from "next/image";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Header.module.scss";

import { useAppDispatch, useAppSelector } from "@/hook/useActions";
import { setIsOpen } from "@/store/slice/modal.slice";
import { getTokens } from "@/$api/tokens.api";
const Header: FC = () => {
  // const { user } = useAppSelector((state) => state.user);
  const { refreshToken } = getTokens();
  const dispatch = useAppDispatch();
  return (
    <header className={styles.header}>
      <Wrapper>
        <div className={styles.container}>
          <a href="/">
            <img className={styles.logo} src={logo.src} alt="" />
          </a>

          <div className={styles.links}>
            <a href="/">
              <Image src={favorite} alt="" />
            </a>
            <a href="/">
              <Image src={profile} alt="" />
            </a>
          </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image src={logo} alt="" />
        </div>
        <div className={styles.links}>
          <Image src={favorite} alt="" width={40} height={30} />
          {refreshToken ? (
            <Image src={profile} alt="" width={40} height={30} />
          ) : (
            <Image
              src={profile}
              alt=""
              width={40}
              height={30}
              onClick={() => dispatch(setIsOpen(true))}
            />
          )}
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
