const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {verifyToken, TOKEN_SECRET} = require('../middlewares/validate-jwt');
const router = express.Router();

const usuarios = [];

//Registro usuarios
router.post('/login', (req,res) => {
    
    //hash contraseña
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const newUser = {
        name: req.body.name,
        mail: req.body.mail,
        password: password
    }
    usuarios.push(newUser);
    res.json({success: true, newUser, usuarios});
    //buscamos usuario con mismo mail
    const user = usuarios.find((u) => u.mail === req.body.mail);
    if(!user) {
        return res.status(400).json({error: 'Usuario no encontrado'});
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) {
        return res.status(400).json({error: 'Contraseña no válida'});
    }
    //Crear el token
    const token = jwt.sign({
        name: user.name,
        id: user.id
    }, TOKEN_SECRET);
    res.json({error: null, data: 'Login exitoso', token});
});

//Peticion listar usuarios solo puede hacerla alguien autorizado
router.get('/addpokemon', verifyToken, async (req, res) => {
    // datos del usuario
    console.log(req.user);
    res.json({error: null, usuarios});
});

module.exports = router;