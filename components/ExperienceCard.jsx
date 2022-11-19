import {motion} from 'framer-motion'
const ExperienceCard = () => {
    return (
        <article className='flex mt-[8rem] flex-col rounded-lg items-center space-y-7 
        flex-shrink-0 lg:w-[500px] w-[300px] snap-center 
        bg-[#292929] p-8 opacity-40 hover:opacity-100 cursor-pointer 
        transition-opacity duration-200 overflow-hidden'>
            <motion.img 
            initial={{opacity: 0, y:-200}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            className='rounded-full w-[2rem] h-[2rem] md:rounded-full 
             object-cover object-center ' src='/favicon.ico'/>
            <div>
                <h4>CEO of Hadeeny</h4>
                <p className='font-bold text-2xl mt-1'>Hadeeny</p>
                <div className='flex space-x-2 my-1'>
                    <img src='/vercel.svg' className='w-10 h-10 rounded-full'/>
                    <img src='/vercel.svg' className='w-10 h-10 rounded-full'/>
                    <img src='/vercel.svg' className='w-10 h-10 rounded-full'/>
                </div>
                <p className='uppercase py-1 text-gray-300 '>started work... -Ended....</p>
                <ul className='list-disc space-y-2 ml-5 text-lg'>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard
