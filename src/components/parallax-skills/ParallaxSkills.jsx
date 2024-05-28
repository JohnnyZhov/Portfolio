import { useRef } from "react";
import "./parallax-skills.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSkills = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 2], ["0%", "100%"]);

  return (
    <div className="parallax-skills" ref={ref}>
      <motion.div className="mountains"></motion.div>
      <motion.h1>My Skills</motion.h1>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default ParallaxSkills;
