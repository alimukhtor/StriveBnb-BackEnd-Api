import express from 'express'
import listEndpoints from 'express-list-endpoints'



const port = process.env.PORT || 3001
const server = express()


server.listen(port, async()=> {
    console.log(`Server is running on port ${port}`)
    console.table(listEndpoints(server))
})




// ************* ENDPOINTS HERE ************************
server.use(express.json())



// ************* ENDPOINTS ENDS HERE ************************

