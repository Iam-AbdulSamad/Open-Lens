import mongoose from "mongoose"
import UserModel from "../Models/UserModel.js"
import bcrypt from "bcrypt"

export const Register = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    console.log(req.body);
    if (!req.body) {
        res.status(200).json({
            success: false,
            meassage: "No Body Found!"
        })
    }
    try {
        const { email, password } = req.body
        const existingingUser = await UserModel.findOne({ email });
        if (existingingUser) {
            const error = new Error("User already exists with this email");
            error.statusCode = 400;
            throw error;
        }
        const hsd_password = await bcrypt.hash(password,10);
        const User = await UserModel.create({
            email,
            password: hsd_password
        })
        session.commitTransaction();
        session.endSession();
        res.status(201).json({
            success: true,
            data: User
        })
    } catch (error) {
        session.abortTransaction();
        session.endSession();
        next(error);
    }
};

