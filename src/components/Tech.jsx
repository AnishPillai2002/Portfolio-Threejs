import React from 'react'


//importing balls
import { BallCanvas } from "./canvas";
//importing technologies
import { technologies } from "../constants";

//importing hoc 
import { SectionWrapper } from "../hoc";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "");