import styles from "./Features.module.css";
import Feature1 from "../../public/assets/feature-1.svg";
import Feature2 from "../../public/assets/feature-2.svg";
import Feature3 from "../../public/assets/feature-3.svg";
import Check from "../../public/assets/check.svg";
import bluebutton from "../../public/assets/blue-button.svg";
import Image from "next/image";

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.featuresWrapper}>
        <div>
          <h3 className={styles.featuresHeading}>Sales Monitoring</h3>
          <h1 className={styles.featuresSubHeading}>
            Simplify your sales monitoring
          </h1>
          <Image
            src={Feature1}
            alt="feature img 1"
            className={styles.featuresImageOne}
          />
          <p className={styles.featuresText}>
            Stay on top of things and revamp your work process with our
            game-changing feature. Get a birds eye view with our customizable
            dashboard.
          </p>
          <ul className={styles.featuresChecklist}>
            <li className={styles.featuresCheckListItem}>
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Lorem ipsum dolor sit amet
            </li>
            <li className={styles.featuresCheckListItem}>
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Consectetur adipiscing elit{" "}
            </li>
            <li className={styles.featuresCheckListItem}>
              <span>
                <Image src={Check} alt="checkmark" />
              </span>
              Sed do eiusmod tempor incididunt ut labore{" "}
            </li>
          </ul>
          <p className={styles.featuresLearnMore}>
            Learn More{" "}
            <span>
              <Image src={bluebutton} alt="bluebutton" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
