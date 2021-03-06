const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token,'javascriptislove');
        req.userData = decoded;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({message: 'You are not logged in!'});
        console.log(error)
    }
}