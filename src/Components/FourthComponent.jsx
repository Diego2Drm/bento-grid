import React from "react";
import style from "../index.module.css";
import illustrationSchedulePosts from "../assets/images/illustration-schedule-posts.webp";
import { motion } from "framer-motion";

function FourthComponent(props) {
  return (
    <motion.section
      transition={{ duration: 1, ease: "easeOut", delay: 0.9 }}
      variants={props.variants}
      className={style.fourthContainer}
    >
      <h2>Schedule to social media.</h2>
      <figure>
        <img src={illustrationSchedulePosts} alt="illustrationSchedulePosts" />
      </figure>
      <p>
        Optimize post timings to publish content at the perfect time for your
        audience.
      </p>
    </motion.section>
  );
}

export { FourthComponent };
