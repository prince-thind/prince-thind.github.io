import Link from "next/link";
import styles from "../styles/Header.module.scss";

function CustomLink({ linkInfo, activeTab, setActiveTab }) {
  return (
    <li>
      <Link href={linkInfo.link}>
        <a
          className={
            styles["nav-item"] +
            " " +
            (activeTab == linkInfo.name ? styles["active"] : "")
          }
          onClick={handleClick}
        >
          {linkInfo.name}{" "}
        </a>
      </Link>
    </li>
  );

  function handleClick() {
    setActiveTab(linkInfo.name);
  }
}

export default CustomLink;
