import React from "react";
import styles from "./Pricing.module.css";
import Check from "../../public/assets/check.svg";
import Image from "next/image";

function Pricing() {
  return (
    <div className={styles.pricingContainer}>
      <h1 className={styles.pricingHeading}>Flexible plans for you</h1>
      <p className={styles.pricingText}>No hidden fees!</p>

      <div className={styles.pricingWrapper}>
        <div className={styles.pricingContentWrapper}>
          <div>
            <h3 className={styles.pricingContentHeading}>Free Trial</h3>
            <p className={styles.pricingContentText}>
              Perfect for testing the waters
            </p>
            <h2 className={styles.pricingPricePerMonth}>
              0$ <span className={styles.pricingSpan}>/mo</span>
            </h2>
            <ul className={styles.pricingList}>
              <li className={styles.pricingListItem}>
                <span>
                  <Image src={Check} alt="" />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className={styles.pricingListItem}>
                <span>
                  <Image src={Check} alt="" />
                </span>
                Sed do eiusmod tempor incididunt{" "}
              </li>
              <li className={styles.pricingListItem}>
                <span>
                  <Image src={Check} alt="" />
                </span>
                Consectetur adipiscing elit
              </li>
            </ul>
          </div>
          <button className={styles.pricingFreeTrialButton}>Start Trial</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
