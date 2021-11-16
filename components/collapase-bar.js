import { useState } from "react";
import styles from "../styles/Collapse-bar.module.scss";


function CollapseBar(props) {
  const [collpased, setCollapased] = useState(true);

  const heading = (
    <h2
    className={styles["collapse-bar"]}
      onClick={() => {
        setCollapased((collpased) => !collpased);
      }}
    >
        {collpased?"+":"-"}
        {"  "}
      {props.topic}
    </h2>
  );
  if (collpased) {
    return heading;
  }
  return (
    <>
      {heading}
      {props.children}
    </>
  );
}

export default CollapseBar;
