import {Sequelize} from 'sequelize'

const {URL} = process.env


 const sequelize = new Sequelize(URL, {dialect: "postgres",
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
  