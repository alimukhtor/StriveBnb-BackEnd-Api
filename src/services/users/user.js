import express from 'express'
import {User, House} from '../../server.js'


const userRouter = express.Router()


userRouter.get("/", async(request, response, next)=> {
    try {
        const users = await User.findAll({
            include:House
        })
        response.send(users)
    } catch (error) {
        next(error)
    }
})
userRouter.post("/", async(request, response, next)=> {
    try {
        const users = await User.create(request.body)
        response.send(users)
    } catch (error) {
        next(error)
    }
})
userRouter.get("/:id", async(request, response, next)=> {})
userRouter.put("/:id", async(request, response, next)=> {})
userRouter.delete("/:id", async(request, response, next)=> {})

export default userRouter