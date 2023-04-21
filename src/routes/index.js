// const newsRouter = require("./news");
const adminRouter = require("./admin");
const coursesRouter = require("./courses");
const siteRouter = require("./site");
const cartsRouter = require("./carts");
const feedbackRouter = require("./feedbacks");
function route(app) {
  app.use("/feedback", feedbackRouter);
  app.use("/carts", cartsRouter);
  app.use("/admin", adminRouter);
  app.use("/courses", coursesRouter);
  app.use("/", siteRouter);
}
module.exports = route;
