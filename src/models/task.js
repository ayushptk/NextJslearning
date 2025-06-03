import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    addedDate: {
        type: String,
        required: true,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending",
    },

    
  
})


export const Task = mongoose.models.tasks || mongoose.model("tasks", TaskSchema);

