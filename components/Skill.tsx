import {motion} from 'framer-motion'
interface Props {
    directionLeft?: Boolean
}

const Skill = ({directionLeft}: Props) => {
    return (
        <div className='group relative flex cursor-pointer'>
           <motion.img
           src='/favicon.ico'
           className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24 filter group-hover:grayscale'
        //    initial={{
        //        x:directionLeft? -100: 100,
        //        opacity:0
        //    }}
        // transition={{duration: 1}}
        // whileInView={{opacity: 1, x: 0}}
           />
           <div className='absolute'>
               <div className='flex items-center justify-center opacity-0 group-hover:opacity-80 
               duration-500 transition ease-in-out group-hover:bg-white w-16 h-16 md:w-24 md:h-24 rounded-full'>
                   <p className='text-3xl font-bold opacity-100 text-black '>100%</p>
               </div>
           </div> 
        </div>
    )
}

export default Skill
