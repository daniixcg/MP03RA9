export function View(viewModel) {
    return {
        data() {
            return {
                contacts: [],
                newContact: { nom: '', cognoms: '', telefon: '', email: '' }
            };
        },
        methods: {
            async loadContacts() {
                this.contacts = await viewModel.carregarContactes();
            },
            async addContact() {
                // Validació simple per camps buits
                const { nom, cognoms, telefon, email } = this.newContact;
                if (!nom.trim() || !cognoms.trim() || !telefon.trim() || !email.trim()) {
                    alert('Tots els camps són obligatoris!');
                    return;
                }

                try {
                    await viewModel.afegirContacte(this.newContact);
                    this.newContact = { nom: '', cognoms: '', telefon: '', email: '' };
                    await this.loadContacts();
                } catch (error) {
                    console.error('Error al afegir contacte:', error);
                    alert('Error al afegir contacte. Comprova les dades i intenta-ho de nou.');
                }
            },
            async deleteContact(id) {
                await viewModel.eliminarContacte(id);
                await this.loadContacts();
            },
            editContact(contact) {
                this.newContact = { ...contact };
            },
            async updateContact() {
                await viewModel.actualitzarContacte(this.newContact);
                this.newContact = { nom: '', cognoms: '', telefon: '', email: '' };
                await this.loadContacts();
            }
        },
        mounted() {
            this.loadContacts();
        },
        template: `
            <div id="formdiv">
                <div id="afegirdiv">
                    <h2>Nou Contacte</h2>
                    <label for="nom">Nom:</label>
                    <input v-model="newContact.nom" type="text" id="nom" name="nom">

                    <label for="cognoms">Cognoms:</label>
                    <input v-model="newContact.cognoms" type="text" id="cognoms" name="cognoms">
                    
                    <label for="telefon">Telèfon:</label>
                    <input v-model="newContact.telefon" type="tel" id="telefon" name="telefon">
                    
                    <label for="email">Email:</label>
                    <input v-model="newContact.email" type="email" id="email" name="email">
                    
                    <button @click="addContact">Afegir Contacte</button>
                    <button @click="updateContact">Actualitzar Contacte</button>
                </div>

                <div id="contactsdiv">
                    <h3>Contactes</h3>
                    <ul>
                        <li v-for="contact in contacts" :key="contact.id">
                            <p>{{ contact.nom }} {{ contact.cognoms }} - {{ contact.telefon }} - {{ contact.email }}</p>
                            <button @click="deleteContact(contact.id)">Eliminar</button>
                            <button @click="editContact(contact)">Editar</button>
                        </li>
                    </ul>
                </div>
            </div>
        `
    };
}
