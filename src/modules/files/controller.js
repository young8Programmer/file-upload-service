const { get } = require("../categories/routes");
const path = require("path")
// kod strukturasini yaxshilash

const getme = (req, res) => {
    let { name } = req.params
// kod formatlash va indentatsiya
// CI/CD pipeline sozlandi
    let imagesPath = path.join(process.cwd(), "uploads", name)
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