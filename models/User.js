const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { // El nombre de usuario es obligatorio
        type: String,
        required: true,
    },
    email: { // El email es obligatorio y debe ser único en la colección
        type: String,
        required: true,
        unique: true
    },
    password: { // La constraseña es obligatoria
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);