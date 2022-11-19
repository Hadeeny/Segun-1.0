import {motion} from 'framer-motion'
import {GrHtml5} from 'react-icons/gr'
import {FaCss3, FaNodeJs, SiJavascript, SiTailwindcss, BsFillBootstrapFill, FaReact, SiReactrouter, SiRedux, SiFramer} from 'react-icons/all'

const icons = [1, 2, 3, 4, 5]

const Skill = () => {
    return (
        <>
        {icons.map((icon, i)=>{
            return (
                <div key={i} className='group relative flex cursor-pointer'>
           <motion.img
           src='/favicon.ico'
           className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-20 md:h-20 filter group-hover:grayscale'
        //    initial={{
        //        x:directionLeft? -100: 100,
        //        opacity:0
        //    }}
        // transition={{duration: 1}}
        // whileInView={{opacity: 1, x: 0}}
           />
           <div className='absolute'>
               <div className='flex items-center justify-center opacity-0 group-hover:opacity-80 
               duration-500 transition ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 rounded-full'>
                   <p className='text-3xl font-bold opacity-100 text-black '>100%</p>
               </div>
           </div> 
        </div>
            )
        })}
        </>
    )
}

export default Skill
