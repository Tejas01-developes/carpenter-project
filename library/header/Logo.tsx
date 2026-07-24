import carpenterlogo from '../../asset-imgs/carpenter.png'

export const Logo=()=>{
    return(
<div>
<img src={carpenterlogo.src} className='h-24 w-24 rounded-full object-cover border-4 border-white shadow-lg' />
</div>
        
    )
}