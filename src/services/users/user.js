import express from 'express'
import {User, House, City} from '../../server.js'


const userRouter = express.Router()


userRouter.get("/", async(request, response, next)=> {
    try {
        const users = await User.findAll({
            include:City
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
userRouter.get("/:id", async(request, response, next)=> {
    try {
        const getById = await User.findOne({
            where:{
                id:request.params.id
            }
        })
        response.send(getById)
    } catch (error) {
        next(error)
    }
})
userRouter.put("/:id", async(request, response, next)=> {
    try {
        const updateUser = await User.update(request.body, {
            where:{
                id:request.params.id
            }
        })
        response.send(updateUser)
    } catch (error) {
        next(error)
    }
})
userRouter.delete("/:id", async(request, response, next)=> {
    try {
        await User.destroy({
            where:{
                id:request.params.id
            }
        })
        response.status(203).send()
    } catch (error) {
        next(error)
    }
})

export default userRouter