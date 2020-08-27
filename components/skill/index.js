import React from "react";
import cn from "classnames";
import { Star } from "../icons/index";

import styles from "./skill.module.css";

const Skill = ({ children, className, ...props }) => {
  return (
    <div className={cn(styles.item, className)} {...props}>
      <Star />
      <h1>{children}</h1>
    </div>
  );
};

export default Skill;
