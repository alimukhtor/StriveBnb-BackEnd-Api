import sequelize from "../../connect.js";

import { DataTypes } from "sequelize";

const City = sequelize.define("city", {
    id:{
        primaryKey:true,
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }

})

export default City