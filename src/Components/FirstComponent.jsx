import React from "react";
import { motion } from "framer-motion";
import imgStars from "../assets/images/illustration-five-stars.webp";
import style from "../index.module.css";

function FristComponent(props) {

  return (
    <motion.section
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      variants={props.variants}
      className={style.containerFirst}
    >
      <h2>
        Social Media <span>10x</span> <i>Faster</i> with Al
      </h2>
      <figure>
        <img src={imgStars} alt="stars" />
      </figure>
      <p>Over 4,000 5-star reviews</p>
    </motion.section>
  );
}

export { FristComponent };
