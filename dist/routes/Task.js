"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true //whats do this is to take off space on the end or start.
    },
    description: {
        type: String,
        trim: true
    },
    deadline: {
        type: String,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true //this created two variables to know when was created and 
});
exports.default = mongoose_1.model('Task', taskSchema);
