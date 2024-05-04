import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
User;
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Careers" },
];

function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarLinksWrapper}>
        <Image src={Logo} alt="Logo" />
        <div className={styles.navbarLinks}>
          {navLinks.map((item, index) => (
            <p className={styles.navbarListItems} key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.navbarImageContainer}>
        <p className={styles.navbarOpenAccount}>Open an account</p>
        <div className={styles.navbarImageWrapper}>
          <Image src={User} alt="user Profile" />
          <span className={styles.navbarSignIn}>Sign In</span>
        </div>
        <Image src={Menu} alt="Menu" className={styles.navbarMobileMenu} />
      </div>
    </nav>
  );
}

export default Navbar;
