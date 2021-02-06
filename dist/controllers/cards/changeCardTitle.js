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
exports.changeCardTitle = void 0;
const card_model_1 = require("../../models/card-model");
const changeCardTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const title = req.body.title;
    const cardId = req.params.cardId;
    if (title === undefined) {
        res.status(400).json({ message: 'No card title in the body' });
    }
    else {
        card_model_1.default.findByIdAndUpdate(cardId, { title }, { new: true })
            .exec()
            .then(updatedCard => {
            res.status(200).json({ item: updatedCard });
        })
            .catch(err => {
            res.status(500).json(err);
        });
    }
});
exports.changeCardTitle = changeCardTitle;
//# sourceMappingURL=changeCardTitle.js.map