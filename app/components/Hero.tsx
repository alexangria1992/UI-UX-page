import styles from './Hero.module.css';
import BlurArrow from '../../public/assets/blue-button.svg';
import Gradient from '../../public/assets/Gradient.svg';
import HeroImage from '../../public/assets/Image.svg';
import Google from '../../public/assets/Google.svg';
import Slack from '../../public/assets/Slack.svg';
import TrustPilot from '../../public/assets/Trustpilot.svg';
import CNN from '../../public/assets/CNN.svg';
import Clutch from '../../public/assets/Clutch.svg';
import Image from 'next/image';

function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroHeadingWrapper}>
        <h1 className={styles.heroHeading}>
          Start monitoring your website like a pro
        </h1>
        <p className={styles.heroDescription}>
          Get a bird&apos;s eye view with our customizable dashboard. Stay on
          top of things! Revamp your work process with our game-changing
          feature. Boost productivity and efficiency!
        </p>
        <div className={styles.heroButtonContainer}>
          <button className={styles.heroTryForFreeButton}>Try for free</button>
          <button className={styles.heroViewPricingButton}>
            View pricing{' '}
            <span>
              <Image src={BlurArrow} alt='arrow' />
            </span>
          </button>
        </div>
      </div>

      <div className={styles.heroImageContainer}>
        <Image
          src={Gradient}
          className={styles.heroGradientImage}
          alt='gradient image'
        />
        <div className={styles.heroImageWrapper}>
          <Image
            src={HeroImage}
            alt='hero-image'
            className={styles.heroImage}
          />

          <div className={styles.heroCompaniesContainer}>
            <p className={styles.heroCompaniesText}>
              Trusted by these companies
            </p>
            <div className={styles.heroCompaniesGrid}>
              <Image src={Google} alt='' />
              <Image src={Slack} alt='' />
              <Image src={TrustPilot} alt='' />
              <Image src={CNN} alt='' />
              <Image src={Clutch} alt='' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
