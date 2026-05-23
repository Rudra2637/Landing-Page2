import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
          <Hero />
      </main>
    </div>
  );
}
