import user_collection from "./schema"

interface datatype{
    name:string,
    email:string,
    phone:string,
    age:number
}

export const postdata=async(data:datatype)=>{
    return new Promise((resolve,reject)=>{
        const{name,email,phone,age}=data

         user_collection.create({name,email,phone,age}).then(()=>{
            resolve("success")
         })
        .catch((error)=>{
            reject(error)
        })
    })

}