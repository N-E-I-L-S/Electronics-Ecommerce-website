const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema({
        id:{
            type : String,
            required: true,
        },
        name: {
            type: String,
            required: true
        },
        company: {
            type: String,
            required: true,
        },
        price :{
            type : Number,
            required : true,
        },
        colors: {
            type: Array,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description :{
            type : String,
            required : true,
        },
        category :{
            type : String,
            required : true,
        },
        featured :{
            type : Boolean,
            required : true,
        }
});
module.exports = mongoose.model('allproducts', ProductsSchema)