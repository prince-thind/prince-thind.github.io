import { useState } from "react";
import styles from "../styles/Collapse-bar.module.scss";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CollapseBar(props) {
  const [collpased, setCollapased] = useState(true);

  const collapsedIcon = <FontAwesomeIcon icon={faMinusSquare} />;
  const expandIcon = <FontAwesomeIcon icon={faPlusSquare} />;

  const customClasses = [styles["collapse-bar"]];
  
  if (props.type === "big") {
    customClasses.push(styles["big"]);
  } else if (props.type == "children") {
    customClasses.push(styles["children"]);
  }

  return (
    <>
      <h2
        className={customClasses.join(" ")}
        onClick={() => {
          setCollapased((collpased) => !collpased);
        }}
      >
        {collpased ? expandIcon : collapsedIcon} {props.topic}
      </h2>
      <div className={collpased ? styles["hidden"] : ""}> {props.children}</div>
    </>
  );
}

export default CollapseBar;
