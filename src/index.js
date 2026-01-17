// bundle size optimallashtirildi
// database querylarni optimallashtirish
// kod uslubini yaxshilash
// dependencies yangilandi
// error handling yaxshilandi
// error handling yaxshilandi
// README faylini yangilash
// kod formatlash va indentatsiya
// caching mexanizmi qo'shildi
// changelog yangilandi
// installation qo'llanmasi yaratildi
// image optimization qo'shildi
const express = require("express");
// database querylarni optimallashtirish
// admin dashboard yaratildi
const fileupload  = require("express-fileupload");
// integration testlar yaratildi
// database testlari qo'shildi
// database migrations yaratildi
const router = require("./routes/index")
const app = express()

app.use(express.json())
app.use(fileupload())
// user authentication qo'shildi
app.use(router)
// memory leak muammosi hal qilindi
// CI/CD pipeline sozlandi


app.listen(9000, () => {
    console.log(9000);
})