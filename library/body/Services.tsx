import { div } from "framer-motion/client"

export const Services=()=>{
return(
    <div  className=" h-[80vh] flex items-center justify-center" >
       <div className="bg-neutral-900 h-[55vh] w-[20vw] rounded-xl">
        <h1 className="text-[#ffde5d] text-5xl font-bold font-serif text-center mt-7">₹250
        </h1>

        <hr className="border-white my-4"/>

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
        </svg>
        <span className="text-white text-lg">Experience Guidence</span>
        
       </div>

    </div>

)
}