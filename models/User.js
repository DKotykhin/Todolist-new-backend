import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },    
    name: String,
    avatarURL: String,
}, {
    timestamps: true,
});

export default model('User', UserSchema);