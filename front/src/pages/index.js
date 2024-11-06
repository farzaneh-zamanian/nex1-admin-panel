import Link from "next/link";
import styles from "../styles/Home.module.scss"
import Hero from "../../components/modules/Hero/Hero";



export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.homePageContainer}></section>

    </>

  );
}
