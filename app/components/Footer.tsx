import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
import Facebook from "../../public/assets/Facebook.svg";
import Twitter from "../../public/assets/X.svg";
import Feed from "../../public/assets/Feed.svg";

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLogoWrapper}>
        <Image src={Logo} alt="" />
        <p className={styles.footerLogo}>Alexandre Angrignon</p>
      </div>
      <ul className={styles.footerList}>
        <li>Features</li>
        <li>Pricing</li>
        <li>Enterprise</li>
        <li>Careers</li>
      </ul>
      <p className={styles.footerCopyright}>
        © Copyright 2024. Alexandre Angrignon. All rights reserved.
      </p>
      <div className={styles.footerSocials}>
        <Image src={Facebook} alt="" />
        <Image src={Twitter} alt="" />
        <Image src={Feed} alt="" />
      </div>
    </div>
  );
}

export default Footer;
