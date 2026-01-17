const { get } = require("../categories/routes");
const path = require("path")

const getme = (req, res) => {
    let { name } = req.params
// kod formatlash va indentatsiya
// CI/CD pipeline sozlandi
    let imagesPath = path.join(process.cwd(), "uploads", name)
    res.sendFile(imagesPath, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    getme
}