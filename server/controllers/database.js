require("dotenv").config({ path: "../.env" });
const { DATABASE_URL } = process.env;
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const date = new Date();

const saltRounds = 10;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  define: { timestamps: false },
});
async function login(req, res) {
  let { username, password } = req.body;

  await sequelize
    .query(`select * from users where email = '${username}';`)
    .then((user) => {
      user = user[0][0];
      if (!user) {
        return res.status(401).send("Email not found, please register");
      }
      let isAuth = bcrypt.compareSync(password, user.password);
      if (!isAuth) {
        return res.status(401).send("incorrect password");
      }

      return res.status(200).send({ username: user.email });
    });
}

function register(req, res) {
  let { username, password } = req.body;

  bcrypt.hash(password, saltRounds, async function (err, hash) {
    console.log(err);

    await sequelize
      .query(
        `
        insert into users(email, password) values('${username}', '${hash}');
        `
      )
      .then(() => {
        console.log("users info submitted");
        res.status(200).send("Registered, please login");
      });
  });
}

async function saveTrail(req, res) {
  let { username, id } = req.body;
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let user_ID;
  let fullDate = `${year}-${month}-${day}`;
  await sequelize
    .query(`select user_id from users where email='${username}';`)
    .then((dbRes) => {
      user_ID = dbRes[0][0].user_id;
    });
  await sequelize
    .query(
      `
      insert into saved_trails (user_id, trail_id, saved_on)
      values(${user_ID}, ${id}, '${fullDate}');
      `
    )
    .then(res.status(200).send("Trail Saved"));
}

async function getTrails(req, res) {
  await sequelize
    .query(
      `
    select * from trails order by trail_id asc;
  `
    )
    .then((dbRes) => {
      console.log("trails received");
      res.status(201).send({ trailsInfo: dbRes[0] });
    });
}

async function getSavedTrails(req, res) {
  let { username } = req.body;
  let user_ID;

  if (username === null) {
    res.status(200).send("Please Login");
  } else {
    await sequelize
      .query(`select user_id from users where email='${username}'`)
      .then((dbRes) => {
        user_ID = dbRes[0][0].user_id;
      });
    await sequelize
      .query(
        `
  select saved_trails.trail_id, trails.name, trails.difficulty, trails.distance, trails.climb, trails.climb, trails.descent, trails.location from saved_trails inner join trails on saved_trails.trail_id=trails.trail_id where saved_trails.user_id=${user_ID};
  `
      )
      .then((dbRes) => {
        console.log("Saved Trails Sent");
        res.status(200).send({ trailsInfo: dbRes[0] });
      });
  }
}

module.exports = {
  login,
  register,
  saveTrail,
  getTrails,
  getSavedTrails,
};
