"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const Task_routes_1 = __importDefault(require("./routes/Task.routes"));
const User_routes_1 = __importDefault(require("./routes/User.routes"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(express_1.default.json());
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: false })); //When is sent some information by a post from a form it can understand what contains.
app.use(morgan_1.default('dev')); //this give me information about the proccess.
app.use(Task_routes_1.default);
app.use(User_routes_1.default);
exports.default = app;
