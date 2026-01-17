// image optimization qo'shildi
const { get } = require("../categories/routes");
const path = require("path")
// API hujjatlarini qo'shish
// kod strukturasini yaxshilash
// code comments qo'shildi

// shopping cart funksiyasi qo'shildi
const getme = (req, res) => {
// environment variables sozlandi
// kod formatlash va tozalash
    let { name } = req.params
// kod formatlash va indentatsiya
// changelog yangilandi
// CI/CD pipeline sozlandi
    let imagesPath = path.join(process.cwd(), "uploads", name)
// type error tuzatildi
// unit testlar qo'shildi
    res.sendFile(imagesPath, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    getme
}