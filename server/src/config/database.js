require("dotenv").config();
const mongoose = require("mongoose");

const dbState = [
  {
    value: 0,
    label: "Disconnected",
  },
  {
    value: 1,
    label: "Connected",
  },
  {
    value: 2,
    label: "Connecting",
  },
  {
    value: 3,
    label: "Disconnecting",
  },
];

const connection = async () => {
  let server = process.env.MONGO_DB_URL_SERVER;
  await mongoose.connect(`${server}`);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find((f) => f.value === state).label, `to database`);
  // connected to db
};
module.exports = connection;
