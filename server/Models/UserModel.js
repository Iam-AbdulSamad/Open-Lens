import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is Required"],
        trim: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/]
    },
    password: {
        type: String,
        required: [true, "Password is Required"],
        trim: true,
        match: [/^.{6,}$/]
    }
}, { timestamps: true })

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;