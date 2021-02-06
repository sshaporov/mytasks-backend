"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const addCard_1 = require("../controllers/cards/addCard");
const getCards_1 = require("../controllers/cards/getCards");
const changeCardTitle_1 = require("../controllers/cards/changeCardTitle");
const removeCard_1 = require("../controllers/cards/removeCard");
const getTasks_1 = require("../controllers/tasks/getTasks");
const addTask_1 = require("../controllers/tasks/addTask");
const changeTask_1 = require("../controllers/tasks/changeTask");
const removeTask_1 = require("../controllers/tasks/removeTask");
const authMiddleware_1 = require("../middleware/authMiddleware");
const cards = express.Router();
cards.get('/', authMiddleware_1.authMiddleware, getCards_1.getCards);
cards.post('/', authMiddleware_1.authMiddleware, addCard_1.addCard);
cards.put('/:cardId', authMiddleware_1.authMiddleware, changeCardTitle_1.changeCardTitle);
cards.delete('/:cardId', authMiddleware_1.authMiddleware, removeCard_1.removeCard);
cards.get('/:cardId/tasks', authMiddleware_1.authMiddleware, getTasks_1.getTasks);
cards.post('/:cardId/tasks', authMiddleware_1.authMiddleware, addTask_1.addTask);
cards.put('/:cardId/tasks/:taskId', authMiddleware_1.authMiddleware, changeTask_1.changeTask);
cards.delete('/:cardId/tasks/:taskId', authMiddleware_1.authMiddleware, removeTask_1.removeTask);
exports.default = cards;
//# sourceMappingURL=cards-router.js.map