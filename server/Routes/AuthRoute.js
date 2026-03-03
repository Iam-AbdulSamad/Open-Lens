import { Router } from "express";
import { Register, Login } from "../controllers/Authcontroller.js";
import ErrorMiddleware from "../MiddleWare/Error.middleware.js";

const authRouter = Router();
authRouter.use(ErrorMiddleware);


authRouter.post("/sign-up", Register);
authRouter.post('/Login', Login);
// authRouter.post('/Logout',)

export default authRouter;