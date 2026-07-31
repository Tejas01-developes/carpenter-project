"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import z from "zod"
import axios from 'axios'


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
        if(res.data.success){
            return alert('slot booked')
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
