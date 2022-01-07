import {Sequelize} from 'sequelize'

const {DATABASE_URL} = process.env


 const sequelize = new Sequelize(DATABASE_URL, {dialect: "postgres",
    dialectOptions: {       
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    }
})



 export const testDB = async () => {
    try {
      await sequelize.authenticate({ logging: false });
      console.log("Can be established");
    } catch (error) {
      console.log(error);
    }
  };

  export default sequelize
  