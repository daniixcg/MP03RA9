import { ViewModel } from './viewmodel.js';
import { View } from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    const viewModel = new ViewModel();
    const view = new View(viewModel);
    view.initialize();
});
