export class View {
    constructor(viewModel) {
        this.viewModel = viewModel;
        this.viewModel.view = this; // Vinculamos el ViewModel con el View
        this.newContact = { nom: '', cognoms: '', telefon: '', email: '' }; // Para el formulario

        this.addContactButton = document.querySelector('#afegirdiv button');
        this.contactListContainer = document.querySelector('#contactsdiv ul');

        this.addContactButton.addEventListener('click', this.handleAddContact.bind(this));
        this.initialize();
    }

    initialize() {
        // Cargar contactos al inicio
        this.viewModel.carregarContactes();
    }

    mostrarContactes(contactos) {
        this.contactListContainer.innerHTML = ''; // Limpiar la lista
        // Renderizar la lista de contactos
        contactos.forEach(contact => {
            const contactItem = document.createElement('li');
            contactItem.innerHTML = `
                <p>${contact.nom} ${contact.cognoms} - ${contact.telefon} - ${contact.email}</p>
                <button class="edit-btn" data-id="${contact._id}">Editar</button>
                <button class="delete-btn" data-id="${contact._id}">Eliminar</button>
            `;

            contactItem.querySelector('.edit-btn').addEventListener('click', () => this.handleEditContact(contact));
            contactItem.querySelector('.delete-btn').addEventListener('click', () => this.handleDeleteContact(contact._id));

            this.contactListContainer.appendChild(contactItem);
        });
    }

    handleAddContact() {
        const contacteData = {
            nom: this.newContact.nom,
            cognoms: this.newContact.cognoms,
            telefon: this.newContact.telefon,
            email: this.newContact.email
        };

        this.viewModel.afegirContacte(contacteData);
        // Limpiar formulario
        this.newContact = { nom: '', cognoms: '', telefon: '', email: '' };
    }

    handleEditContact(contact) {
        // Llenar el formulario con los datos del contacto
        this.newContact = { ...contact };
    }

    handleDeleteContact(contactId) {
        this.viewModel.eliminarContacte(contactId);
    }
}
