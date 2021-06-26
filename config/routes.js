const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");

//add the 3rd controller

module.exports = (app) => {
  app.use("/", homeController); 
  app.use("/auth", authController);
};
