const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection');

const connection = dbConnection();

router.get('/',(req, res)=>{
    res.render('index')

});

router.get('/login',(req, res, next)=>{
    res.render('login')

});

//recibir login
router.post('/login', function(req, res) {
    var correo = req.body.correo;
    var clave = req.body.clave;

    res.send(correo + ' ' + clave);
});

router.get('/register',(req, res, next)=>{
    res.render('register')

});

//recibir registro
router.post('/register', function(req, res) {
    const cedula = req.body.cedula;
    const correo = req.body.correo;
    const clave = req.body.clave;

    connection.query('INSET INTO usuario SET ? ',
    {
        cedula,
        correo,
        clave
    }
    , (err, result) => {
        res.redirect('/login');
    })
});

router.get('/menu',(req, res, next)=>{
    res.render('menu')

});

router.get('/reporte',(req, res, next)=>{
    res.render('reporte', { title: 'Reporte de Siniestro'})

});

router.get('/grua',(req, res, next)=>{
    res.render('grua', { title: 'Grua'})

});

module.exports = router;