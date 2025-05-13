import { View } from './view.js';
import { ContactesViewModel } from './viewmodel.js';
import { LlistaContactes } from './model.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Iniciant Gestor de Contactes MVVM amb API...');

    const model = new LlistaContactes();
    const viewModel = new ContactesViewModel(model);

    const app = Vue.createApp(View(viewModel));
    app.mount('#app');

    console.log('Vue.js amb MVVM inicialitzat correctament.');
});
