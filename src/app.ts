import fastifyCors from '@fastify/cors'
import fastifyFormbody from '@fastify/formbody'
import dbconnect from './dbconnect'
import fastify from 'fastify'
import routes from './route'

const app=fastify({logger:true})


app.register(fastifyCors,{
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE","OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"],
    credentials:true,
})
app.register(fastifyFormbody)
app.register(routes,{prefix:"/apis"})
app.listen({port:4000},async()=>{
    await dbconnect.connect()
    console.log("Server started on the port 4000")
})