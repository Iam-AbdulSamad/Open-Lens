import jwt from "jsonwebtoken";

export const generateAuthToken = (id) => {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {expiresIn: "1h"});
}