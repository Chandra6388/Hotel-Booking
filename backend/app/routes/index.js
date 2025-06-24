
module.exports = function (app) {
    app.use(require("./authRoutes"));
    app.use(require("./apartmentsRoutes"));
};