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
exports.addCard = void 0;
const card_model_1 = require("../../models/card-model");
const addCard = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const card = {
        title: req.body.title,
        user_id: req.user.id,
    };
    if (card.title === undefined) {
        res.status(400).json({ message: 'No card title in the body!' });
    }
    else {
        card_model_1.default.create(card)
            .then(newCard => {
            res.status(201).json({ item: newCard });
        })
            .catch(err => {
            res.status(500).json(err);
        });
    }
});
exports.addCard = addCard;
//# sourceMappingURL=addCard.js.map