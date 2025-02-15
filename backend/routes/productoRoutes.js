const express = require("express");
const router = express.Router();
const Producto = require("../models/Producto");
const authMiddleware = require("../middlewares/authMiddleware");

// Obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
});

// Obtener un producto por ID
router.get("/:id", async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.json(producto);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto", error });
    }
});

// Crear un producto (protegido)
router.post("/", authMiddleware, async (req, res) => {
    try {
        const newProducto = new Producto({ ...req.body, user: req.userId });
        await newProducto.save();
        res.status(201).json(newProducto);
    } catch (error) {
        res.status(500).json({ message: "Error al crear el producto", error });
    }
});

module.exports = router;