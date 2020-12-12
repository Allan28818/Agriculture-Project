const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img_url:{
        type: String
    }

    ,
    price: {
        type: Number,
        required: true
    },
    DDI: {
        type: String,
        required: true
    },
    DDD: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    maping: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true
    },

    type: Array
});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);