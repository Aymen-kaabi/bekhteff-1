const Sequelize = require("sequelize");

const sequelize = new Sequelize("bekhtef", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
sequelize.sync();

module.exports = sequelize;