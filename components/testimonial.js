import React, {useState} from "react";
import Image from "next/image";
import quote from "../public/images/quotes-left.svg";
import t1 from "../public/images/testimonial/t-1.jpg";
import t2 from "../public/images/testimonial/t-2.jpg";
import t3 from "../public/images/testimonial/t-3.jpg";
import t4 from "../public/images/testimonial/t-4.jpg";
import t5 from "../public/images/testimonial/t-5.jpg";
import { RiStarFill } from 'react-icons/ri';
import { FaPlay } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview'
import { useEffect } from 'react';



function Testimonial() {

    const [ref, inView] = useInView();
    const animation = useAnimation();
    const animationOpacity = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring", duration: 1, bounce: 0.3
                }
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
                x: "-3vw",
                opacity: 0
            })
            animationOpacity.start({
                opacity: 0,
                scale: 0.8
            })
        }
    }, [inView]);
    
    const data = [
        {
            title: "The Best Template You Got to Have it!",
            description:"Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leverage other's backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
            name: "Kathrin Richard",
            designation: "Web Developer",
            image: t1,
            videoURL:"" 
        },
        {
            title: "Embarrassed by the First Version.",
            description:"Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leverage other's backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
            name: "Rupan Oberoi",
            designation: "Web Designer",
            image: t2,
            videoURL:"" 
        },
        {
            title: "Amazing Quiety template!",
            description:"Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leverage other's backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
            name: "Kathrin Richard",
            designation: "Web Developer",
            image: t3,
            videoURL:"" 
        },
        {
            title: "The Best Template You Got to Have it!",
            description:"Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leverage other's backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
            name: "Jennifer White",
            designation: "Software Engineer",
            image: t4,
            videoURL:"" 
        },
        {
            title: "It is Undeniably Good!",
            description:"Energistically streamline robust architectures whereas distributed mindshare. Intrinsicly leverage other's backend growth strategies through 24/365 products. Conveniently pursue revolutionary communities for compelling process improvements.",
            name: "Ami Nijai",
            designation: "Customer Support",
            image: t5,
            videoURL:"" 
        },
        
    ];

    const [testimonial] = useState(data);
    const [id, setId] = useState(1);

    const ChangeTestimonial = (id) =>{
        setId(id);
    }

    
    return (
        <>
            <section className="p-4 py-20 mb-24 blue_gradient_bg rounded-[60px] shadow-xl">
                <motion.h6 className="text-center text-orange-400 h3" animate={animationOpacity}>Testimonial</motion.h6>
                <motion.h2 className="mt-2 text-center text-white main-title" animate={animationOpacity}>
                    What They Say About Us
                </motion.h2>
                <motion.p animate={animationOpacity} className="max-w-2xl mx-auto mt-4 text-lg leading-7 tracking-wide text-center text-gray-400">
                    Uniquely promote adaptive quality vectors rather than stand-alone
                    e-markets. pontificate alternative architectures whereas iterate.
                </motion.p>
                <div ref={ref} className="container grid mx-auto mt-10 md:grid-cols-2">
                    <motion.div className="" animate={animation}>
                        <Image src={quote} alt="quote" width={70} height={60}></Image>
                        <h2 className="mt-6 text-2xl font-semibold text-white sub-heading">{testimonial[id].title}</h2>
                        <ul className="flex items-center mt-2 space-x-2">
                            <li><RiStarFill color="#FB9247" fontSize="1.2rem"/></li>
                            <li><RiStarFill color="#FB9247" fontSize="1.2rem"/></li>
                            <li><RiStarFill color="#FB9247" fontSize="1.2rem"/></li>
                            <li><RiStarFill color="#FB9247" fontSize="1.2rem"/></li>
                            <li><RiStarFill color="#FB9247" fontSize="1.2rem"/></li>
                        </ul>
                        <p className="mt-8 text-lg leading-7 tracking-wide text-gray-400">{testimonial[id].description}</p>
                        <h3 className="mt-6 font-medium text-orange-400 h3">{testimonial[id].name}</h3>
                        <p className="mt-1 text-gray-400">{testimonial[id].designation}</p>
                    </motion.div>
                    <div className="relative ml-20">
                        <div className="flex justify-end dots-bg">
                            <figure className="relative mt-12">
                                <Image src={testimonial[id].image} alt="model" className="object-cover shadow-md rounded-2xl" width={480} height={380}></Image>
                                <div className="absolute top-0 left-0 right-0 bg-gray-800 opacity-25 bottom-[7px] rounded-2xl"></div>
                            </figure>
                            
                        </div>
                        <div className="absolute flex items-center gap-3 font-medium text-white bottom-8 left-24">
                            <div className="inline-block pl-[18px] p-4 pr-[14px] text-xl text-white bg-blue-700 rounded-full hover:bg-black cursor-pointer"><FaPlay/></div>
                            <p>Watch Video</p>
                        </div>
                    </div>
                </div>
                <div className="container flex justify-between mx-auto mt-12 overflow-x-scroll testimonial_data gap-x-2 md:overflow-x-hidden">
                    <div onClick={()=>ChangeTestimonial(0)} className="inline-flex items-center p-3 space-x-3 bg-[#26367B] rounded-2xl px-5 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
                        <Image src={t1} alt="" width={60} height={50} className="shadow-md rounded-xl"></Image>
                        <div>
                            <h3 className="font-medium text-white whitespace-nowrap h3">Hanry Luice</h3>
                            <p className="text-gray-400 whitespace-nowrap">Web Developer</p>
                        </div>
                    </div>
                    <div onClick={()=>ChangeTestimonial(1)} className="inline-flex items-center p-3 space-x-3 bg-[#26367B] rounded-2xl px-5 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
                        <Image src={t2} alt="" width={60} height={50} className="shadow-md rounded-xl"></Image>
                        <div>
                            <h3 className="font-medium text-white h3 whitespace-nowrap">Hanry Luice</h3>
                            <p className="text-gray-400 whitespace-nowrap">Web Developer</p>
                        </div>
                    </div>
                    <div onClick={()=>ChangeTestimonial(2)} className="inline-flex items-center p-3 space-x-3 bg-[#26367B] rounded-2xl px-5 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
                        <Image src={t3} alt="" width={60} height={50} className="shadow-md rounded-xl"></Image>
                        <div>
                            <h3 className="font-medium text-white h3 whitespace-nowrap">Hanry Luice</h3>
                            <p className="text-gray-400 whitespace-nowrap">Web Developer</p>
                        </div>
                    </div>
                    <div onClick={()=>ChangeTestimonial(3)} className="inline-flex items-center p-3 space-x-3 bg-[#26367B] rounded-2xl px-5 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
                        <Image src={t4} alt="" width={60} height={50} className="shadow-md rounded-xl"></Image>
                        <div>
                            <h3 className="font-medium text-white h3 whitespace-nowrap">Hanry Luice</h3>
                            <p className="text-gray-400 whitespace-nowrap">Web Developer</p>
                        </div>
                    </div>
                    <div onClick={()=>ChangeTestimonial(4)} className="inline-flex items-center p-3 space-x-3 bg-[#26367B] rounded-2xl px-5 shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-1">
                        <Image src={t5} alt="" width={60} height={50} className="shadow-md rounded-xl"></Image>
                        <div>
                            <h3 className="font-medium text-white h3 whitespace-nowrap">Hanry Luice</h3>
                            <p className="text-gray-400 whitespace-nowrap">Web Developer</p>
                        </div>
                    </div>
                    
                    
                </div>
            </section>
        </>
    );
}

export default Testimonial;
