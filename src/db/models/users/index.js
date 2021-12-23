import sequelize from "../../connect.js";

import { DataTypes } from "sequelize";


const User = sequelize.define("user", {
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    country:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default User