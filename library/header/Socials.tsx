import emaillogo from '../../asset-imgs/email.logo.jpg'
import phonelogo from '../../asset-imgs/phonelogo.png'

export const Socials=()=>{
    return(
        <div className='flex iterm-center gap-15'>

            {/* email */}
        <div className='group relative flex item-center cursor-pointer'>
        <img src={emaillogo.src} className='h-8 w-8 object-cover rounded-full'/>
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-sm font-sans px-3 py-1 rounded shadow-lg whitespace-nowrap z-10">
        manojlimbad@gmail.com
        </div>
        </div>


        {/* phone */}
        <div className='group relative flex item-center cursor-pointer'>
        <img src={phonelogo.src} className='h-8 w-8 object-cover rounded-full' />
        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 hidden group-hover:block bg-black text-white text-sm font-sans px-3 py-1 rounded shadow-lg whitespace-nowrap z-10">
        +91 8200600953
        </div>
        </div>


        </div>
        
    )
}