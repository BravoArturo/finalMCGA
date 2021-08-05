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
exports.updateTasks = exports.deleteTasks = exports.createTask = exports.getTask = exports.getTasks = void 0;
const Task_1 = __importDefault(require("./Task"));
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield Task_1.default.find();
        return res.json(tasks);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getTasks = getTasks;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskFound = yield Task_1.default.findById(req.params.id);
        if (!taskFound)
            return res.status(204).json();
        res.json(taskFound);
    }
    catch (error) {
        res.json(error);
    }
});
exports.getTask = getTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task = new Task_1.default(req.body);
    const savedTask = yield task.save();
    console.log(savedTask);
    res.json('creating a new tasks');
});
exports.createTask = createTask;
const deleteTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskDeleted = yield Task_1.default.findByIdAndDelete(req.params.id);
        if (!taskDeleted)
            return res.status(204).json();
        return res.json('One task was deleted ' + taskDeleted);
    }
    catch (error) {
        res.json(error);
    }
});
exports.deleteTasks = deleteTasks;
const updateTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskUpdated = yield Task_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!taskUpdated)
            return res.status(204).json();
        return res.json('One task was Updated ' + taskUpdated);
    }
    catch (error) {
        res.json(error);
    }
});
exports.updateTasks = updateTasks;
