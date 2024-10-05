import React from "react";
import { motion } from "framer-motion";
import style from "./example.module.css";

function ExamplesMotion(Props) {
  return (
    <>
      <section className={style.container}>
        <h1 className={style.title}>Show me on scroll</h1>
        <motion.div
          className={style.containerDiv}
          initial={{
            translateX: "-200px",
            opacity: 0,
          }}
          whileInView={{
            translateX: "0px",
            opacity: 1,
            transition: {

              delay: 1.5,
            },
          }}
        ></motion.div>
      </section>
      <section className={style.container}>
        <h1 className={style.title}>Show me on scroll 2</h1>
        <motion.div
          className={style.containerDiv}
          initial={{
            translateX: "-200px",
          }}
          whileInView={{
            translateX: "0px",
            transition: {
              delay: 1.5,
            },
          }}
        ></motion.div>
      </section>
      <section className={style.container}>
        <h1 className={style.title}>Show me on scroll</h1>
        <motion.div
          className={style.containerDiv}
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
            transition: {
              delay: 1.5,
            },
          }}
        ></motion.div>
      </section>
    </>
  );
}

export { ExamplesMotion };
