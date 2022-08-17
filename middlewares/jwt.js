const jwt = require ('jsonwebtoken');
const TOKEN_SECRET = 'tokenSignature';


//middleware to validate token
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if(!token) {
        return res.status(401).json({error: 'Acceso denegado'})    }
}
try {
    const verified = jwt.verify(token, TOKEN_SECRET)
    req.user = verified
    next()
} catch (error) {
    res.status(400).json({error: 'Token no válido'})
}
module.exports = {
    verifyToken,
    TOKEN_SECRET
};

app.use('/Agregar', (req,res,next)=>{
    if (request.method==='GET'){
       req.username='Silvina','Agustin','User';
       next();
    } else{
        res.send("Para acceder primero debes loguearte");
    }
});
