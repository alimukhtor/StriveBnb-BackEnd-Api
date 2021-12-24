import express from 'express'
import {City} from '../../server.js'

const cityRouter = express.Router()


cityRouter.get("/", async(request, response, next)=> {})
cityRouter.post("/", async(request, response, next)=> {})
cityRouter.get("/:id", async(request, response, next)=> {})
cityRouter.put("/:id", async(request, response, next)=> {})
cityRouter.delete("/:id", async(request, response, next)=> {})