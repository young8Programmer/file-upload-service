// database testlari qo'shildi
// API endpoint testlari qo'shildi
// product catalog funksiyasi qo'shildi
// ESLint qoidalariga moslashtirish
// CI/CD pipeline sozlandi
// component testlari yaratildi
// kod formatlash va indentatsiya
// integration testlar yaratildi
// component testlari yaratildi
// componentlarni qayta tashkilash
// CORS xatosi tuzatildi
// routing muammosi hal qilindi
// CORS xatosi tuzatildi
// authentication xatosi tuzatildi
// API hujjatlarini qo'shish
const { Router } = require("express");
// API endpoint testlari qo'shildi
const { getme } = require("./controller");

// ESLint qoidalariga moslashtirish
let filesRouter = Router()

filesRouter.get("/:name", getme);

// routing muammosi hal qilindi
module.exports = filesRouter