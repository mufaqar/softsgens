import Image from 'next/image'
import React from 'react'
import StoryBgOne from '../public/images/StoryBgOne.svg'
import StoryBgTwo from '../public/images/StoryBgTwo.svg'

function Story() {
  return (
    <>
        <section className='container grid p-4 pb-32 mx-auto mt-40 mb-8 md:grid-cols-2 story md:p-0 md:pb-32'>
            <div className='relative grid bg-white border border-gray-300 stories_wrapper rounded-xl md:grid-cols-2'>
                <div className='border-r-[1px] border-gray-300'>
                    <h2 className='text-center text-green-500 main-heading'>200+</h2>
                    <h6 className='mt-2 text-center h3'>Clients Worldwide</h6>
                </div>
                <div>
                    <h2 className='text-center text-blue-500 main-heading'>15+</h2>
                    <h6 className='mt-2 text-center h3'>Team Members</h6>
                </div>
                <div className='border-t-[1px] border-r-[1px] border-gray-300'>
                    <h2 className='text-center text-yellow-500 main-heading'>95+</h2>
                    <h6 className='mt-2 text-center h3'>Client Retention</h6>
                </div>
                <div className='border-t-[1px] border-gray-300'>
                    <h2 className='text-center text-orange-500 main-heading'>13<sub className='text-2xl'>Years</sub></h2>
                    <h6 className='mt-2 text-center h3'>In Business</h6>
                </div>
                <div className='border-t-[1px] border-r-[1px] border-gray-300'>
                    <h2 className='text-center text-fuchsia-500 main-heading'>1000+</h2>
                    <h6 className='mt-2 text-center h3'>Projects Completed</h6>
                </div>
                <div className='border-t-[1px] border-gray-300'>
                    <h2 className='text-center text-cyan-500 main-heading'>24/7</h2>
                    <h6 className='mt-2 text-center h3'>IT Support</h6>
                </div>
                <figure className='absolute bottom-4 -z-10 -left-20'><Image src={StoryBgOne} alt='Bg-1' ></Image></figure>
                <figure className='absolute lg:-right-12 -z-10 -bottom-16'><Image src={StoryBgTwo} alt='Bg-1' className=''></Image></figure>
            </div>
            <div className='mt-16 md:pl-20 md:mt-0'> 
                <h6 className='text-orange-400 h3'>Our Story</h6>
                <h2 className='mt-2 main-title leading-[45px]'>A Trusted Team of Software Developers, Trail Blazers in Innovative Technology!</h2>
                <p className='mt-4 text-base leading-7 tracking-wide text-gray-400'>We are an ORGANIZED TEAM, working for the maximum possible client ROI. <br/> We help you avail the team of developers of your choice. Our core values include providing principled services, seeking the clients’ benefits, and innovative excellence in software development.</p>
                <p className='mt-4 text-base leading-7 tracking-wide text-gray-400'>We are an ORGANIZED TEAM, working for the maximum possible client ROI. <br/> We help you avail the team of developers of your choice. Our core values include providing principled services, seeking the clients’ benefits, and innovative excellence in software development.</p>
                <p className='mt-4 mb-10 text-base leading-7 tracking-wide text-gray-400'>We are an ORGANIZED TEAM, working for the maximum possible client ROI. <br/> We help you avail the team of developers of your choice. Our core values include providing principled services, seeking the clients’ benefits, and innovative excellence in software development.</p>
                <a className='pt-4 shadow-lg btn-blue'>Load More</a>
            </div>
        </section>
    </>
  )
}

export default Story