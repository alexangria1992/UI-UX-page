import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import styles from "../app/components/Features.module.css";
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.featuresSection}>
        <Features />
      </div>
    </>
  );
}
