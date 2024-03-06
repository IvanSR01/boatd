import { FC } from "react";
import logo from "@/assets/img/logo.svg";
import profile from "@/assets/img/profile-circle.svg";
import favorite from "@/assets/img/heart.svg";
import Image from "next/image";
import Wrapper from "../wrapper/Wrapper";
import styles from "./Header.module.scss";

const Header: FC = () => {
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
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
