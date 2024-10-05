import React from "react";
import style from "../index.module.css";
import illustrationGrowFollowers from "../assets/images/illustration-grow-followers.webp";
import { motion } from "framer-motion";

function FifthComponent(props) {
  return (
    <motion.section transition={{duration: 1, ease: "easeOut", delay: 1.2}} variants={props.variants}  className={style.fifthContainer}>
      <figure>
        <img src={illustrationGrowFollowers} alt="illustration-grow-followers" />
      </figure>
      <h2>  Grow followers <br /> with non-stop <br /> content.</h2>
    </motion.section>
  );
}

export { FifthComponent };
