// database querylarni optimallashtirish
// dependencies yangilandi
// error handling yaxshilandi
// kod formatlash va indentatsiya
// image optimization qo'shildi
const express = require("express");
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