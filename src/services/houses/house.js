import express from 'express'
import {House, User, City} from '../../server.js'
import { Op } from "sequelize";

const houseRouter = express.Router()

houseRouter.get("/", async(request, response, next)=> {
    try {
        const houses = await House.findAll({
            include:[User, City],
            where:{
                ...(request.query.search && {
                   [Op.or]:[
                    
                       {
                        location:{[Op.iLike]:`%${request.query.search}%`}
                    }
                   ] 
                })
            }
        })
        response.send(houses)
    } catch (error) {
        console.log("Error is:", error);
        next(error)
    }
})
houseRouter.post("/", async(request, response, next)=> {
    try {
        const houses = await House.create(request.body)
        response.send(houses)
    } catch (error) {
        console.log("Errror :", error);
        next(error)
    }
})
houseRouter.get("/:id", async(request, response, next)=> {
    try {
       const getById = await House.findOne({
           where:{
               id:request.params.id
           }
       })
       response.send(getById) 
    } catch (error) {
        next(error)
    }
})
houseRouter.put("/:id", async(request, response, next)=> {
    try {
        const updateHouse = await House.update(request.body, {
            where:{
                id:request.params.id
            }
        })

        response.send(updateHouse)
    } catch (error) {
        next(error)
    }
})
houseRouter.delete("/:id", async(request, response, next)=> {
    try {
        await House.destroy({
            where:{
                id:request.params.id
            }
        })
        response.status(202).send()
    } catch (error) {
        next(error)
    }
})


export default houseRouter