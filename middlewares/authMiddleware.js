const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) {
        return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId; // Añadimos el ID del usuario al request
        next(); // Continuamos con la siguiente función (la ruta)
    } catch (error) {
        res.status(400).json({ error: "Token inválido." });
    }
};

module.exports = authMiddleware;