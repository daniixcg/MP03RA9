const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3006;

app.use(cors());
app.use(express.json());

// Conexió a MongoDB
mongoose.connect('mongodb://localhost:27017/gestordb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Connexió a MongoDB correcta'))
  .catch(err => console.error('Error de connexió a MongoDB', err));

// Montar les rutes de l'API
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escoltant al port ${PORT}`);
});
