import styles from "../styles/Collapse-bar.module.scss";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

function CollapseBar({ type, topic, children }) {
  const [collpased, setCollapased] = useState(true);

  const collapsedIcon = <FontAwesomeIcon icon={faAngleDown} />;
  const expandIcon = <FontAwesomeIcon icon={faAngleUp} />;

  let customStyle = styles["collapse-bar"];
  if (type == "child") {
    customStyle += ` ${styles["child-collapse-bar"]}`;
  }

  return (
    <div className={styles["collapse-container"]}>
      <h2
        className={customStyle}
        onClick={() => {
          setCollapased((collpased) => !collpased);
        }}
      >
        {collpased ? expandIcon : collapsedIcon} {topic}
      </h2>
      <ChildrenElements collpased={collpased} elements={children} />
    </div>
  );

  function ChildrenElements({ collpased, elements }) {
    if (collpased) return null;
    return <div> {elements}</div>;
  }
}

export default CollapseBar;
