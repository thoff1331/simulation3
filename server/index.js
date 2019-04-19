require("dotenv").config();
const express = require("express");
const massive = require("massive");
const ct = require("./controller");

const app = express();
const { CONNECTION_STRING, SERVER_PORT } = process.env;
massive(CONNECTION_STRING)
  .then(
    dbInstance => console.log("database connected") || app.set("db", dbInstance)
  )
  .catch(err => console.log(err));

app.use(express.json());

app.delete("/api/teams/:id", ct.deleteTeam);
app.get("/api/teams", ct.getAll);
app.post("/api/teams", ct.addTeam);
app.put("/api/teams/:id", ct.editTeam);
app.get("/api/teams/:id", ct.getTeam);

//
app.get("/api/homes", ct.getHomes);
app.post("/api/homes", ct.addHomes);
app.delete("/api/homes/:id", ct.deleteOne);

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port ${SERVER_PORT}`)
);
