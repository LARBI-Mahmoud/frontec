import React from "react";
import Navbar from "@/components/Navbar";
import styles from "@/page.module.css"; // Import your custom styles
import Logincomp from "@/components/Logincomp";
import CarouselComp from "@/components/CarouselComp";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
      <CarouselComp />
      <Logincomp />
      </div>
    </div>
  );
}
