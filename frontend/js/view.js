export class View {
  // La vista no necesita referirse directamente al DOM
  renderContacts(contacts) {
    return contacts.map(contact => {
      return `
        <li>
          <p>${contact.nom} ${contact.cognoms} - ${contact.telefon} - ${contact.email}</p>
          <button @click="viewModel.deleteContact(contact._id)">Eliminar</button>
          <button @click="viewModel.editContact(contact)">Editar</button>
        </li>
      `;
    }).join('');
  }
}
