// database testlari qo'shildi
// API endpoint testlari qo'shildi
// componentlarni qayta tashkilash
// CORS xatosi tuzatildi
// routing muammosi hal qilindi
const { Router } = require("express");
const { getme } = require("./controller");

// ESLint qoidalariga moslashtirish
let filesRouter = Router()

filesRouter.get("/:name", getme);

// routing muammosi hal qilindi
module.exports = filesRouter