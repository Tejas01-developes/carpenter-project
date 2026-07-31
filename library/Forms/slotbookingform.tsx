"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import axios from 'axios'





const loadrazorpayscript=(src:string)=>{
return new Promise((resolver)=>{
const script=document.createElement("script")
script.src=src;
script.onload=()=>resolver(true)
script.onerror=()=>resolver(false)
document.body.appendChild(script)
})
}


export const Slotbookingform=()=>{
   
    const formschema=z.object({
        name:z.string().min(3,"Name must be atlest three character"),
        email:z.string().email("Invalid email formate"),
        phone:z.string().min(10,"Phone number must be 10 character"),
    })
    type formtype=z.infer<typeof formschema>
    const{register,handleSubmit,formState:{errors}}=useForm({resolver:zodResolver(formschema)})
    const submit=async(data:formtype)=>{
       try{
        const res=await axios.post("http://localhost:4000/apis/",data)
        if(res.data.success && res.data.orderid){
            const isloaded=await loadrazorpayscript("https://checkout.razorpay.com/v1/checkout.js")

            if(!isloaded){
                alert("Razorpay SDK failed to load")
                return
            }
            const razorkey=process.env.NEXT_PUBLIC_RAZOR_KEY
            console.log(razorkey)
            if(!razorkey){
                alert("Developer Error: NEXT_PUBLIC_RAZOR_KEY is missing from .env");
                    return;
            }

            const options={
                key:razorkey,
                amount:res.data.amount,
                currency:res.data.currency,
                name:"Slot booking",
                description:"Book your slot for meeting",
                order_id:res.data.orderid,
                handler:async function(resp:any){
                    const idss={
                        razorpay_payment_id:resp.razorpay_payment_id,
                        razorpay_order_id:resp.razorpay_order_id,
                        razorpay_signature:resp.razorpay_signature
                    }

                    console.log(idss.razorpay_order_id,idss.razorpay_payment_id,idss.razorpay_signature)
                    try{
                  const verify=await axios.post("http://localhost:4000/apis/verify",idss)
                    alert("payment verifying.....")

                    if(verify.data.success){
                        alert("Payment succesful; and verified")
                    }else{
                        alert("Payment failed")
                    }
                }catch(err){
                    console.log(err)
                }
                },
                // prefill:{
                //     name:data.name,
                //     email:data.email,
                //     contact:data.phone
                // },
                theam:{
                    color:'#ffde5d'
                }
            }

            const paymentobject=new (window as any).Razorpay(options)
            paymentobject.open()
        }
       }catch(err){
        return alert("slot booking failed")
       }
    }


    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="Name" {...register("name")}/>
            {errors.name && (
                <h1 className="text-red-500">{String(errors.name.message)}</h1>
            )}
            <input type="text" placeholder="Email" {...register("email")}/>
            {errors.email && (
                <h1 className="text-red-500">{String(errors.email.message)}</h1>
            )}
            <input type="text"  placeholder="Phone No" {...register("phone")}/>
            {errors.phone && (
                <h1 className="text-red-500">{String(errors.phone.message)}</h1>
            )}
            <button type="submit">Book slot</button>
            </form>
        </div>
    )
}
