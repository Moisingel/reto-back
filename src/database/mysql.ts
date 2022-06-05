import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../../.env" });
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || "dbvicam",
  process.env.MYSQL_USER || "root",
  process.env.MYSQL_PASSWORD || "",
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
  }
);

// sequelize.authenticate().then(() => {
//     console.log("conexión DB ok");
// }).catch(error => {
//     console.log("error:",error);
// });

export default sequelize;
