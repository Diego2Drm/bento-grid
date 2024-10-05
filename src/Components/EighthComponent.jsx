import React from "react";
import style from "../index.module.css";
import illustrationAiContent from "../assets/images/illustration-ai-content.webp";
import { motion } from "framer-motion";

function EighthComponent(props) {
  return (
    <motion.section transition={{duration: 1, ease: "easeOut", delay: 2}} variants={props.variants}  className={style.eighthContainer}>
      <h2>Write your content using AI.</h2>
      <figure>
        <img src={illustrationAiContent} alt="illustration-ai-content" />
      </figure>
    </motion.section>
  );
}

export { EighthComponent };