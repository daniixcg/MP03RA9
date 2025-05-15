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
            validarContacte({ nom, cognoms, telefon, email }) {
                if (!nom.trim() || !cognoms.trim() || !telefon.trim() || !email.trim()) {
                    alert('Tots els camps són obligatoris!');
                    return false;
                }
                const textRegex = /^[A-Za-zÀ-ÿ\s]+$/;
                if (!textRegex.test(nom)) {
                    alert('El nom només pot contenir lletres i espais.');
                    return false;
                }
                if (!textRegex.test(cognoms)) {
                    alert('Els cognoms només poden contenir lletres i espais.');
                    return false;
                }
                const phoneRegex = /^\d+$/;
                if (!phoneRegex.test(telefon)) {
                    alert('El telèfon només pot contenir números.');
                    return false;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    alert('El correu electrònic no té un format vàlid.');
                    return false;
                }
                return true;
            },
            async addContact() {
                if (!this.validarContacte(this.newContact)) return;
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
                if (!this.validarContacte(this.newContact)) return;
                try {
                    await viewModel.actualitzarContacte(this.newContact);
                    this.newContact = { nom: '', cognoms: '', telefon: '', email: '' };
                    await this.loadContacts();
                } catch (error) {
                    console.error('Error al actualitzar contacte:', error);
                    alert('Error al actualitzar contacte. Comprova les dades i intenta-ho de nou.');
                }
            }
        },
        mounted() {
            this.loadContacts();
        },
        template: `
            <div id="maindiv">
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
                        
                        <div style="margin-top:16px; display:flex; gap:10px; justify-content:flex-end;">
                            <button @click="addContact">Afegir Contacte</button>
                            <button @click="updateContact">Actualitzar Contacte</button>
                        </div>
                    </div>
                </div>
                <div id="contactsdiv">
                    <h3>Contactes</h3>
                    <ul>
                        <li v-for="contact in contacts" :key="contact.id">
                            <p>
                                <strong>{{ contact.nom }} {{ contact.cognoms }}</strong><br>
                                <span>{{ contact.telefon }}</span> | <span>{{ contact.email }}</span>
                            </p>
                            <div class="contact-actions">
                                <button @click="editContact(contact)">Editar</button>
                                <button @click="deleteContact(contact.id)">Eliminar</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        `
    };
}
