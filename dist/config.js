"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.MONGOOSE_CONNECT_OPTIONS = exports.MONGO_URI = exports.PORT = void 0;
exports.PORT = 3010;
const MONGO_DB_USER_NAME = 'admin';
const MONGO_DB_PASSWORD = process.env.MONGO_DB_USER_PASSWORD || 'Passw0rd';
const MONGO_DB_URL = process.env.MONGO_DB_URL || 'cluster0.ahetv.mongodb.net/myTasks';
exports.MONGO_URI = `mongodb+srv://${MONGO_DB_USER_NAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_URL}?retryWrites=true&w=majority`;
exports.MONGOOSE_CONNECT_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};
exports.JWT_SECRET = 'MyTasks app';
//# sourceMappingURL=config.js.map