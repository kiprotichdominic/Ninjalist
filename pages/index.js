import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        nihil, labore sed non ea nostrum deleniti numquam tempora quae
        voluptatibus aliquid praesentium molestiae quasi reiciendis est optio.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        nihil, labore sed non ea nostrum deleniti numquam tempora quae
        voluptatibus aliquid praesentium molestiae quasi reiciendis est optio.
      </p>
      <Link href="/ninjas" className={styles.btn}>See Ninja Listing</Link>
    </>
  );
}
