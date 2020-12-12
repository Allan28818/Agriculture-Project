const mongoose = require('mongoose');

const Note = mongoose.model('Note');

module.exports = {
    async index(req, res) {
        const { page = 1 } = req.query;
        const notes = await Note.find();

        return res.json(notes);
    },

    async show(req, res) {
        const note = await Note.findById(req.params.id);

        return res.json(note);
    },  

    async store(req, res) {
        const note = await Note.create(req.body);

        return res.json(note);
    },

    async update (req, res) {
        const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(note);
    },

    async destroy (req, res) {
        await Note.findByIdAndRemove(req.params.id);

        return res.send();
    }
};