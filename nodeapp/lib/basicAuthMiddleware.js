/**
 * este archivo es para protejer datos sensibles
 * 
 * $ nodeapp
 * $ npm install basic-auth
 */

const auth = require('basic-auth');


module.exports = (req, res, next) => {
    // ahora va a quitar en el req ese base64 y lo transforma en un objeto que tenga name y pass (viene en la doc de auth)
    const user = auth(req);

    if (!user || user.name !== 'admin' || user.pass !== '1234') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization required');
        res.sendStatus(401);
        return // no quiero que se ejecute la siguiente linea next(); en otro caso si quiero
      }
    
      next();
}

// para leer los datos base64

