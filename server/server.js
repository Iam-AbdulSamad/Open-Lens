import express from 'express';
import connectDB from './database/db.js';
import authRouter from './Routes/AuthRoute.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/auth", authRouter);

app.get('/', (req, res) => {
    res.json({
        message: "hello world!"
    })
})




app.listen(process.env.PORT || 3000, async() => {
    await connectDB()
    console.log(`Server is running on port ${process.env.PORT || 3000} ->  http://localhost:${process.env.PORT || 3000}`);
})