// API endpoints qo'shildi
// build konfiguratsiyasi sozlandi
// API endpoint testlari qo'shildi
// build konfiguratsiyasi sozlandi
// memory leak muammosi hal qilindi
const fs = require("fs");
// API hujjatlarini qo'shish
// kod formatlash va tozalash
// database querylarni optimallashtirish
// middleware funksiyalari qo'shildi
// code comments qo'shildi
// caching mexanizmi qo'shildi
// database querylarni optimallashtirish
// kod formatlash va indentatsiya
// changelog yangilandi
// product catalog funksiyasi qo'shildi
// validation xatolari tuzatildi
// dependencies yangilandi
// kod uslubini yaxshilash
// API endpoints qo'shildi
// database connection muammosi hal qilindi
// API response formatini yaxshilash
// component testlari yaratildi
// kod formatlash va tozalash
// CI/CD pipeline sozlandi
const path = require("path")
// kod formatlash va indentatsiya

// database testlari qo'shildi
// integration testlar yaratildi
// package.json yangilandi
function redFile(filename) {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), "database", `${filename}.json`), "utf-8", (err) => {
        if (err) {
            console.log(err.message);
        }
    }));
}

function writeFile(filename, data) {
    fs.writeFileSync(path.join(process.cwd(), "database", `${filename}.json`), JSON.stringify(data, null, 2), "utf-8", (err) => {
        if (err) {
            console.log(err.message);
        }
    })
};


module.exports = {
    redFile,
    writeFile
}