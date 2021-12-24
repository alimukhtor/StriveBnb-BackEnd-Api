import express from 'express'
import listEndpoints from 'express-list-endpoints'
import sequelize, { testDB } from './db/connect.js'

// ******************** STARTING OF MODELS ******************************

import User from './db/models/users/index.js'
import House from './db/models/houses/index.js'
import City from './db/models/cities/index.js'

// ******************** END OF MODELS ******************************


// ******************** STARTING OF ROUTERS ******************************

import userRouter from './services/users/user.js'
import houseRouter from './services/houses/house.js'
import cityRouter from './services/cities/city.js'

// ******************** END OF ROUTERS ******************************

const port = process.env.PORT || 3001
const server = express()


// ************** TABLE CONNECTIONS HERE *********************

User.hasMany(House, { onDelete: "CASCADE" })
House.belongsTo(User, { onDelete: "CASCADE" })

City.hasMany(House, { onDelete: "CASCADE" })
House.belongsTo(City, { onDelete: "CASCADE" })

User.belongsToMany(City, { through: House });
City.belongsToMany(User, { through: House });

export {User, House, City}

// ************* ENDPOINTS HERE ************************
server.use(express.json())
server.use("/users", userRouter)
server.use("/houses", houseRouter)
server.use("/cities", cityRouter)



// ************* ENDPOINTS ENDS HERE ************************


// ************** TABLE CONNECTIONS ENDS HERE *********************
server.listen(port, async()=> {
    console.log(`Server is running on port ${port}`)
    console.table(listEndpoints(server))
    await testDB()
    await sequelize.sync()
})





