import styles from "../styles/Collapse-bar.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

function CollapseBar({type,children, topic}) {
  const [collpased, setCollapased] = useState(true);

  const collapsedIcon = <FontAwesomeIcon icon={faMinusSquare} />;
  const expandIcon = <FontAwesomeIcon icon={faPlusSquare} />;

  let customStyle = styles["collapse-bar"];
  if(type=="child"){
    customStyle+=` ${styles["child-collapse-bar"]}`;
  }

  return (
    <>
      <h2
        className={customStyle}
        onClick={() => {
          setCollapased((collpased) => !collpased);
        }}
      >
        {collpased ? expandIcon : collapsedIcon} {topic}
      </h2>
      <div className={collpased ? styles["hidden"] : ""}> {children}</div>
    </>
  );
}

export default CollapseBar;
