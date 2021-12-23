import {Sequelize} from 'sequelize'

import {DB_URL} from process.env



export const sequelize = new Sequelize(DB_URL, {dialect: "postgres"},)



export const testDB = async () => {
    try {
      await sequelize.authenticate({ logging: false });
      console.log("Can be established");
    } catch (error) {
      console.log(error);
    }
  };


  