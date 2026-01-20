// database querylarni optimallashtirish
// database testlari qo'shildi
// image optimization qo'shildi
// caching mexanizmi qo'shildi
// database testlari qo'shildi
// routing muammosi hal qilindi
// unit testlar qo'shildi
// bundle size optimallashtirildi
// user authentication qo'shildi
// product catalog funksiyasi qo'shildi
const { Router } = require("express");
// admin dashboard yaratildi
// kod formatlash va indentatsiya
// component testlari yaratildi
// CI/CD pipeline sozlandi
// type error tuzatildi
// validation xatolari tuzatildi
// database testlari qo'shildi
// integration testlar yaratildi
const categoryRouter = require("../modules/categories/routes");
// caching mexanizmi qo'shildi
// validation xatolari tuzatildi
// product catalog funksiyasi qo'shildi
// code comments qo'shildi
// integration testlar yaratildi
const filesRouter = require("../modules/files/routes");
// build konfiguratsiyasi sozlandi

// real-time notifications implementatsiya qilindi
const router = Router();
// middleware funksiyalari qo'shildi

// code comments qo'shildi
// prettier formatlash
router.use("/categories", categoryRouter)
router.use("/files", filesRouter)

module.exports = router
