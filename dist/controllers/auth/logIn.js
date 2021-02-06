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
exports.logIn = void 0;
const user_model_1 = require("../../models/user-model");
const bCrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config_1 = require("../../config");
const validateAuth_1 = require("../../helpers/validateAuth");
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (validateAuth_1.validateAuth(req, res)) {
        try {
            const { email, password } = req.body;
            const user = yield user_model_1.default.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'User not found!' });
            }
            const isPassValid = bCrypt.compareSync(password, user.password);
            if (!isPassValid) {
                return res.status(401).json({ message: 'Invalid credentials!' });
            }
            const token = jwt.sign({ id: user._id }, config_1.JWT_SECRET, { expiresIn: '1h' });
            return res.json({
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                }
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
});
exports.logIn = logIn;
//# sourceMappingURL=logIn.js.map