"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true,
        trim: true //whats do this is to take off space on the end or start.
    },
    password: {
        type: String,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true //this created two variables to know when was created and 
});
exports.default = mongoose_1.model('User', userSchema);
