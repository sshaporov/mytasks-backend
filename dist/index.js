"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const cards_router_1 = require("./routers/cards-router");
const auth_router_1 = require("./routers/auth-router");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config_1 = require("./config");
const http = require("http");
// import * as https from 'https'
// import * as fs from 'fs'
// const key = fs.readFileSync('./key.pem')
// const cert = fs.readFileSync('./cert.pem')
const app = express();
// const server = https.createServer({key: key, cert: cert }, app)
const server = http.createServer(app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/cards', cards_router_1.default);
app.use('/auth', auth_router_1.default);
mongoose.connect(config_1.MONGO_URI, config_1.MONGOOSE_CONNECT_OPTIONS)
    .then(() => {
    console.log('MongoDB connected successfully');
    const port = process.env.PORT || config_1.PORT;
    server.listen(port, () => {
        console.log(`Server is running in https://localhost:${port}`);
    });
})
    .catch(err => {
    console.log('Mongo server error', err);
});
process.on("unhandledRejection", (reason, p) => {
    console.log("MyTasks: ", reason, p);
});
//# sourceMappingURL=index.js.map