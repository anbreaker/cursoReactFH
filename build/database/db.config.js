"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const urlDB = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        const db = await mongoose_1.default.connect(urlDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDb Conected on: ${db.connection.host}:${db.connection.port}`);
    }
    catch (error) {
        console.error(`Error: ${error.msg}`);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
//# sourceMappingURL=db.config.js.map