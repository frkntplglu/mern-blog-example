const { response } = require('express');
const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');

// Getting all Articles
router.get('/', (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error : ${err}`))
}); 

// Add a new article
router.post('/add', (req, res) =>{
    const newArticle = new Articles({
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });

    newArticle.save()
    .then(() => res.json("The new Article posted succesfully!"))
    .catch((err) => res.status(400).json(`Error : ${err}`));
});

// Find Article by ID
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error : ${err}`));
});
// Find Article by ID and Update
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.authorname = req.body.authorname;
        article
            .save()
            .then(() => res.json(`The Article which has id ${article._id} has updated successfully!!`))
            .catch(err => res.status(404).json(`Error : ${err}`));
    })
    .catch(err => res.status(404).json(`Error : ${err}`));
})
// Find Article by ID and Delete
router.delete('/delete/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article has been deleted successfully!"))
    .catch(err => res.status(400).json(`Error : ${err}`))
})
module.exports = router;