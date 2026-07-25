"use client"
import { useEffect, useState } from 'react'
// import Lottie from 'lottie-react'
import hammerloading from '../asset-imgs/Handsaw.json'
import dynamic from 'next/dynamic'
const Lottie=dynamic(()=>import('lottie-react'),{ssr:false})

export default function Loading(){
    const[mounted,setmounted]=useState(false)
    useEffect(()=>{
        setmounted(true)
    },[])

    return(
        <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-white w-screen h-screen'>
        <div className='w-64 h-64'>
            {mounted && (
                 <Lottie animationData={hammerloading} loop={true} autoPlay    style={{ width: 300, height: 300 }}/>
              
            )}
            
           
        </div>

        <h2 className='mt-4 text-[#ffde5d] text-2xl font-serif font-bold tracking-widest animate-pulse'>
        Crafting your expirence...........
        </h2>
        </div>
    )
}