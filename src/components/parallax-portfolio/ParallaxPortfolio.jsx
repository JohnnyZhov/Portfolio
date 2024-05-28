import { useRef } from "react";
import "./parallax-portfolio.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxPortfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 2], ["0%", "100%"]);

  return (
    <div className="parallax-portfolio" ref={ref}>
      <motion.div className="mountains"></motion.div>
      <motion.h1 style={{ y: yText }}>My Projects</motion.h1>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default ParallaxPortfolio;
