import jwt from "jsonwebtoken";

const generateToken = (res, userId) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    // Set JWT as an HTTP-Only Cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    });

    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Could not generate token");
  }
};

export default generateToken;
