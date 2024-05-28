import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { ProjectCard } from "./ui";

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}> 
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects Done.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn('','', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Developing these projects has sharpened my skills in JavaScript frameworks like React and Node.js. Each challenge was a chance to grow, enhance my problem-solving skills, and deliver robust, user-friendly applications.
          My commitment to excellence ensures every project is a step forward in my web development journey.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
};

export default SectionWrapper(Works, ' ');