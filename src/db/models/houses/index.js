import sequelize from "../../connect.js";

import { DataTypes } from "sequelize";

const House = sequelize.define("house", {
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
    },
    location:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    floor:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

export default House