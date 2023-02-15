"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path = require('path');
const router = (0, express_1.Router)();
// definir las rutas a las paginas con express   -- HECHO
// enlazar las rutas de las paginas con sus archivos html respectivos 
// armar los html con angular
/*router.get('/login',   function(req, res) {
    res.sendFile(path.join('../public/paginas/login/login.html'))
}) */
router.get('/login', (req, res) => {
    res.send('pagina de l');
});
router.get('/home', (req, res) => {
    res.send('pagina de home');
});
router.get('/reviews', (req, res) => {
    res.send('pagina de reviews');
});
router.get('/listado', (req, res) => {
    res.send('pagina de listado de juegos en cartas');
});
router.get('/*', (req, res) => {
    res.send('pagina de error');
});
exports.default = router;
//# sourceMappingURL=paginas.js.map