import Head from "next/head";
import CollapseBar from "../components/collapase-bar";
import styles from '../styles/Education.module.scss'

export default function Education() {
    return (
      <div><Head>
      <title>Education</title>
    </Head>
       <section className={styles["education"]}>
         <h2>Education</h2>
         <ul className={styles["education-list"]}>
         <li className={styles["education-list-item"]}>
                <div className={styles["education-institute"]}>
                    <div className={styles["education-main"]}>
                        <div className={styles["education-title"]}> B.Tech in CSE (Hons.)</div>

                        <div className={styles["education-institute-name"]}>(Lovely Professional University)</div>
                    </div>
                    <div className={styles["education-institute-duration"]}>2019-2023</div>
                </div>
                <div className={styles["education-institute-grades"]}>CGPA: ~9</div>
                <ul className={styles["education-institute-details"]}>
                    <li className={styles["education-institure-points"]}>Web Development as Egnineering Minor</li>
                    <li className={styles["education-institure-points"]}>Digital Marketing as Open Minor</li>
                </ul>
            </li>
         </ul>
       </section>
      </div>
    );
  }
  