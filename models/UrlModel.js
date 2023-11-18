const { truncate } = require('fs')
const mongoose = require('mongoose')
const shortID = require('shortid')


const UrlSchema = new mongoose.Schema({
    fullUrl : {
        type: String,
        required : true
    },
    shortUrl: {
        type: String,
        required : true,
        default: ()=> shortID.generate()
    },
    clicks: {
        type : Number,
        required : true,
        default : 0
    }
})

module.exports = mongoose.model('Urls', UrlSchema)