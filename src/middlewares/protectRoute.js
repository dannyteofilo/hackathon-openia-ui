// middlewares/authMiddleware.js

const protectRoute = (req, res, next) => {
    const isRegistered = true;

    if (!isRegistered) {
        return res.status(403).send("Acceso denegado");
    }

    next();
}

module.exports = { protectRoute };
