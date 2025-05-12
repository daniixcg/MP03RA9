const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/contactesdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connexió a MongoDB correcta');
  } catch (error) {
    console.error('Error de connexió a MongoDB:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
