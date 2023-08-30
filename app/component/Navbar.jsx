import React from "react";
import Link from "next/link";
import styles from "../css/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link legacyBehavior href="/">
          <a>YourLogo</a>
        </Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link legacyBehavior href="/products">
            <a>Products</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/signup">
            <a>sign-up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
