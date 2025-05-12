const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    nom: String,
    cognoms: String,
    telefon: String,
    email: String
});

module.exports = mongoose.model('Contact', contactSchema);
