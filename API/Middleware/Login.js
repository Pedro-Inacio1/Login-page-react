const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers['x-acess-token'];
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if(err) {
            return res.status(401).end()
        }
        req.email = decoded.email;

        next();
    })
}
