import express from 'express'
import {House, User} from '../../server.js'


const houseRouter = express.Router()

houseRouter.get("/", async(request, response, next)=> {
    try {
        const houses = await House.findAll({
            include:User
        })
        response.send(houses)
    } catch (error) {
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
houseRouter.get("/:id", async(request, response, next)=> {})
houseRouter.put("/:id", async(request, response, next)=> {})
houseRouter.delete("/:id", async(request, response, next)=> {})


export default houseRouter