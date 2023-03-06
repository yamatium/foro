"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roles_1 = require("../controllers/roles");
const router = (0, express_1.Router)();
router.get('/', roles_1.getRoles);
router.post('/', roles_1.postRoles);
router.put('/:id', roles_1.putRole);
router.delete('/:id', roles_1.deleteRole);
router.get('/userRoles', roles_1.getUserRoles);
router.post('/userRoles/', roles_1.postUserRoles);
router.delete('/userRoles/:id', roles_1.deleteUserRoles);
exports.default = router;
//# sourceMappingURL=roles.js.map