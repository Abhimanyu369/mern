const Category = require("../models/category")

exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
        if(err){
            return res.status(400).json({
                error: "Category Not Found!"
            })
        }
        req.Category = cate
    })
    next()
}

exports.createCategory = (req, res) => {
    const category = new Category(req.body)
    category.save((err, category)=>{
        if(err){
            return res.status(400).json({
                error: "Not able to save category in DB"
            })
        }
        req.json({category})
    })
}
exports.getCategory = (req, res) => {
    return res.json(req.category)
}
exports.getAllCategory = (req, res) => {
    Category.find().exec((err, category) => {
        if(err){
            return res.status(400).json({
                error: "No categories found!"
            })
        }
        res.json(category)
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category
    category.name = req.body.name

    category.save((err, updatedCategory)=>{
        if(err){
            return res.status(400).json({
                error: "fail to update Category"
            })
        }
        res.json(updatedCategory)
    })
}