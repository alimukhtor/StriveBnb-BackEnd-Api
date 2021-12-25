import express from 'express'
import {City, House, User} from '../../server.js'
import { Op } from "sequelize";

const cityRouter = express.Router()


cityRouter.get("/", async(request, response, next)=> {
    try {
        const city = await City.findAll({
            include: User,
            where:{
                ...(request.query.search && {
                    [Op.or]:[
                        {
                            name:{[Op.iLike]: `%${request.query.search}%`}
                        }
                    ]
                })
            }
        })
        response.send(city)
    } catch (error) {
        next(error)
    }
})
cityRouter.post("/", async(request, response, next)=> {

    try {
        const city = await City.create(request.body)
        response.status(201).send(city)
    } catch (error) {
        next(error)
    }
})
cityRouter.get("/:id", async(request, response, next)=> {})
cityRouter.put("/:id", async(request, response, next)=> {})
cityRouter.delete("/:id", async(request, response, next)=> {})

export default cityRouter