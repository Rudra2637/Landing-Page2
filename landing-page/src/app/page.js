import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Selling from "@/components/TopSelling/Selling";
import Review from "@/components/customerReview/Review";
import Header from "@/components/header/Header";
import Best from "@/components/Best/Best";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
          <Hero />
          <Selling />
          <Review />
          <Best />
          <Footer />
      </main>
    </div>
  );
}
