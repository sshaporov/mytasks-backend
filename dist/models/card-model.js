"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
// используем класс схемы который могус предоставляет для описания структцры данных
// (используем класс на основе которого будет создавать объекты соотвествующие этой схеме)
const Card = new mongoose_1.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
});
// расширяем тип базовой модели своим интерфейсом ICard
// можно не экспортировать модель тк при вызове функции model() монгус запомнит данную модель и предоставит ее в дальнейшем
// (но в этом случае ее необходимо подключить / проимпортировать в index.ts чтобы мангус узнал а ее существовании в проекте)
exports.default = mongoose.model('Cards', Card);
//# sourceMappingURL=card-model.js.map