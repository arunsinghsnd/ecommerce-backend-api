const Category = require("../models/category");
const slugify = require("slugify");

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);
  cat.save((error, category) => {
    if (error) return res.status(400).json({ error: error });
    if (category) {
      return res.status(200).json({ category });
    }
  });
};

exports.getCategory = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (error) return res.status(400).json({ error: error });

    if (categories) {
      res.status(200).json({ categories });
    }
  });
};
