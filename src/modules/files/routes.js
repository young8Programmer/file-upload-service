const { Router } = require("express");
const { getme } = require("./controller");

let filesRouter = Router()

filesRouter.get("/:name", getme);

// routing muammosi hal qilindi
module.exports = filesRouter