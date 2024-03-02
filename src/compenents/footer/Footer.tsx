import { FC } from "react";
import styles from "./Footer.module.scss";
import {
  footerLinksBuyer,
  footerLinksPart,
  footerLinksSec,
} from "@/shared/var/footer-links";
import logo from "@/assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import vk from "@/assets/logos/Vector.svg";
import tg from "@/assets/logos/ic_sharp-telegram.svg";
import imgTg from '@/assets/logos/logos_telegram.png'
import wat from '@/assets/logos/logos_whatsapp-icon.png'
import mail from '@/assets/logos/mdi_email-box.png'
const Footer: FC = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.links}>
          <h4>Разделы</h4>
          <div className={styles.items}>
            {footerLinksSec.map((item, i) => (
              <Link href={item.link} key={i}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          <h4>Покупателям</h4>
          <div className={styles.items}>
            {footerLinksBuyer.map((item, i) => (
              <Link href={item.link} key={i}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={styles.links}>
          <h4>Партнерам</h4>
          <div className={styles.items}>
            {footerLinksPart.map((item, i) => (
              <Link href={item.link} key={i}>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <div className={styles.links}>
            <h4>Соц сети</h4>
            <div className={styles.items}>
              <img src={vk.src} alt="" />
              <img src={tg.src} alt="" />
            </div>
          </div>
          <div className={styles.links}>
            <h4>Связаться с нами</h4>
            <div className={styles.items}>
              <img src={imgTg.src} alt="" />
              <img src={wat.src} alt="" />
							<img src={mail.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.row__two}>
        <div className={styles.logo}>
          <Image src={logo} alt="" width={40} height={100} />
          <h3>
            <span>на</span>лодку
          </h3>
        </div>
        <p>© 2024 Налодку</p>
      </div>
    </footer>
  );
};

export default Footer;
