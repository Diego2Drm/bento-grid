import React from "react";
import { motion } from "framer-motion"
import style from "../index.module.css"
import illustrationMultiplePlatforms from "../assets/images/illustration-multiple-platforms.webp"

function SecondComponent(props){
    return(
        <motion.section transition={{duration: 1, ease: "easeOut", delay: 0.5}} variants={props.variants} className={style.secondContainer}>
            <figure>
                <img src={illustrationMultiplePlatforms} alt="ilustration-Menu" />
            </figure>
            <h2>
                Manage multiple accounts and platforms.
            </h2>
        </motion.section>
    );
};

export { SecondComponent };