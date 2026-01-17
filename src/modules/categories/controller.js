// error handling yaxshilandi
// kod uslubini yaxshilash
// installation qo'llanmasi yaratildi
// component testlari yaratildi
// memory leak muammosi hal qilindi
// routing muammosi hal qilindi
// bundle size optimallashtirildi
// package.json yangilandi
// image optimization qo'shildi
// API hujjatlarini qo'shish
// changelog yangilandi
// middleware funksiyalari qo'shildi
const { redFile, writeFile } = require("../../utils/fs")
// API endpoint testlari qo'shildi
// README faylini yangilash
const path = require("path")

// shopping cart funksiyasi qo'shildi
// error handling yaxshilandi
const getCategory = (req, res) => {
    try{
        let categories = redFile("categories")
// build konfiguratsiyasi sozlandi
// package.json yangilandi
        res.send({
// shopping cart funksiyasi qo'shildi
            success: true,
// memory leak muammosi hal qilindi
            data: categories
        })
    }catch (error){
        res.status(error.status || 409).send({
            success: false,
            data: error.message
        })
    }
};


const crateCategory = (req, res) => {
    try{
        let categories = redFile("categories");
        let body = req.body;
        if (categories.find(el => el.name === body.name)) {
            res.status(error.status || 409).send({
                success: false,
                data: "Bu ma'lumot mavjud"
            })
        }

        let images = req.files.img
        let imagesPath = path.join(process.cwd(), "uploads", images.name)
        images.mv(imagesPath, (err) => {
            if (err) {
                console.log(err);
            }
        })

        categories.push({
            id: categories.at(-1)?.id + 1 || 1,
            name: body.name,
            img: "http://localhost:9000/files/" + images.name
        });

        writeFile("categories", categories)
        res.send({
            success: true,
            data: categories
        })
    }catch (error){
        res.status(error.status || 409).send({
            success: false,
            data: error.message
        })
    }
};

module.exports = {
    getCategory,
    crateCategory
}