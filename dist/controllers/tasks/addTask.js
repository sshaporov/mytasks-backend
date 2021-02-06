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
exports.addTask = void 0;
const task_model_1 = require("../../models/task-model");
const addTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = {
        card_id: req.params.cardId,
        title: req.body.title,
        checked: false
    };
    if (task.title === undefined) {
        res.status(400).json({ message: 'No task title in the body!' });
    }
    else {
        task_model_1.default.create(task)
            .then((newTask) => {
            res.status(201).json({ item: newTask });
        })
            .catch(err => {
            res.status(500).json(err);
        });
    }
});
exports.addTask = addTask;
//# sourceMappingURL=addTask.js.map