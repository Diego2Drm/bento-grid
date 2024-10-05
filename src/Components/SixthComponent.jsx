import React from "react";
import style from "../index.module.css";
import illustrationAudienceGrowth from "../assets/images/illustration-audience-growth.webp";
import { motion } from "framer-motion";

function SixthComponet(props) {
  return (
    <motion.section transition={{duration: 1, ease: "easeOut", delay: 1.4}} variants={props.variants}  className={style.sixthContainer}>
      <h2> &gt;56% </h2>
      <p>faster audience growth</p>
      <figure>
        <img src={illustrationAudienceGrowth} alt="illustration-audience-growth" />
      </figure>
    </motion.section>
  );
}

export { SixthComponet };
