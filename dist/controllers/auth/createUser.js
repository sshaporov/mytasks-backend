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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_model_1 = require("../../models/user-model");
const bCrypt = require("bCrypt");
const validateAuth_1 = require("../../helpers/validateAuth");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (validateAuth_1.validateAuth(req, res)) {
        try {
            //const {name, email, password} = req.body
            const email = req.body.email;
            const password = req.body.password;
            let name = null;
            req.body.name && (name = req.body.name);
            // без await не работает тк методы бд асинхронные
            const candidate = yield user_model_1.default.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: `User with email ${email} already exist!` });
            }
            const hashPassword = yield bCrypt.hash(password, 10);
            // сделать проверку на name != null чтобы не схранять в базу name = null
            const user = new user_model_1.default({ email, password: hashPassword, name });
            yield user_model_1.default.create(user);
            res.json({ message: 'User was created!' });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
});
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map