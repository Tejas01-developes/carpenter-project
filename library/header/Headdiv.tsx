import { Logo } from "./Logo"
import { Socials } from "./Socials"

export const Headdiv=()=>{
return(

<header className="bg-[#ffde5d] h-[17vh] w-screen flex items-center justify-center relative">
    <div className="absolute left-8">
    <Logo/>
    </div>

<h1 className="text-center text-white text-7xl font-bold uppercase font-serif tracking-wider [text-shadow:_4px_4px_0_#000,_8px_8px_0_#4a4a4a]">
    Manoj Limbad
    </h1>
    <div className="absolute right-15">
    <Socials/>
    </div>
</header>
)
}

