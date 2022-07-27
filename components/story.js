import Image from 'next/image'
import React from 'react'
import StoryBgOne from '../public/images/StoryBgOne.svg'
import StoryBgTwo from '../public/images/StoryBgTwo.svg'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview'
import { useEffect } from 'react';


function Story() {

    const [ref, inView] = useInView();
    const animation = useAnimation();
    const animationOpacity = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1
                
            })
            animationOpacity.start({
                opacity: 1,
                scale: 1,
                transition: {
                    type: "spring", duration: 2, bounce: 0.3
                }
            })
        }else{
            animation.start({
                opacity: 0
            })
            animationOpacity.start({
                opacity: 0,
                scale: 0.8
            })
        }
    }, [inView]);


  return (
    <>
        <section className='container grid p-4 pb-32 mx-auto mt-40 mb-8 md:grid-cols-2 story md:p-0 md:pb-32'>
            <div className='relative grid bg-white border border-gray-300 stories_wrapper rounded-xl md:grid-cols-2'>
                <div className='border-r-[1px] border-gray-300' >
                    <motion.h2 className='text-center text-green-500 main-heading' animate={animationOpacity}>200+</motion.h2>
                    <motion.h6 className='mt-2 text-center h3' animate={animationOpacity}>Clients Worldwide</motion.h6>
                </div>
                <div>
                    <motion.h2 className='text-center text-blue-500 main-heading' animate={animationOpacity}>15+</motion.h2>
                    <motion.h6 className='mt-2 text-center h3' animate={animationOpacity}>Team Members</motion.h6>
                </div>
                <div  className='border-t-[1px] border-r-[1px] border-gray-300'>
                    <motion.h2 className='text-center text-yellow-500 main-heading' animate={animationOpacity}>95+</motion.h2>
                    <motion.h6 className='mt-2 text-center h3' animate={animationOpacity}>Client Retention</motion.h6>
                </div>
                <div ref={ref} className='border-t-[1px] border-gray-300'>
                    <motion.h2 className='text-center text-orange-500 main-heading' animate={animationOpacity}>13<sub className='text-2xl'>Years</sub></motion.h2>
                    <motion.h6 className='mt-2 text-center h3' animate={animationOpacity}>In Business</motion.h6>
                </div>
                <div className='border-t-[1px] border-r-[1px] border-gray-300'>
                    <motion.h2 className='text-center text-fuchsia-500 main-heading' animate={animationOpacity}>1000+</motion.h2>
                    <motion.h6 className='mt-2 text-center h3' animate={animationOpacity}>Projects Completed</motion.h6>
                </div>
                <div className='border-t-[1px] border-gray-300'>
                    <motion.h2 className='text-center text-cyan-500 main-heading' animate={animationOpacity}>24/7</motion.h2>
                    <motion.h6 className='mt-2 text-center h3' animate={animationOpacity}>IT Support</motion.h6>
                </div>
                <figure className='absolute bottom-4 -z-10 -left-20'><Image src={StoryBgOne} alt='Bg-1' ></Image></figure>
                <figure className='absolute lg:-right-12 -z-10 -bottom-16'><Image src={StoryBgTwo} alt='Bg-1' className=''></Image></figure>
            </div>
            <div className='mt-16 md:pl-20 md:mt-0'> 
                <motion.h6 className='text-orange-400 h3' animate={animationOpacity}>Our Story</motion.h6>
                <motion.h2 className='mt-2 main-title leading-[45px]' animate={animation}> A Trusted Team of Software Developers, Trail Blazers in Innovative Technology!</motion.h2>
                <p className='mt-4 text-base leading-7 tracking-wide text-gray-400'>We are an ORGANIZED TEAM, working for the maximum possible client ROI. <br/> We help you avail the team of developers of your choice. Our core values include providing principled services, seeking the clients’ benefits, and innovative excellence in software development.</p>
                <p className='mt-4 text-base leading-7 tracking-wide text-gray-400'>We are an ORGANIZED TEAM, working for the maximum possible client ROI. <br/> We help you avail the team of developers of your choice. Our core values include providing principled services, seeking the clients’ benefits, and innovative excellence in software development.</p>
                <p className='mt-4 mb-10 text-base leading-7 tracking-wide text-gray-400'>We are an ORGANIZED TEAM, working for the maximum possible client ROI. <br/> We help you avail the team of developers of your choice. Our core values include providing principled services, seeking the clients’ benefits, and innovative excellence in software development.</p>
                <motion.a className='pt-4 shadow-lg btn-blue' animate={animationOpacity}>Load More</motion.a>
            </div>
        </section>
    </>
  )
}

export default Story