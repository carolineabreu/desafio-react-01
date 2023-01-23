import rocket from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  function teste() {
    console.log("oi");
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={rocket} alt="rocket" />
          <h1 className={styles.title}>
            <span className={styles.titleBlue}>to</span>
            <span className={styles.titlePurple}>do</span>
          </h1>
        </div>
      </header>
    </>
  );
}
