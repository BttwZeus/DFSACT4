const Producto = require("../models/Producto");

const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};

const createProducto = async (req, res) => {
    try {
        const newProducto = new Producto(req.body);
        await newProducto.save();
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error });
    }
};

module.exports = { getProductos, createProducto };