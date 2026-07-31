"use client"
import { useRouter } from "next/navigation"



export const Services=()=>{
const router=useRouter()
const formnavigate=()=>{
    router.replace("slot")
}
    const features=[
        "Experience Advice",
        "Approx Quatation",
        "Sugessation according to location"
    ]
return(
    <div  className=" h-[80vh] flex items-center justify-center" >
       <div className="bg-neutral-900 min-h-[55vh] h-auto w-[320px] rounded-xl flex flex-col py-6">
        <h1 className="text-[#ffde5d] text-5xl font-bold font-serif text-center mt-4">₹250
        </h1>

        <hr className="border-white my-6 mx-6"/>
        <div className="flex flex-col gap-6 px-6 pb-6">
        {features.map((key)=>(
            <div key={key} className="flex items-center gap-3">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 min-w-[20px] text-white shrink-0 mt-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
        </svg>
        <span className="text-white text-base leading-realxed break-words ">{features}</span>

            </div>
        ))}
        <div className="px-6 mt-auto">
  <button className="w-full bg-[#ffde5d] text-neutral-900 font-bold text-lg py-3 rounded-lg hover:bg-yellow-400 hover:scale-[1.02] transition-all active:scale-95 shadow-md" onClick={formnavigate}>Book Slot</button>
        </div>
        </div>

       
        
       </div>

    </div>

)
}