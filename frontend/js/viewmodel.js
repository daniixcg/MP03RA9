import { Model } from './model.js';

export class ViewModel {
  constructor() {
    this.model = new Model();
    this.newContact = {
      nom: '',
      cognoms: '',
      telefon: '',
      email: ''
    };
    this.contacts = []; // Esto debe ser reactivo
  }

  async init() {
    this.contacts = await this.model.fetchContacts(); // Llamada para obtener los contactos
  }

  async addContact() {
    const addedContact = await this.model.addContact(this.newContact);
    this.contacts.push(addedContact);  // Añadir el nuevo contacto
    this.newContact = { nom: '', cognoms: '', telefon: '', email: '' }; // Limpiar formulario
  }

  async deleteContact(contactId) {
    await this.model.deleteContact(contactId);
    this.contacts = this.contacts.filter(contact => contact._id !== contactId);
  }

  async editContact(contact) {
    this.newContact = { ...contact }; // Cargar contacto para editar
  }
}
