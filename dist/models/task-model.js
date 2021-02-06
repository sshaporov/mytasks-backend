"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
const Task = new mongoose_1.Schema({
    card_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        required: false
    },
});
// первый аргумент 'Tasks' - уникальное имя коллекции, второй аргумент Task - схема, которая используется для создания модели
exports.default = mongoose.model('Tasks', Task);
//# sourceMappingURL=task-model.js.map