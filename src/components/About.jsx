import { motion } from "framer-motion";
import { ServiceCard } from "./ui";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant} from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn('','',0.1,1)}
      className="mt-4 text-secondary font-[17px] max-w-3xl leading-[30px]">
      Specializing in full stack development with React.js, Next.js, Node.js, and Express.js to create dynamic, responsive web applications. With a dedication to innovation, I develop full stack JavaScript web applications that offer seamless user experiences. My projects integrate beautiful design with robust functionality, ensuring responsive and high-performing solutions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
};

export default SectionWrapper(About,'about');