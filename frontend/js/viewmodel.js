export class ContactesViewModel {
    constructor(model) {
        this.model = model;
    }

    async carregarContactes() {
        return await this.model.fetchContactes();
    }

    async afegirContacte(contacte) {
        await this.model.addContacte(contacte);
    }

    async eliminarContacte(id) {
        await this.model.deleteContacte(id);
    }

    async actualitzarContacte(contacte) {
        await this.model.updateContacte(contacte);
    }
}
