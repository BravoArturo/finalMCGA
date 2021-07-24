import {Schema, model} from "mongoose";
const taskSchema = new Schema({
    title:{
        type: String,
        required: true,
        trim: true //whats do this is to take off space on the end or start.
    },
    description:{
        type: String,
        trim: true
    }
},
    {
        versionKey: false,
        timestamps: true //this created two variables to know when was created and 
    }
);

export default model ('Task', taskSchema);