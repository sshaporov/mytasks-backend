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
exports.getMe = void 0;
const jwt = require("jsonwebtoken");
const config_1 = require("../../config");
const user_model_1 = require("../../models/user-model");
// используем IUserRequest тк в req сидит декодированный user id который декодирован в authMiddleware
const getMe = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.findOne({ _id: req.user.id }).exec();
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
});
exports.getMe = getMe;
//# sourceMappingURL=getMe.js.map