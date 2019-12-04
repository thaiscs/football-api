const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (request, response) => response.send("Football API"));
app.listen(4000, () => console.log(`Football API listening on ${port}`));

const database = require("./database");
