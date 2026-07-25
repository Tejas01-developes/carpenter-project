import furniture1 from '../../asset-imgs/furniture1.jpg'
import furniture2 from '../../asset-imgs/furniture2.jpg'


export const Scrollfit=()=>{
return(
        <section className='relative w-screen h-[70vh] overflow-hidden bg-neutral-900'>

         <div className='absolute inset-0 z-10 flex flex-col justify-center items-start px-16 pointer-events-none'>
            <h2 className='text-white text-6xl font-bold font-serif uppercase tracking-widest animate-slide-from-right'>
                Premium Carpentery
            </h2>

            <p className='text-[#ffde5d] mt-4 text-2xl font-semibold animate-slide-from-right'>
                Crafting furniture that lasts a lifetime
            </p>
        </div>

        <div className='flex w-[200%] h-full animate-infinite-scroll'>
        <img src={furniture1.src} className='w-1/2 h-full object-cover' />
        <img src={furniture2.src} className='w-1/2 h-full object-cover' />
        </div>
        </section>
)
}