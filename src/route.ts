import fastify, { FastifyInstance } from 'fastify';
import { getdata } from './controller';

export const routes=(fastify:FastifyInstance)=>{
    fastify.post("/",getdata)
}

export default routes