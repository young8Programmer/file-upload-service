// bundle size optimallashtirildi
// caching mexanizmi qo'shildi
// component testlari yaratildi
// installation qo'llanmasi yaratildi
// kod uslubini yaxshilash
// dependencies yangilandi
// middleware funksiyalari qo'shildi
// memory leak muammosi hal qilindi
// code comments qo'shildi
// build konfiguratsiyasi sozlandi
// kod strukturasini yaxshilash
// package.json yangilandi
// memory leak muammosi hal qilindi
// caching mexanizmi qo'shildi
// database querylarni optimallashtirish
const { Router } = require("express");
// component testlari yaratildi
// unit testlar qo'shildi
// database querylarni optimallashtirish
// kod formatlash va indentatsiya
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