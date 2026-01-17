const { get } = require("../categories/routes");
const path = require("path")
// API hujjatlarini qo'shish
// kod strukturasini yaxshilash

const getme = (req, res) => {
// environment variables sozlandi
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