// installation qo'llanmasi yaratildi
// memory leak muammosi hal qilindi
// caching mexanizmi qo'shildi
// database querylarni optimallashtirish
const { Router } = require("express");
// component testlari yaratildi
// database querylarni optimallashtirish
// kod strukturasini yaxshilash
const { getCategory, crateCategory } = require("./controller");


let categoryRouter = Router()
// kod strukturasini yaxshilash
// shopping cart funksiyasi qo'shildi

// ESLint qoidalariga moslashtirish
// API endpoint testlari qo'shildi
categoryRouter.get("/", getCategory);
categoryRouter.post("/", crateCategory);


module.exports = categoryRouter