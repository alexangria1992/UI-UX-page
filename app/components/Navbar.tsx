import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../public/assets/Logo.svg";
import Image from "next/image";
User;
import User from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";
function Navbar() {
  return (
    <nav className={styles.navbarContainer}>
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div className={styles.navbarImageContainer}>
        <div>
          <Image src={User} alt="user Profile" />
        </div>
        <Image src={Menu} alt="Menu" />
      </div>
    </nav>
  );
}

export default Navbar;
