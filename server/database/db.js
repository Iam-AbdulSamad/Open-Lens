import mongoose from "mongoose";

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database Succesfully Connected!");
    } catch (error) {
        console.log(`Databse not connected! Error-> ${error}`);
    }
}

export default connectDB