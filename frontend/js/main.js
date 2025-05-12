import { ViewModel } from './viewmodel.js';

const app = Vue.createApp({
  data() {
    return {
      viewModel: new ViewModel()  // ViewModel inicializado directamente
    };
  },
  created() {
    this.viewModel.init();  // Llamar a init para obtener los contactos
  }
});

app.mount('#maindiv');
