const teams = [
  {
    id: 1,
    name: "Braves"
  },
  {
    id: 2,
    name: "lakers"
  },
  {
    id: 3,
    name: "Huskers"
  }
];

const editTeam = (req, res) => {
  const item = teams.findIndex(team => team.id === 3);
  teams[item].name = req.body.newName;
  res.json(teams);
};
const addTeam = (req, res) => {
  teams.push(req.body);
  res.json(teams);
};

const getAll = (req, res) => {
  res.json(teams);
};
const getTeam = (req, res) => {
  const item = teams.findIndex(team => team.id === +req.params.id);

  res.json(teams[item]);
};

const deleteTeam = (req, res) => {
  console.log(req.body.id);
  const item = teams.findIndex(team => team.id === +req.body.id);
  teams.splice(item, 1);
  res.json(teams);
};
const getHomes = (req, res) => {
  const db = req.app.get("db");
  db.get_Homes()
    .then(homes => res.status(200).json(homes))
    .catch(err => console.log(err));
};
const addHomes = (req, res) => {
  const db = req.app.get("db");
  const { name, address, city, state, zip } = req.body;
  console.log(req.body.name);

  db.add_Homes([name, address, city, state, zip])
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err));
};

const deleteOne = (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  db.delete_home(id)
    .then(homes => res.status(200).json(homes))
    .catch(err => console.log(err));
};

module.exports = {
  deleteTeam,
  getAll,
  addTeam,
  editTeam,
  getTeam,
  getHomes,
  addHomes,
  deleteOne
};
