import {motion} from 'framer-motion'
import ExperienceCard from './ExperienceCard'
interface Props {}

export const WorkExperience = (props: Props) => {
    return (
        <motion.div 
        initial={{opacity: 0, }}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        className='h-screen flex relative overflow-hidden flex-col 
        text-left lg:flex-row w-max-full lg:px-5 px-2 justify-evenly mx-auto items-center'>
           <h3 className="absolute top-24 uppercase tracking-[20px] 
           text-gray-300 text-2xl text-center">Experience</h3> 
           <div className='flex w-full space-x-5 overflow-x-scroll snap-x snap-mandatory'>
               <ExperienceCard/>
               <ExperienceCard/>
               <ExperienceCard/>
               <ExperienceCard/>
           </div>
        </motion.div>
    )
}
