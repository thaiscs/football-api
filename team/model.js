const Sequelize = require("sequelize"); // Capitalized because is a Class
const database = require("../database");

const Team = database.define(
  "team",
  {
    name: { type: Sequelize.STRING, field: "team_name" }
  },
  { tableName: "football_teams" },
  { timestamps: false }
);

module.exports = Team;
// console.log(module.exports);
