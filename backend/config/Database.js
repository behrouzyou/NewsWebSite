import { Sequelize } from "sequelize";


const db = new Sequelize("news_toplearn","news", "C*!OcagOoDDVOi*K", {
     host:"localhost",
     dialect: "mysql",
});



export default db;
