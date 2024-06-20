import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "./asyncHandler.js";

const authenticate = asyncHandler(async (req, res, next) => {
  console.log(req.cookies,"authenticate")
  const token = req.cookies?.accessToken;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    console.log("this decoded token");
    req.user = await User.findById(decoded.id).select("-password");
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized: User not found" });
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
});

const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send("Unauthorized: User is not authorized as admin");
  }
};

const verifyJWT = asyncHandler(async (req, res, next) => {
  console.log(req.cookies,"verifyJWT");
  const token = req.cookies?.accessToken;
  console.log(token,"this token jwt ");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No access token provided" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken.id).select("-password -refreshToken");
    if (!user) {
      return res.status(401).json({ message: "Invalid access token or user does not exist" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid access token" });
  }
});

export { authenticate, authorizeAdmin, verifyJWT };