import React from "react";
import Navbar from "./component/Navbar";
import styles from "./page.module.css"; // Import your custom styles
import Logincomp from "./component/Logincomp";
import Carouselcomp from "./component/CarouselComp";
export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
      <Carouselcomp />
      <Logincomp />
      </div>
    </div>
  );
}
