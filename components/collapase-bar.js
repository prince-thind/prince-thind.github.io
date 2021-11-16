import { useState } from "react";
import styles from "../styles/Collapse-bar.module.scss";

function CollapseBar(props) {
  const [collpased, setCollapased] = useState(true);

  return (
    <>
      <h2
        className={styles["collapse-bar"]}
        onClick={() => {
          setCollapased((collpased) => !collpased);
        }}
      >
        {collpased ? "+ " : "- "}
        {props.topic}
      </h2>
      <div className={collpased?styles["hidden"]:""}> {props.children}</div>
     
    </>
  );
}

export default CollapseBar;
