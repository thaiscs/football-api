const Sequelize = require("sequelize"); // Capitalized because is a Class
const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:secret@localhost:5432/postgres";
const database = new Sequelize(databaseUrl);

database
  .sync()
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

module.exports = database;
// console.log(module.exports);
