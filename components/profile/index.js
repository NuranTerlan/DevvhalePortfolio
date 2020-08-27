import React from "react";
import cn from "classnames";
import Bound from "../bound";

import styles from "./profile.module.css";

const ProfileBox = ({
  fullname = "Nuran Terlan",
  profession = "Full Stack Web Developer",
  position = "Freelancer on Fiverr",
  achivement = "Creator and Founder of DEVVHALE",
  source = "/static/nuranterlan.jpeg",
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.box, className)} {...props}>
      <div className={styles.image}>
        <img src={source} alt={fullname} />
      </div>
      <Bound className={styles.bound} />
      <div>
        <h1>{fullname}</h1>
        <h1>{profession}</h1>
        <h1>{position}</h1>
        <h1>{achivement}</h1>
      </div>
    </div>
  );
};

export default ProfileBox;
