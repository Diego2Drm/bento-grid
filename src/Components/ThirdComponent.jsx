import React from "react";
import style from "../index.module.css";
import illustrationConsistentSchedule from "../assets/images/illustration-consistent-schedule.webp";
import { motion } from "framer-motion";

function ThirdComponent(props) {
  return (
    <motion.section transition={{duration: 1, ease: "easeOut", delay: 0.7}} variants={props.variants}  className={style.thirdContainer}>
      <h2>Maintain a consistent posting schedule.</h2>
      <figure>
        <img
          src={illustrationConsistentSchedule}
          alt="illustrationConsistentSchedule"
        />
      </figure>
    </motion.section>
  );
}

export { ThirdComponent };
