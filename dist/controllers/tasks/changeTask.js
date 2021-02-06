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
exports.changeTask = void 0;
const task_model_1 = require("../../models/task-model");
const changeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const taskId = req.params.taskId;
    const body = req.body;
    if (body.title === undefined && body.checked === undefined) {
        res.status(400).json({ message: 'No data in the body' });
    }
    else {
        task_model_1.default.findByIdAndUpdate(taskId, body, { new: true })
            .exec()
            .then(updatedTask => {
            res.status(200).json({ item: updatedTask });
        })
            .catch(err => {
            res.status(500).json(err);
        });
    }
});
exports.changeTask = changeTask;
//# sourceMappingURL=changeTask.js.map