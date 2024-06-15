import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";


const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  console.log(req.cookies,"cookies output token");
  console.log(req.cookies.accessToken,"this acces token ");
  token = req.cookies.accessToken;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      console.log(decoded ,"this decoded token");
      req.user = await User.findById(decoded.id).select("-password");
      console.log(req.user,"this decoded user");
      if (!req.user) {
        return res.status(401).json({ message: "Not authorized, user not found." });
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed." });
    }
  } else {
    
    return res.status(401).json({ message: "Not authorized, no token." });
  }
});


const authorizeAdmin = (req, res, next) => {
  console.log(req.user );
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("user is not authorized as admin");
  }
};
const verifyJWT = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;
    console.log(req.cookies.accessToken,"this is a access token");
    if (!token) {
      return res.status(401).json({ message: "Unauthorized access: no token provided" });
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?.id).select("-password -refreshToken");

    if (!user) {
      return res.status(401).json({ message: "Token is invalid or user does not exist" });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid access token" });
  }
}); 


export { authenticate, authorizeAdmin , verifyJWT};
