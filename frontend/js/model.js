const API_URL = "http://localhost:3000/api/contactes";

export class Contacte {
  constructor(id, nom, cognoms, telefon, email) {
    this.id = id;
    this.nom = nom;
    this.cognoms = cognoms;
    this.telefon = telefon;
    this.email = email;
  }
}

export class LlistaContactes {
  constructor() {
    this.contactes = [];
  }

  async fetchContactes() {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Error al obtenir els contactes');
      const data = await response.json();
      this.contactes = data.map(c => new Contacte(c._id, c.nom, c.cognoms, c.telefon, c.email));
      return this.contactes;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  async addContacte(contacte) {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: contacte.nom,
          cognoms: contacte.cognoms,
          telefon: contacte.telefon,
          email: contacte.email
        })
      });
      if (!response.ok) throw new Error('Error al afegir el contacte');
      const data = await response.json();
      const newContact = new Contacte(data._id, data.nom, data.cognoms, data.telefon, data.email);
      this.contactes.push(newContact);
      return newContact;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteContacte(contacteId) {
    try {
      const response = await fetch(`${API_URL}/${contacteId}`, {
        method: 'DELETE'
      });
      if (!response.ok) throw new Error('Error al eliminar el contacte');
      this.contactes = this.contactes.filter(c => c.id !== contacteId);
    } catch (error) {
      console.error(error);
    }
  }

  async updateContacte(contacte) {
    try {
      const response = await fetch(`${API_URL}/${contacte.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nom: contacte.nom,
          cognoms: contacte.cognoms,
          telefon: contacte.telefon,
          email: contacte.email
        })
      });
      if (!response.ok) throw new Error('Error al actualitzar el contacte');
      const data = await response.json();
      // Actualitzar la llista local
      const index = this.contactes.findIndex(c => c.id === contacte.id);
      if (index !== -1) {
        this.contactes[index] = new Contacte(data._id, data.nom, data.cognoms, data.telefon, data.email);
      }
    } catch (error) {
      console.error(error);
    }
  }

  getContacteById(id) {
    return this.contactes.find(c => c.id === id);
  }
}
