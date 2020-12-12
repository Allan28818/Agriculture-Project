const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    pests: 
    {
        type: String
    }
    ,


    Country: {
        type: String,
        required: true
        },
    State: {
        type: String,
        required: true    
        },
    City: {
        type: String,
        required: true
    },

    name:  {
        type: String
    },

    plantation_type:  {
        type: String,
        required: true
    },

    size:  {
        type: Number
    },
    
    distance:  {
        type: Number
    },

    gains_and_losses:  {
        type: Number
    },

    vending: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type: Array
});

NoteSchema.plugin(mongoosePaginate);

mongoose.model('Note', NoteSchema);