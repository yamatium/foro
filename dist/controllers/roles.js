"use strict";
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
exports.deleteUserRoles = exports.postUserRoles = exports.getUserRoles = exports.deleteRole = exports.putRole = exports.postRoles = exports.getRoles = void 0;
const roles_1 = __importDefault(require("../models/roles"));
const user_roles_1 = __importDefault(require("../models/user-roles"));
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const roles = yield roles_1.default.findAll();
    res.json(roles);
});
exports.getRoles = getRoles;
const postRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const ExisteRol = yield roles_1.default.findOne({
            where: {
                name: body.name
            }
        });
        if (ExisteRol) {
            return res.status(400).json({
                msg: 'Ya existe un rol con el nombre' + body.name
            });
        }
        const role = yield roles_1.default.create(body);
        yield role.save();
        res.json(role);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postRoles = postRoles;
const putRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const rol = yield roles_1.default.findByPk(id);
        if (!rol) {
            return res.status(404).json({
                msg: 'No existe un rol con el id ' + id
            });
        }
        yield rol.update(body);
        res.json(rol);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.putRole = putRole;
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const role = yield roles_1.default.findByPk(id);
    if (!role) {
        return res.status(404).json({
            msg: 'No existe rol con ese id ' + id
        });
    }
    yield role.destroy();
    res.json(role);
});
exports.deleteRole = deleteRole;
const getUserRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userroles = yield user_roles_1.default.findAll();
    res.json(userroles);
});
exports.getUserRoles = getUserRoles;
const postUserRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const userrole = yield user_roles_1.default.create(body);
        yield userrole.save();
        res.json(userrole);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el admin'
        });
    }
});
exports.postUserRoles = postUserRoles;
const deleteUserRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const userrole = yield user_roles_1.default.findByPk(id);
    if (!userrole) {
        return res.status(404).json({
            msg: 'No existe rol con ese id ' + id
        });
    }
    yield userrole.destroy();
    res.json(userrole);
});
exports.deleteUserRoles = deleteUserRoles;
//# sourceMappingURL=roles.js.map