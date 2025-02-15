const { getProductos } = require("../controllers/productoController");
const Producto = require("../models/Producto");

describe("getProductos", () => {
    it("debería obtener todos los productos", async () => {
        const mockProductos = [{ title: "Producto 1" }, { title: "Producto 2" }];
        Producto.find = jest.fn().mockResolvedValue(mockProductos);

        const req = {};
        const res = { json: jest.fn() };

        await getProductos(req, res);
        expect(res.json).toHaveBeenCalledWith(mockProductos);
    });
});