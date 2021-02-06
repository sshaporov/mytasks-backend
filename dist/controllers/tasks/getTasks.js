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
exports.getTasks = void 0;
const task_model_1 = require("../../models/task-model");
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cardId = req.params.cardId;
    task_model_1.default.find({ card_id: cardId })
        .exec()
        .then(tasks => {
        res.status(200).json(tasks);
    })
        .catch(err => {
        res.status(500).json(err);
    });
});
exports.getTasks = getTasks;
//# sourceMappingURL=getTasks.js.map