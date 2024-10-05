import React from "react";
import style from "../index.module.css";
import illustrationCreatePost from "../assets/images/illustration-create-post.webp";
import { motion } from "framer-motion";

function SeventhComponent(props) {
  return (
    <motion.section transition={{duration: 1, ease: "easeOut", delay: 1.7}} variants={props.variants}  className={style.seventhContainer}>
      <h2> Create and schedule content <i> quicker.</i> </h2>
      <figure>
        <img src={illustrationCreatePost} alt="illustration-create-post" />
      </figure>
    </motion.section>
  );
}

export { SeventhComponent };