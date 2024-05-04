import React from "react";
import styles from "./Cta.module.css";
import Arrow from "../../public/assets/arrow.png";
import Image from "next/image";
function Cta() {
  return (
    <div className={styles.CtaContainer}>
      <h1 className={styles.ctaHeading}>Monitor your website like a pro</h1>
      <p className={styles.ctaSubHeading}>
        Join over 800+ happy site owners boosting productivity and efficiency!
      </p>

      <div className={styles.ctaButtonWrapper}>
        <button className={styles.ctaButton}>Try for free</button>
        <button className={styles.ctaContactButton}>
          Contact Sales
          <span>
            <Image src={Arrow} alt="" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default Cta;
