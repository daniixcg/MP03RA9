import { LlistaContactes } from './model.js';

export class ViewModel {
    constructor(view) {
        this.llistaContactes = new LlistaContactes();
        this.view = view; // Referencia al objeto View
    }

    async carregarContactes() {
        try {
            this.contactes = await this.llistaContactes.fetchContactes();
            this.view.mostrarContactes(this.contactes);
        } catch (error) {
            console.error('Error al carregar contactes:', error);
        }
    }

    async afegirContacte(contacteData) {
        try {
            this.llistaContactes.addContacte(contacteData);
            this.view.mostrarContactes(this.contactes);
        } catch (error) {
            console.error('Error al afegir contacte:', error);
        }
    }

    async eliminarContacte(id) {
        try {
            this.llistaContactes.deleteContacte(id);
            this.view.mostrarContactes(this.llistaContactes.contactes);
        } catch (error) {
            console.error('Error al eliminar contacte:', error);
        }
    }

    async editarContacte(contacteData) {
        try {
            const contacteActualitzat = await this.llistaContactes.updateContacte(contacteData);
            this.contactes = this.contactes.map(c => c._id === contacteActualitzat._id ? contacteActualitzat : c);
            this.view.mostrarContactes(this.contactes);
        } catch (error) {
            console.error('Error al editar contacte:', error);
        }
    }
}
