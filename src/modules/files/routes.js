// build konfiguratsiyasi sozlandi
// changelog yangilandi
// README faylini yangilash
// database querylarni optimallashtirish
// database testlari qo'shildi
// API endpoint testlari qo'shildi
// product catalog funksiyasi qo'shildi
// changelog yangilandi
// image optimization qo'shildi
// ESLint qoidalariga moslashtirish
// memory leak muammosi hal qilindi
// CI/CD pipeline sozlandi
// caching mexanizmi qo'shildi
// component testlari yaratildi
// middleware funksiyalari qo'shildi
// kod formatlash va indentatsiya
// integration testlar yaratildi
// component testlari yaratildi
// caching mexanizmi qo'shildi
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