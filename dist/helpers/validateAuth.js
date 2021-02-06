"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuth = exports.passwordValidator = exports.emailValidator = void 0;
const emailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i;
const emailValidator = (email) => emailRegExp.test(email);
exports.emailValidator = emailValidator;
const passwordValidator = (password) => password.length > 3;
exports.passwordValidator = passwordValidator;
const validateAuth = (req, res) => {
    const isEmailValid = exports.emailValidator(req.body.email);
    const isPassValid = exports.passwordValidator(req.body.password);
    if (!isEmailValid) {
        res.status(400).json({ message: 'Email or password incorrect!' });
        return false;
    }
    else if (!isPassValid) {
        res.status(400).json({ message: 'Password is too short!' });
        return false;
    }
    else {
        return true;
    }
};
exports.validateAuth = validateAuth;
//# sourceMappingURL=validateAuth.js.map