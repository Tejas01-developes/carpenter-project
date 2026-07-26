"use client"
import { animate, motion, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export const Card=({endvalue,lable,suffix='+'})=>{
    const ref=useRef(null)
    const isinview=useInView(ref,{once:true,margin:"-50px"})
    const[count,setcount]=useState(0)

useEffect(()=>{
if(isinview){
    const controls=animate(0,endvalue,{
        duration:2.5,
        ease:"easeOut",
        onUpdate(value){
            setcount(Math.round(value))
        }
    })
    return () => controls.stop() 
}
},[isinview,endvalue])

    return(
<motion.div ref={ref} initial={{opacity:0,y:30}}
animate={isinview? {opacity:1,y:0} : {}}
transition={{duration:0.6}}
className="flex flex-col items-center justify-center p-8 bg-neutral-800 border border-neutral-700 rounded-xl shadow-2xl">

<h3 className="text-5xl font-bold text-[#ffde5d] mb-3 font-serif">{count}{suffix}</h3>

<p className="text-white text-xl font-semibold tracking-wider uppercase text-center">
{lable}
</p>

</motion.div>
    )
}