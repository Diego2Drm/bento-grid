import React from "react";
import style from "./index.module.css";
import { motion } from "framer-motion";
import { FristComponent } from "./Components/FirstComponent";
import { SecondComponent } from "./Components/SecondComponent";
import { ThirdComponent } from "./Components/ThirdComponent";
import { FourthComponent } from "./Components/FourthComponent";
import { FifthComponent } from "./Components/FifthComponent";
import { SixthComponet } from "./Components/SixthComponent";
import { SeventhComponent } from "./Components/SeventhComponent";
import { EighthComponent } from "./Components/EighthComponent";
import { ExamplesMotion } from "./Components/ExamplesMotion";

function App() {
  const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const gridSquare = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className={style.gridContainer}
      >
        <FristComponent variants={gridSquare} />
        <SecondComponent variants={gridSquare} />
        <ThirdComponent variants={gridSquare}/>
        <FourthComponent variants={gridSquare}/>
        <FifthComponent variants={gridSquare}/>
        <SixthComponet variants={gridSquare}/>
        <SeventhComponent variants={gridSquare}/>
        <EighthComponent variants={gridSquare}/>
        {/* <ExamplesMotion /> */}
      </motion.section>
  );
}

export default App;
