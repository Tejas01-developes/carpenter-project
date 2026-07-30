import { FastifyReply, FastifyRequest } from "fastify";
import user_collection from "./schema";
import z from "zod";
import { error } from "console";
import { postdata } from "./service";


const userschema=z.object({
    name:z.string().min(3,"Name must be atleast three character"),
    email:z.string().email("Invalid email format"),
    age:z.number().min(18,"Must be atleast 18"),
    phone:z.string().min(10,"Phone number must be atleast 10 digit")

})

export const getdata=async(req:FastifyRequest,resp:FastifyReply)=>{
 const result=userschema.safeParse(req.body)

 if(!result.success){
    return resp.status(400).send({success:false,message:"Validation error",error:result.error.flatten().fieldErrors})
 }
 const{name,email,phone,age}=result.data
 try{
    await postdata({name,email,age,phone})
    return resp.status(200).send({success:true,message:"registered"})
}catch(err){
    return resp.status(400).send({success:false,message:err})
}
}