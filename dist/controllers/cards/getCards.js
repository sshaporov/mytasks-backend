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
exports.getCards = void 0;
const card_model_1 = require("../../models/card-model");
const getCards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const searchCardTitle = req.query.search;
    card_model_1.default.find({ user_id: userId })
        .exec()
        .then(cards => {
        if (searchCardTitle == undefined || searchCardTitle == '') {
            res.status(200).json(cards);
        }
        else {
            const cardsSearch = cards.filter(card => card.title === searchCardTitle);
            res.status(200).json(cardsSearch);
        }
    })
        .catch(err => {
        res.status(500).json(err);
    });
});
exports.getCards = getCards;
//# sourceMappingURL=getCards.js.map