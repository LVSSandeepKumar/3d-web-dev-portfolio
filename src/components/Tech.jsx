import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";

const Tech = () => {
  return (
    <>
    <h1 className="text-white text-start mb-8 font-bold text-6xl max-sm:text-3xl">My Tech Stack</h1>
    <div className="flex flex-row flex-wrap justify-center gap-10">
      
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
    </>
  )
};

export default SectionWrapper(Tech, '');