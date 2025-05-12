const Contact = require('../models/contact');

// GET tots els contactes
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtenir els contactes' });
    }
};

exports.createContacte = async (req, res) => {
    try {
        const { nom, cognoms, telefon, email } = req.body;
        const newContact = new Contact({
            nom,
            cognoms,
            telefon,
            email
        });
        await newContact.save();
        res.status(201).json(newContact);  // Retorna el contacto creado
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el contacte' });
    }
};

exports.updateContacte = async (req, res) => {
    const { id } = req.params;
    const { nom, cognoms, telefon, email } = req.body;
    try {
        const contact = await Contact.findByIdAndUpdate(id, {
            nom, cognoms, telefon, email
        }, { new: true });
        res.json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualitzar el contacte' });
    }
};

exports.deleteContacte = async (req, res) => {
    const { id } = req.params;
    try {
        await Contact.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el contacte' });
    }
};
