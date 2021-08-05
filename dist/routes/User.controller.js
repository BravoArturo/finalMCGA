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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUsers = exports.deleteUsers = exports.createUser = exports.getUser = exports.getUsers = void 0;
const User_1 = __importDefault(require("./User"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Users = yield User_1.default.find();
        return res.json(Users);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userFound = yield User_1.default.findById(req.params.id);
        if (!userFound)
            return res.status(204).json();
        res.json(userFound);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getUser = getUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = new User_1.default(req.body);
    const savedUser = yield user.save();
    console.log(savedUser);
    res.json('creating a new Users');
});
exports.createUser = createUser;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDeleted = yield User_1.default.findByIdAndDelete(req.params.id);
        if (!userDeleted)
            return res.status(204).json();
        return res.json('One user was deleted ' + userDeleted);
    }
    catch (error) {
        res.json(error);
    }
});
exports.deleteUsers = deleteUsers;
const updateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userUpdated = yield User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!userUpdated)
            return res.status(204).json();
        return res.json('One user was Updated ' + userUpdated);
    }
    catch (error) {
        res.json(error);
    }
});
exports.updateUsers = updateUsers;
