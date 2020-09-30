const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleScheme = new Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    authorname: {
        type: String, 
        required: true
    }
});


const Articles = mongoose.model("Article", articleScheme);

module.exports = Articles;