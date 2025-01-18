const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { // El nombre del producto es obligatorio y es de tipo texto.
        type: String,
        required: true
    },
    price: { // El precio es obligatorio y es de tipo numérico.
        type: Number,
        required: true
    },
    description: { // La descripción no es obligatoria. Tipo texto.
        type: String
    },
    stock: { // El inventario es numérico y si no se especifica, será 0 por defecto.
        type: Number,
        default: 0
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);