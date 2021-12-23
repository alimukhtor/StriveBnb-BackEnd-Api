import express from 'express'
import listEndpoints from 'express-list-endpoints'
import sequelize, { testDB } from './db/connect.js'

// ******************** STARTING OF MODELS ******************************

import User from './db/models/users/index.js'
import House from './db/models/houses/index.js'


const port = process.env.PORT || 3001
const server = express()


// ************** TABLE CONNECTIONS HERE *********************

User.hasMany(House, { onDelete: "CASCADE" })
House.belongsTo(User, { onDelete: "CASCADE" })

export {User, House}


// ************** TABLE CONNECTIONS ENDS HERE *********************
server.listen(port, async()=> {
    console.log(`Server is running on port ${port}`)
    console.table(listEndpoints(server))
    await testDB()
    await sequelize.sync()
})




// ************* ENDPOINTS HERE ************************
server.use(express.json())



// ************* ENDPOINTS ENDS HERE ************************


