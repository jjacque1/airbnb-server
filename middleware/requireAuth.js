import jwt from "jsonwebtoken";

export function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Not authenticated" });
    }

    const token = authHeader.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Invalid or expired token" });
    }

    return res.status(401).json({ message: "Authentication failed" });
  }
}
