"use strict";
//los controladores son simples funciones que se llaman despues, los funciones crud (create,read,update, destroy) se definen aca y se exportan a routes
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.json(usuarios);
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id); //   buscar usuario por id 
    if (usuario) {
        res.json(usuario);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id  ${id}`
        });
    }
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // para hacer las verificaciones de usuario,email y password manejar en frontend , para que no deje que envie si no tiene los campos llenos
    // ya se configuro desde sql evitar duplicados de email y usuarios , --HECHO 
    // necesito hacer validaciones desde sql para que no se envie si no tiene los campos requeridos  , not null  -- HECHO
    // puede tener problemas con el login y put, al enviar datos de un usuario duplicado en la DB
    const { body } = req;
    try {
        const existeEmail = yield usuario_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }
        const existeUsuario = yield usuario_1.default.findOne({
            where: {
                nombre: body.nombre
            }
        });
        if (existeUsuario) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el user ' + body.nombre
            });
        }
        const usuario = yield usuario_1.default.create(body);
        yield usuario.save();
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        if (!usuario) {
            return res.status(404).json({
                msg: 'No existe un usuario con el id ' + id
            });
        }
        yield usuario.update(body);
        //cambiar el body para que el usuario solo pueda cambiar user,email y password pero no el estado;  el admin cambia el estado con el delete
        // video 263
        // update: consultar con ezus como hacer para que no se pueda modificar estado del usuario pipipi
        res.json(usuario);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
    // usar verificacion por webtoken si el user es hackeado
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // eliminacion fisica = borrar el usuario desde la db
    // eliminacion logica = actualizar el usuario a estado = 0 en la db, manteniendo la integridad referencial
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: 'No existe un usuario con el id ' + id
        });
    }
    yield usuario.update({ estado: 0 }); //eliminacion logica, pasar el estado del usuario a 0 
    // await usuario.destroy(); 
    //  eliminacion fisica, dejando registros huerfanos , constrains
    res.json(usuario);
});
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map