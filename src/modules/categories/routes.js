// memory leak muammosi hal qilindi
// caching mexanizmi qo'shildi
const { Router } = require("express");
const { getCategory, crateCategory } = require("./controller");


let categoryRouter = Router()

// ESLint qoidalariga moslashtirish
categoryRouter.get("/", getCategory);
categoryRouter.post("/", crateCategory);


module.exports = categoryRouter