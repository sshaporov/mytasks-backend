"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const logIn_1 = require("../controllers/auth/logIn");
const createUser_1 = require("../controllers/auth/createUser");
const authMiddleware_1 = require("../middleware/authMiddleware");
const getMe_1 = require("../controllers/auth/getMe");
const auth = express.Router();
auth.post('/login', logIn_1.logIn);
auth.post('/registration', createUser_1.createUser);
auth.get('/me', authMiddleware_1.authMiddleware, getMe_1.getMe);
exports.default = auth;
//# sourceMappingURL=auth-router.js.map