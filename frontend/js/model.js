class Model {
  constructor() {
    this.contacts = [];
  }

  async fetchContacts() {
    try {
      const response = await fetch('http://localhost:3000/api/contactes');
      this.contacts = await response.json();
      return this.contacts;  // Devuelvo los contactos obtenidos
    } catch (error) {
      console.error('Error al obtener los contactos:', error);
    }
  }

  async addContact(contact) {
    try {
      const response = await fetch('http://localhost:3000/api/contactes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact)
      });
      const newContact = await response.json();
      return newContact;  // Devolver el nuevo contacto
    } catch (error) {
      console.error('Error al agregar el contacto:', error);
    }
  }

  async deleteContact(contactId) {
    try {
      await fetch(`http://localhost:3000/api/contactes/${contactId}`, {
        method: 'DELETE'
      });
    } catch (error) {
      console.error('Error al eliminar el contacto:', error);
    }
  }
}

export { Model };
