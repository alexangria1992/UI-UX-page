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

        <div className={styles.pricingContentWrapperTwo}>
          <div>
            <h3 className={styles.pricingContentHeadingTwo}>Business</h3>
            <p className={styles.pricingContentTextTwo}>
              Perfect for testing the waters
            </p>
            <h2 className={styles.pricingPricePerMonthTwo}>
              0$ <span className={styles.pricingSpanTwo}>/mo</span>
            </h2>
            <ul className={styles.pricingListTwo}>
              <li className={styles.pricingListItem}>
                <span>
                  <Image
                    className={styles.pricingBusinessCardImage}
                    src={Check}
                    alt=""
                  />
                </span>
                Lorem ipsum dolor sit amet
              </li>
              <li className={styles.pricingListItem}>
                <span>
                  <Image src={Check} alt="" />
                </span>
                Sed do eiusmod tempor incididunt
              </li>
              <li className={styles.pricingListItem}>
                <span>
                  <Image src={Check} alt="" />
                </span>
                Consectetur adipiscing elit
              </li>
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
            </ul>
          </div>
          <button className={styles.pricingFreeTrialButton}>Get Started</button>
        </div>

        <div className={styles.pricingContentWrapper}>
          <div>
            <h3 className={styles.pricingContentHeading}>Enterprise</h3>
            <p className={styles.pricingContentText}>
              Perfect for big companies
            </p>
            <h2 className={styles.pricingPricePerMonth}>Custom</h2>
            <p className={styles.pricingEnterpriseCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.{" "}
            </p>
            <p className={styles.pricingEnterpriseCardTextTwo}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.
            </p>
          </div>
          <button className={styles.pricingFreeTrialButton}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
