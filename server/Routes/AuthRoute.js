import { Router } from "express";
import { Register } from "../controllers/Authcontroller.js";
import ErrorMiddleware from "../MiddleWare/Error.middleware.js";

const authRouter = Router();


authRouter.post("/sign-up", ErrorMiddleware, Register);
// AuthRouter.post('/Login',)
// AuthRouter.post('/Logout',)

export default authRouter;